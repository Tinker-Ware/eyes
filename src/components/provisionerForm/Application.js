import React, { PropTypes } from "react";
import YiiRole from "./roles/YiiRole";
import MysqlRole from "./roles/MysqlRole";

const Application = ( {applicationAppState, rolesActions, yiiAppState, mysqlAppState, setActiveEnvironment} ) => {
  return (
    <div className="small-12 medium-12 large-12">
      <div className="row">
        <h2>{"Choose an One-Click Apps"}</h2>
        <YiiRole
            applicationAppState={applicationAppState}
            end
            environments={applicationAppState.get("application_evironments")?applicationAppState.get("application_evironments"):[]}
            setActiveEnvironment={setActiveEnvironment}
            setCookieValidationKey={rolesActions.setCookieValidationKey}
            setEnableYii={rolesActions.setEnableYii}
            setShowYii={rolesActions.setShowYii}
            yiiAppState={yiiAppState}
        />
      </div>
      <div className="row">
        <h2>{"Choose a Database"}</h2>
        <MysqlRole
            applicationAppState={applicationAppState}
            end
            environments={applicationAppState.get("application_evironments")?applicationAppState.get("application_evironments"):[]}
            mysqlAppState={mysqlAppState}
            removeMysqlDatabase={rolesActions.removeMysqlDatabase}
            removeMysqlUser={rolesActions.removeMysqlUser}
            setActiveEnvironment={setActiveEnvironment}
            setEnableMysql={rolesActions.setEnableMysql}
            setMysqlDatabaseIndex={rolesActions.setMysqlDatabaseIndex}
            setMysqlDatabases={rolesActions.setMysqlDatabases}
            setMysqlRootPassword={rolesActions.setMysqlRootPassword}
            setMysqlUser={rolesActions.setMysqlUser}
            setShowMysql={rolesActions.setShowMysql}
            setShowMysqlDatabase={rolesActions.setShowMysqlDatabase}
            setShowMysqlUser={rolesActions.setShowMysqlUser}
            updateMysqlUser={rolesActions.updateMysqlUser}
        />
      </div>
      {/* <div className="row">
        <h2>{"Choose a Web Serving Software"}</h2>
      </div> */}
    </div>
  );
};

Application.propTypes = {
  applicationAppState: PropTypes.object.isRequired,
  setActiveEnvironment: PropTypes.func.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Application;
