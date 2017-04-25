import { fromJS, Map } from "immutable";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

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
          "yii_git_repo":repositoryAppState.get("repository")?repositoryAppState.get("repository").toJS().ssh_url:yiiAppState.get("default_repo_ssh")
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
  const getMysqlConfiguration = (environment=-1) => {
    if(mysqlAppState.get("enable_mysql")||mysqlAppState.get("enable_mariadb")){
      let config;
      if(environment==-1)
        config={
          "mysql_packages": mysqlAppState.get("enable_mysql")?[]:["mariadb-client","mariadb-server","python-mysqldb"]
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
    if(mysqlAppState.get("enable_mysql")||mysqlAppState.get("enable_mariadb")) rolesArray.push(mysqlAppState.get("roles"));
    if(nginxAppState.get("enable_nginx")) rolesArray.push(nginxAppState.get("roles"));
    return rolesArray;
  };
  const repositoryApp = () => {
    let repository = "";
    if(yiiAppState.get("enable_yii")) repository = yiiAppState.get("default_repo");
    return repository;
  };
  const pathApp = () => {
    let path = "";
    if(yiiAppState.get("enable_yii")) path = repositoryAppState.get("repository")?
      yiiAppState.get("path")+repositoryAppState.get("repository").toJS().name.split("/")[1]+".git"
      :yiiAppState.get("path")+yiiAppState.get("default_repo_name")+".git";
    return path;
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
          "provider": repositoryAppState.get("repository")?
            repositoryAppState.get("repository").toJS().provider
            :"github",
          "name": repositoryAppState.get("repository")?
            repositoryAppState.get("repository").toJS().name
            :repositoryApp(),
          "path": pathApp(),
          "username": repositoryAppState.get("repository")?
            repositoryAppState.get("integration").toJS().username
            :"Tinker-Ware"
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
