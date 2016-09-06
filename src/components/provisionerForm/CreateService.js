import React, { PropTypes } from 'react';
import { Link } from 'react-router'; 
import {fromJS, Map} from 'immutable';

const CreateService = ( {cloudProviderAppState, projectNameAppState, repositoryAppState, applicationAppState, userAppState, requestPostUserProject} ) => {
  const handleCreateUserProject = (e) => {
    e.preventDefault();
    requestPostUserProject(fromJS({
      "authorization": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf",
      "user_project":{
        "user_id": userAppState.get('user_session').toJS().id,
        "project_name": projectNameAppState.get("project_name"),
        "application_name": applicationAppState.get("application_name"),
        "server_provider": "digital_ocean",
        "configuration": {
          "server_name": projectNameAppState.get("project_name"),
          "nginx_remove_default_vhost": "true"
        },
        "repository": {
          "provider": repositoryAppState.get("repository").toJS().provider,
          "username": repositoryAppState.get("integration").toJS().username,
          "name": repositoryAppState.get("repository").toJS().name
        },
        "keys": cloudProviderAppState.get('cloud_provider_ssh_keys').filter(value => 
          value.get('enable') == true
        ).map(value => 
          Map({
            id: value.get('id'),
            fingerprint: value.get('fingerprint')
          })
        ).toJS()
      }
    }));
  };
  const btnCreateService = 
    repositoryAppState.get('integration') && 
    repositoryAppState.get('repository') &&
    projectNameAppState.get('project_name') && 
    applicationAppState.get('application_name') ? 
      <a
        href="javascript:void(0);"
        id="btn-create_service"
        onClick={handleCreateUserProject}
        className="button radius expanded">
          <i className="step fi-power"></i>
           Create Service</a> : 
      <a
        href="javascript:void(0);"
        id="btn-create_service"
        onClick={handleCreateUserProject}
        className="button radius expanded disabled">
          <i className="step fi-power"></i>
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
