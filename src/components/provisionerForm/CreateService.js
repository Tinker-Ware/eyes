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

const CreateService = ( {baseAppState,cloudProviderAppState, projectNameAppState, repositoryAppState, applicationAppState, userAppState, requestPostUserProject, mysqlAppState, yiiAppState} ) => {
  const getBaseConfiguration = () => {
    return {
        "server_user": "tinkerware",
        "server_group": "tinkerware",
        "users": [
          {
            "name":"tinkerware",
            "group":"tinkerware",
            "generate_ssh_key":true,
            "groups":"sudo",
            "password":"$6$PqQH1UMx7L$C8.JjzOlMbLVed7DMizT9XGKzTaLsucv/pYzFhBjIUVmBffq.WyhcwfIjLiBDe4drT7iHOy8W0em0MKLaK2bR.",
            "authorized_keys":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDZ7DLbiAQ680hZlapMm7hsvuslplUd9PvDx1eoXjCHkDvMZPf2N6nH0ziOYWt9Z3h1GRGHu+3mfQ/FR12uQUqxLir+p0FoN4YUmN38LUrz/nlpqE8I1/izqXuiwId63p28logIM3Grb19w+5a0ubV248TAT+L0ch0IG60bCyrDYZ2gdpdxAnuObpSTEi+bQ3fSM2lF/h3tCrgprhlCUSH6SKvBeYAjovwjY+dJ4ZM2IOdpeSIoZc6yGA16jTKg6lVB926GeboqAO2MsUerHw8T2OPC0975oEpiUDh4TUVoMScP2eWdV4KsR0d11rYqIuEkSzeUfLVR2pP9oRxm2JkLQUqk5H/SqRxhw2NKMSzaC8vmTXWCD2l2Gm4y2X+fsGdjsTpfNXF+ayCFaKV+0pE0jBBjalXeAHi1/W1OJCWjl0ZUc9zSv+bn+GypxH4/g9vK8GMPjq7M4TjtEMexVGTntcpH44G3Tj1ziIcsidoj3UqD1HX+UWpEIRATyAKLd/d2lnQBWOvmuztuRghxGaMyNkEXowd6s/pfQii2/aU6lH50WsDlY+5Bwa/k6dN5iir4hSStK0SO0Zx6j969Zz6wLbITzZoq1ThW73ErWFwjuxdx1bcYzyCvTQx6Ck9wgrv5zZGJmYD6Dg2d730odHKwnWKRpEa97usQ/HwWMXH2UQ== tinkerware@ansible1"
          }
        ],
        "private_key": true,
        "private_key_name": "ansible_id_rsa",
        "cronjobs":{}
      };
  };
  const getYiiConfiguration = () => {
    return yiiAppState.get("enable_yii")?
      {
        //YII ROLE
        "cookie_validation_key":yiiAppState.get("cookie_validation_key"),
        "yii_git_repo":"https://github.com/"+repositoryAppState.get("repository").toJS().name
      }
      :"";
  };
  const getNginxConfiguration = () => {
    return {
        //NGINX ROLE
        "nginx_vhosts": nginx()
      };
  };
  const getMysqlConfiguration = () => {
    return mysqlAppState.get("enable_mysql")?
      {
        //MYSQL ROLE
        "mysql_root_password":mysqlAppState.get("mysql_root_password"),
        "mysql_users":mysqlAppState.get("mysql_users").toJS(),
        "mysql_packages": [
          "mariadb-client",
          "mariadb-server",
          "python-mysqldb"
        ],
        "mysql_databases": [
          {
            "name": "ti_database",
            "encoding": "utf8",
            "collation": "utf8_general_ci"
          }
        ]
      }
      :"";
  };
  const configuration = () => {
    return {
      "general":{...getBaseConfiguration(), ...getYiiConfiguration(), ...getMysqlConfiguration(), ...getNginxConfiguration()},
      "development":{},
      "production":{}
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
    if(yiiAppState.get("enable_yii")) rolesArray.push(yiiAppState.get("roles"));
    if(mysqlAppState.get("enable_mysql")) rolesArray.push(mysqlAppState.get("roles"));
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
        "operating_system": "debian",
        "configuration": configuration(),
        "repository": {
          "provider": repositoryAppState.get("repository").toJS().provider,
          "name": repositoryAppState.get("repository").toJS().name,
          "username": repositoryAppState.get("integration").toJS().username
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
    return (
      <RaisedButton
          buttonStyle={style.button}
          disabled={
            repositoryAppState.get("integration")&&
            repositoryAppState.get("repository")&&
            projectNameAppState.get("project_name")?
            // &&applicationAppState.get("application_name")?
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
  applicationAppState: PropTypes.object.isRequired,
  baseAppState: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  requestPostUserProject: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default CreateService;
