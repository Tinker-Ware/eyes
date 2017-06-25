import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import MysqlRole from "../roles/MysqlRole";

const DataBases = ( {activeEnvironment, activeStepConfiguration, environments,  applicationAppState, mysqlAppState, rolesActions, setActiveConfigurationStep, setActiveStep, setDatabase, removeDatabase, databasesOptions, databases} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeDatabase = (database, insert) => {
    if(insert){
      setDatabase(fromJS({
        database: database
      }));
      if(databases.size != 0)
        handleChangeStatusDatabase(databases.first(), false);
      handleChangeStatusDatabase(database, true);
    }
    else{
      removeDatabase(fromJS({
        database: database
      }));
      handleChangeStatusDatabase(database, false);
    }
  };
  const handleChangeStatusDatabase = (database, status) => {
    switch (database) {
      case "mysql":
        rolesActions.setEnableMysql(
          fromJS({
            enable_mysql: status
          })
        );
        break;
      case "mariadb":
        rolesActions.setEnableMariadb(
          fromJS({
            enable_mariadb: status
          })
        );
        break;
      default:
        break;
    }
  };
  const handleShowConfiguraton = () => {
    setActiveConfigurationStep(fromJS({
      "active_configuration_step": "mysql"}));
  }
  const DatabaseConfiguration = () => {
    let configuration;
    switch (configuration) {
      case "mysql":
        rolesActions.removeMysqlDatabases();
        rolesActions.removeMysqlPackages();
        rolesActions.removeMysqlUsers();
        // configuration=(<MysqlRole
        //     applicationAppState={applicationAppState}
        //     environments={applicationAppState.get("application_evironments")?applicationAppState.get("application_evironments"):[]}
        //     mysqlAppState={mysqlAppState}
        //     rolesActions={rolesActions}
        //     type={"MySQL"}
        // />);
        break;
      default:
        break;
    }
    return configuration?configuration:"";
  };
  return (
    <div className="align-center steps">
      {/* {DatabaseConfiguration} */}
      <MysqlRole
          activeEnvironment={activeEnvironment}
          applicationAppState={applicationAppState}
          enable
          environments={environments}
          mysqlAppState={mysqlAppState}
          rolesActions={rolesActions}
          type={"MySQL"}
      />
      <p className="align-center title">{"Select your Database"}</p>
      <Options
          handleChange={handleChangeDatabase}
          options={databasesOptions}
          optionsActives={databases}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Framework"}
            onTouchTap={()=>setActiveStep(1)}
            primary
            style={style}
        />
        <RaisedButton
            disabled={databases.size==0?true:false}
            label={"AddOns"}
            onTouchTap={()=>setActiveStep(3)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

DataBases.propTypes = {
  activeEnvironment: PropTypes.number.isRequired,
  activeStepConfiguration: PropTypes.object,
  applicationAppState: PropTypes.object.isRequired,
  databases: PropTypes.object.isRequired,
  databasesOptions: PropTypes.object.isRequired,
  environments: PropTypes.array.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  removeDatabase: PropTypes.func.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setActiveConfigurationStep: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setDatabase: PropTypes.func.isRequired
};

export default DataBases;
