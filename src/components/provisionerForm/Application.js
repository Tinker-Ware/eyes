import React, { PropTypes } from "react";
import YiiRole from "./roles/YiiRole";
import MysqlRole from "./roles/MysqlRole";

const Application = ( {rolesActions, yiiAppState, mysqlAppState} ) => {
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
            mysqlAppState={mysqlAppState}
            setEnableMysql={rolesActions.setEnableMysql}
            setMysqlRootPassword={rolesActions.setMysqlRootPassword}
            setMysqlUsers={rolesActions.setMysqlUsers}
            setShowMysql={rolesActions.setShowMysql}
            updateMysqlUsers={rolesActions.updateMysqlUsers}
        />
      </div>
      {/* <div className="row">
        <h2>{"Choose a Web Serving Software"}</h2>
      </div> */}
    </div>
  );
};

Application.propTypes = {
  mysqlAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Application;
