import { fromJS, Map } from "immutable";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const style = {
  button: {
    margin: 0,
    height: "auto"
  }
};

const CreateService = ( {baseAppState, buildbotAppState, cloudProviderAppState, projectNameAppState, repositoryAppState, springAppState, userAppState, requestPostUserProject, mysqlAppState, nginxAppState, yiiAppState, plainHtmlAppState, mongodbAppState, nodejsAppState, sparkAppState} ) => {
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
    if(yiiAppState.get("enable_yii")||yiiAppState.get("enable_yii_advanced")){
      let config;
      if(environment==-1)
        config={
          "repo":repositoryAppState.get("repository")?
            repositoryAppState.get("repository").toJS().ssh_url:
            yiiAppState.get("enable_yii_advanced")?
              yiiAppState.get("default_advanced_repo"):yiiAppState.get("default_repo")
        };
      else if(environment==1)
        config = {"yii_extra_flags": "--no-dev"};
      return config;
    }
  };
  const getSpringConfiguration = () => {
    if(springAppState.get("enable_spring")){
      return {
        "repo":repositoryAppState.get("repository")?
          repositoryAppState.get("repository").toJS().ssh_url:
          springAppState.get("default_repo")
      };
    }
  };
  const getNodejsConfiguration = () => {
    if(nodejsAppState.get("enable_nodejs")){
      return {
        "repo":repositoryAppState.get("repository")?
          repositoryAppState.get("repository").toJS().ssh_url:
          nodejsAppState.get("default_repo")
      };
    }
  };
  const getSparkConfiguration = () => {
    if(sparkAppState.get("enable_spark")){
      return {
        "repo":repositoryAppState.get("repository")?
          repositoryAppState.get("repository").toJS().ssh_url:
          sparkAppState.get("default_repo")
      };
    }
  };
  const getPureHtmlConfiguration = () => {
    if(plainHtmlAppState.get("enable_plainhtml")){
      return {
        "repo":repositoryAppState.get("repository")?
          repositoryAppState.get("repository").toJS().ssh_url:
          plainHtmlAppState.get("default_repo")
      };
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
          "mysql_packages": mysqlAppState.get("enable_mysql")?["mysql-client","mysql-server","python-mysqldb"]:["mariadb-client","mariadb-server","python-mysqldb"]
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
      "general":{...getBaseConfiguration(), ...getNginxConfiguration(), ...getPureHtmlConfiguration(), ...getYiiConfiguration(), ...getMysqlConfiguration(), ...getSpringConfiguration(), ...getNodejsConfiguration(), ...getSparkConfiguration()},
      "development":{env:"development", ...getYiiConfiguration(0), ...getMysqlConfiguration(0)},
      "production":{env:"production", ...getYiiConfiguration(1), ...getMysqlConfiguration(1)}
    };
  };
  const nginx = () => {
    let nginxArray = [];
    if(yiiAppState.get("enable_yii"))
      nginxArray.push(yiiAppState.get("nginx"));
    if(plainHtmlAppState.get("enable_plainhtml"))
      nginxArray.push(plainHtmlAppState.get("nginx"));
    if(nodejsAppState.get("enable_nodejs"))
      nginxArray.push(nodejsAppState.get("nginx"));
    return nginxArray;
  };
  const roles = () => {
    let rolesArray = [];
    if(nginxAppState.get("enable_nginx"))
      nginxAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(baseAppState.get("enable_base"))
      baseAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(buildbotAppState.get("enable_buildbot"))
      buildbotAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(yiiAppState.get("enable_yii"))
      yiiAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(nodejsAppState.get("enable_nodejs"))
      nodejsAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(sparkAppState.get("enable_spark"))
      sparkAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(yiiAppState.get("enable_yii_advanced"))
      yiiAppState.get("roles_advanced").map((role)=>
        rolesArray.push(role)
      );
    if(mysqlAppState.get("enable_mysql")||mysqlAppState.get("enable_mariadb"))
      mysqlAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(mongodbAppState.get("enable_mongodb"))
      mongodbAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(springAppState.get("enable_spring"))
      springAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    if(plainHtmlAppState.get("enable_plainhtml"))
      plainHtmlAppState.get("roles").map((role)=>
        rolesArray.push(role)
      );
    return rolesArray;
  };
  const repositoryApp = () => {
    let repository = "";
    if(yiiAppState.get("enable_yii")||yiiAppState.get("enable_yii_advanced")) repository = yiiAppState.get("enable_yii_advanced")?yiiAppState.get("default_advanced_repo"):yiiAppState.get("default_repo");
    if(plainHtmlAppState.get("enable_plainhtml")) repository = plainHtmlAppState.get("default_repo");
    if(springAppState.get("enable_spring")) repository = springAppState.get("default_repo");
    if(nodejsAppState.get("enable_nodejs")) repository = nodejsAppState.get("default_repo");
    if(sparkAppState.get("enable_spark")) repository = sparkAppState.get("default_repo");
    return repository;
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
          "username": repositoryAppState.get("repository")?
            repositoryAppState.get("integration")?
              repositoryAppState.get("integration").toJS().username:
              "Tinker-Ware"
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
          icon={<FontIcon className="icon icon-project" />}
          label={"Create Project"}
          onTouchTap={handleCreateUserProject}
          primary
          style={style}
      />
    );
};

CreateService.propTypes = {
  baseAppState: PropTypes.object.isRequired,
  buildbotAppState: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  mongodbAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  nginxAppState: PropTypes.object.isRequired,
  nodejsAppState: PropTypes.object.isRequired,
  plainHtmlAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  requestPostUserProject: PropTypes.func.isRequired,
  sparkAppState: PropTypes.object.isRequired,
  springAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default CreateService;
