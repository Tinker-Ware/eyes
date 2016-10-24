import React, { PropTypes } from "react";
import { fromJS, Map } from "immutable";

const CreateService = ( {cloudProviderAppState, projectNameAppState, repositoryAppState, applicationAppState, userAppState, requestPostUserProject} ) => {
  const handleCreateUserProject = (e) => {
    e.preventDefault();
    requestPostUserProject(fromJS({
      "authorization": userAppState.get("user_session").toJS().token,
      "user_project":{
        "user_id": userAppState.get("user_session").toJS().id,
        "project_name": projectNameAppState.get("project_name"),
        "roles": applicationAppState.get("application_name").toJS().roles,
        "server_provider": "digital_ocean",
        "configuration": (applicationAppState.get("application_name").toJS().name=="Ghost")?
        {
          "server_name": projectNameAppState.get("project_name"),
          "ghost_user_name": projectNameAppState.get("project_name").split(".")[0],
          "ghost_user_group": projectNameAppState.get("project_name").split(".")[0],
          "ghost_repo": "https://github.com/"+repositoryAppState.get("repository").toJS().name
        }: {
          "server_name": projectNameAppState.get("project_name"),
          "nginx_remove_default_vhost": "true",
          "server_user": projectNameAppState.get("project_name").split(".")[0],
          "server_group": projectNameAppState.get("project_name").split(".")[0],
          "github_repo": "https://github.com/"+repositoryAppState.get("repository").toJS().name
        },
        "repository": {
          "provider": repositoryAppState.get("repository").toJS().provider,
          "name": repositoryAppState.get("repository").toJS().name
        },
        "ssh_keys": cloudProviderAppState.get("cloud_provider_ssh_keys").filter(value=>
          value.get("enable") == true
        ).map(value=>
          Map({
            user_id: userAppState.get("user_session").toJS().id,
            title: value.get("title"),
            fingerprint: value.get("fingerprint"),
            key: value.get("key")
          })
        ).toJS()
      }
    }));
  };
  const btnCreateService =
    repositoryAppState.get("integration")&&
    repositoryAppState.get("repository")&&
    projectNameAppState.get("project_name")&&
    applicationAppState.get("application_name") ?
      <a
          className="button radius expanded"
          href="javascript:void(0);"
          id="btn-create_service"
          onClick={handleCreateUserProject}
      >
          <i className="step fi-power" />
           Create Service
      </a> :
      <a
          className="button radius expanded disabled"
          href="javascript:void(0);"
          id="btn-create_service"
          onClick={handleCreateUserProject}
      >
          <i className="step fi-power" />
           Create Service</a>;
    return (
      <div className="large-12 large-centered medium-12 medium-centered small-12 small-centered columns">
        {btnCreateService}
      </div>
  );
};

CreateService.propTypes = {
  cloudProviderAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  requestPostUserProject: PropTypes.func.isRequired
};

export default CreateService;
