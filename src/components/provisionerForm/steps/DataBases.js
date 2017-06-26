import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import MysqlRole from "../roles/MysqlRole";

const DataBases = ( {activeEnvironment, environments,  applicationAppState, mysqlAppState, rolesActions, setActiveConfigurationStep, setActiveEnvironment, setActiveStep, setDatabase, removeDatabase, databasesOptions, databases} ) => {
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
  const handleShowConfiguration = (e, remove) => {
    if(e)
      e.stopPropagation();
    if(remove)
      setActiveConfigurationStep(fromJS({
        "active_configuration_step": ""}));
    else
      setActiveConfigurationStep(fromJS({
        "active_configuration_step": "mysql"}));
  }
  const DatabaseConfiguration = () => {
    switch (applicationAppState.get("active_configuration_step")) {
      case "mysql":
        rolesActions.removeMysqlDatabases();
        rolesActions.removeMysqlPackages();
        rolesActions.removeMysqlUsers();
        return <MysqlRole
            activeEnvironment={activeEnvironment}
            applicationAppState={applicationAppState}
            enable={applicationAppState.get("active_configuration_step")?true:false}
            environments={environments}
            handleClose={handleShowConfiguration}
            mysqlAppState={mysqlAppState}
            rolesActions={rolesActions}
            setActiveEnvironment={setActiveEnvironment}
            type={"MySQL"}
        />
        break;
      default:
        break;
    }
  };
  return (
    <div className="align-center steps">
      {DatabaseConfiguration()}
      <p className="align-center title">{"Select your Database"}</p>
      <Options
          handleChange={handleChangeDatabase}
          handleConfigure={handleShowConfiguration}
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
  applicationAppState: PropTypes.object.isRequired,
  databases: PropTypes.object.isRequired,
  databasesOptions: PropTypes.object.isRequired,
  environments: PropTypes.array.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  removeDatabase: PropTypes.func.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setActiveConfigurationStep: PropTypes.func.isRequired,
  setActiveEnvironment: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setDatabase: PropTypes.func.isRequired
};

export default DataBases;
