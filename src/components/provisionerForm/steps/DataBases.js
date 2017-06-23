import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Steps = ( {rolesActions, setActiveStep, setDatabase, removeDatabase, databasesOptions, databases} ) => {
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
  return (
    <div className="align-center steps">
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

Steps.propTypes = {
  databases: PropTypes.object.isRequired,
  databasesOptions: PropTypes.object.isRequired,
  removeDatabase: PropTypes.func.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setDatabase: PropTypes.func.isRequired
};

export default Steps;
