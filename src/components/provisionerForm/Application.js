import React, { PropTypes } from "react";
import { fromJS } from "immutable";
import ApplicationItem from "./ApplicationItem";

const Application = ( {applicationsOptions, setApplication, setApplicationOneClick, applicationAppState} ) => {
  const findAndReplace = (object, value, replacevalue) => {
    for(var x in object){
      if(typeof object[x] == typeof {}){
        findAndReplace(object[x], value, replacevalue);
      }
      console.log(x);
      if(x == value){
        object[value] = replacevalue;
        break;
      }
    }
  };
  const handleApplicationClick = (e, id, role) => {
    e.preventDefault();
    setApplication(fromJS({
      application: {
        name: id,
        roles: role
      }
    }));
  };
  const remplaceRoleValue = (e, role, identifier) => {
    // findAndReplace(role, identifier, e.target.value);
    // handleApplicationClick(e, identifier, role);
    // console.log(role);
  };
  const handleApplicationOneClick = (e, id, role) => {
    // console.log(role);
    e.preventDefault();
    setApplicationOneClick(fromJS({
      applications: applicationAppState.get("application_oneclickapp")?applicationAppState.get("application_oneclickapp"):[],
      application: {
        id: id,
        name: id,
        roles: role
      }
    }));

    // requestPostCloudProviderSSHKey(fromJS({"authorization": userAppState.get("user_session").toJS().token,"user_id": userAppState.get("user_session").toJS().id,"sshKeys": cloudProviderAppState.get("cloud_provider_ssh_keys"),"sshKey": {"name": cloudProviderAppState.get("cloud_provider_ssh_keys_name"),"public_key": cloudProviderAppState.get("cloud_provider_ssh_keys_public_key")
    //   }
    // }));
  };
  return (
    <div className="small-12 medium-12 large-12">
      <div className="row">
        <h2>{"Choose an One-Click Apps"}</h2>
        {applicationsOptions.apps.map((value, index) =>
          (value.enabled)?
            <ApplicationItem
                activeApplication={applicationAppState.get("application_name")?applicationAppState.get("application_name").toJS().name:""}
                configuration={value.configuration}
                description={value.description}
                end={(index == applicationsOptions.apps.length - 1) ? true : false}
                handleApplicationOneClick={handleApplicationOneClick}
                handleClick={handleApplicationClick}
                icon={value.icon}
                identifier={value.identifier}
                key={value.identifier}
                name={value.name}
                remplaceRoleValue={remplaceRoleValue}
                roles={applicationAppState.get("application_oneclickapp")?applicationAppState.get("application_oneclickapp").toJS()[2]:value.roles}
            /> : ''
        )}
      </div>
      <div className="row">
        <h2>{"Choose a Database"}</h2>
        {applicationsOptions.databases.map((value, index) =>
          (value.enabled)?
            <ApplicationItem
                activeApplication={applicationAppState.get("application_name")?applicationAppState.get("application_name").toJS().name:""}
                configuration={value.configuration}
                description={value.description}
                end={(index == applicationsOptions.databases.length - 1) ? true : false}
                handleApplicationOneClick={handleApplicationOneClick}
                handleClick={handleApplicationClick}
                icon={value.icon}
                identifier={value.identifier}
                key={value.identifier}
                name={value.name}
                remplaceRoleValue={remplaceRoleValue}
                roles={applicationAppState.get("application_oneclickapp")?applicationAppState.get("application_oneclickapp").toJS()[2]:value.roles}
              /> : ''
          )}
      </div>
      <div className="row">
        <h2>{"Choose a Web Serving Software"}</h2>
        {console.log(applicationAppState.get("application_oneclickapp")?applicationAppState.get("application_oneclickapp").get("roles"):"")}
        {applicationsOptions.web_serving_softwares.map((value, index) =>
          (value.enabled)?
            <ApplicationItem
                activeApplication={applicationAppState.get("application_name")?applicationAppState.get("application_name").toJS().name:""}
                configuration={value.configuration}
                description={value.description}
                end={(index == applicationsOptions.web_serving_softwares.length - 1) ? true : false}
                handleApplicationOneClick={handleApplicationOneClick}
                handleClick={handleApplicationClick}
                icon={value.icon}
                identifier={value.identifier}
                key={value.identifier}
                name={value.name}
                remplaceRoleValue={remplaceRoleValue}
                roles={applicationAppState.get("application_oneclickapp")?applicationAppState.get("application_oneclickapp").toJS()[2]:value.roles}
              /> : ''
          )}
      </div>
    </div>
  );
};

Application.propTypes = {
  setApplication: PropTypes.func.isRequired,
  setApplicationOneClick: PropTypes.func.isRequired,
  applicationsOptions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired
};

export default Application;
