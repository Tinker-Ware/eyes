import React, { PropTypes } from "react";
import YiiRole from "./roles/YiiRole";
import MysqlRole from "./roles/MysqlRole";

const Application = ( {applicationAppState, rolesActions, yiiAppState, mysqlAppState, setActiveEnvironment} ) => {
  return (
    <div className="small-12 medium-12 large-12">
      <div className="row">
        <h2>{"Choose an One-Click Apps"}</h2>
        <YiiRole
            end
            setCookieValidationKey={rolesActions.setCookieValidationKey}
            setEnableYii={rolesActions.setEnableYii}
            setShowYii={rolesActions.setShowYii}
            yiiAppState={yiiAppState}
        />
      </div>
      <div className="row">
        <h2>{"Choose a Database"}</h2>
        <MysqlRole
            end
            environments={applicationAppState.get("application_evironments")?applicationAppState.get("application_evironments"):[]}
            mysqlAppState={mysqlAppState}
            applicationAppState={applicationAppState}
            setEnableMysql={rolesActions.setEnableMysql}
            setMysqlRootPassword={rolesActions.setMysqlRootPassword}
            setActiveEnvironment={setActiveEnvironment}
            setMysqlUser={rolesActions.setMysqlUser}
            setShowMysql={rolesActions.setShowMysql}
            setShowMysqlUser={rolesActions.setShowMysqlUser}
            setShowMysqlDatabase={rolesActions.setShowMysqlDatabase}
            updateMysqlUser={rolesActions.updateMysqlUser}
            removeMysqlUser={rolesActions.removeMysqlUser}
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
