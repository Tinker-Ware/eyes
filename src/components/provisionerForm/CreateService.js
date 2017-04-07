import React, { PropTypes } from "react";
import { fromJS, Map } from "immutable";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";

const style = {
  button: {
    margin: 0,
    padding: ".5em",
    height: "auto"
  }
};

const CreateService = ( {baseAppState, buildbotAppState, cloudProviderAppState, projectNameAppState, repositoryAppState, userAppState, requestPostUserProject, mysqlAppState, nginxAppState, yiiAppState} ) => {
  const getBaseConfiguration = () => {
    return {
        "server_user": "tinkerware",
        "server_group": "tinkerware",
        "users": [
          {
            "name":"tinkerware",
            "group":"tinkerware",
            "generate_ssh_key":true,
            "extra_groups":"sudo",
            "password":"$6$PqQH1UMx7L$C8.JjzOlMbLVed7DMizT9XGKzTaLsucv/pYzFhBjIUVmBffq.WyhcwfIjLiBDe4drT7iHOy8W0em0MKLaK2bR."
          }
        ],
        "private_key": true,
        "private_key_name": "ansible_id_rsa",
        "cronjobs":[]
      };
  };
  const getYiiConfiguration = (environment=-1) => {
    if(yiiAppState.get("enable_yii")){
      let config;
      if(environment==-1)
        config={
          "yii_git_repo":repositoryAppState.get("repository")?repositoryAppState.get("repository").toJS().ssh_url:"https://github.com/Tinker-Ware/yii2-crud"
        };
      else if(environment==1)
        config = {"yii_extra_flags": "--no-dev"};
      return config;
    }
  };
  const getNginxConfiguration = () => {
    return {
        //NGINX ROLE
        "nginx_remove_default_vhost": true,
        "nginx_vhosts": nginx()
      };
  };
  const getMysqlConfiguration = (environment) => {
    if(mysqlAppState.get("enable_mysql")){
      let config;
      if(environment==-1)
        config={
          "mysql_packages": []
        };
      else{
        let databases = [];
        let users = [];
        let cookieValidationKey;
        if(mysqlAppState.get("mysql_users")){
          mysqlAppState.get("mysql_users").toJS().map(value=>{
            if(value.environment == environment)
              users.push(value);
          });
        }
        if(mysqlAppState.get("mysql_databases")){
          mysqlAppState.get("mysql_databases").toJS().map(value=>{
            if(value.environment == environment)
              databases.push(value);
          });
        }
        if(mysqlAppState.get("cookie_validation_key")){
          mysqlAppState.get("cookie_validation_key").toJS().map(value=>{
            if(value.environment == environment)
              cookieValidationKey=value;
          });
        }
        config = {
          "mysql_root_password":cookieValidationKey,
          "mysql_users":users,
          "mysql_databases":databases
        };
      }
      return config;
    }
  };
  const configuration = () => {
    return {
      "general":{...getBaseConfiguration(), ...getNginxConfiguration(), ...getYiiConfiguration(), ...getMysqlConfiguration()},
      "development":{env:"development", ...getYiiConfiguration(0), ...getMysqlConfiguration(0)},
      "production":{env:"production", ...getYiiConfiguration(1), ...getMysqlConfiguration(1)}
    };
  };
  const nginx = () => {
    let nginxArray = [];
    if(yiiAppState.get("enable_yii")) nginxArray.push(yiiAppState.get("nginx"));
    return nginxArray;
  };
  const roles = () => {
    let rolesArray = [];
    if(baseAppState.get("enable_base")) rolesArray.push(baseAppState.get("roles"));
    if(buildbotAppState.get("enable_buildbot")) rolesArray.push(buildbotAppState.get("roles"));
    if(yiiAppState.get("enable_yii")) rolesArray.push(yiiAppState.get("roles"));
    if(mysqlAppState.get("enable_mysql")) rolesArray.push(mysqlAppState.get("roles"));
    if(nginxAppState.get("enable_nginx")) rolesArray.push(nginxAppState.get("roles"));
    return rolesArray;
  };
  const handleCreateUserProject = () => {
    requestPostUserProject(fromJS({
      "authorization": userAppState.get("user_session").toJS().token,
      "user_project":{
        "user_id": userAppState.get("user_session").toJS().id,
        "project_name": projectNameAppState.get("project_name"),
        "roles": roles(),
        "server_provider": "digital_ocean",
        "operating_system": "debian/contrib-jessie64",
        "configuration": configuration(),
        "repository": {
          "provider": repositoryAppState.get("repository")?repositoryAppState.get("repository").toJS().provider:"github",
          "name": repositoryAppState.get("repository")?repositoryAppState.get("repository").toJS().name:"Tinker-Ware/reponame",
          "username": repositoryAppState.get("integration").toJS().username
        },
        "ssh_keys": cloudProviderAppState.get("cloud_provider_ssh_keys")?
          cloudProviderAppState.get("cloud_provider_ssh_keys").filter(value=>
            value.get("enable") == true
          ).map(value=>
            Map({
              user_id: userAppState.get("user_session").toJS().id,
              title: value.get("title"),
              fingerprint: value.get("fingerprint"),
              key: value.get("key")
            })
          ).toJS():{}
      }
    }));
  };
    return (
      <RaisedButton
          buttonStyle={style.button}
          disabled={
            repositoryAppState.get("integration")&&
            projectNameAppState.get("project_name")?
              false:true
          }
          fullWidth
          icon={<FontIcon className="icon icon-project" />}
          label={"Create Project"}
          onClick={handleCreateUserProject}
          primary
      />
    );
};

CreateService.propTypes = {
  baseAppState: PropTypes.object.isRequired,
  buildbotAppState: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  nginxAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  requestPostUserProject: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default CreateService;
