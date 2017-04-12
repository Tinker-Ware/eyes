import BuildbotRole from "./roles/BuildbotRole";
import MysqlRole from "./roles/MysqlRole";
import React, { PropTypes } from "react";
import YiiRole from "./roles/YiiRole";

const Application = ( {applicationAppState, buildbotAppState, rolesActions, yiiAppState, mysqlAppState, setActiveEnvironment} ) => {
  return (
    <div className="small-12 medium-12 large-12">
      <div className="row">
        <h2>{"Choose an One-Click Apps"}</h2>
        <YiiRole
            end
            setEnableYii={rolesActions.setEnableYii}
            yiiAppState={yiiAppState}
        />
        <BuildbotRole
            buildbotAppState={buildbotAppState}
            end
            setEnableBuildbot={rolesActions.setEnableBuildbot}
        />
      </div>
      <div className="row">
        <h2>{"Choose a Database"}</h2>
        <MysqlRole
            applicationAppState={applicationAppState}
            enable={mysqlAppState.get("enable_mysql")?true:false}
            end
            environments={applicationAppState.get("application_evironments")?applicationAppState.get("application_evironments"):[]}
            mysqlAppState={mysqlAppState}
            removeMysqlDatabase={rolesActions.removeMysqlDatabase}
            removeMysqlDatabases={rolesActions.removeMysqlDatabases}
            removeMysqlPackages={rolesActions.removeMysqlPackages}
            removeMysqlUser={rolesActions.removeMysqlUser}
            removeMysqlUsers={rolesActions.removeMysqlUsers}
            setActiveEnvironment={setActiveEnvironment}
            setEnableMariadb={rolesActions.setEnableMariadb}
            setEnableMysql={rolesActions.setEnableMysql}
            setMysqlDatabases={rolesActions.setMysqlDatabases}
            setMysqlRootPassword={rolesActions.setMysqlRootPassword}
            setMysqlUser={rolesActions.setMysqlUser}
            setShowMysql={rolesActions.setShowMysql}
            setShowMysqlDatabase={rolesActions.setShowMysqlDatabase}
            setShowMysqlUser={rolesActions.setShowMysqlUser}
            type={"MySQL"}
            updateMysqlUser={rolesActions.updateMysqlUser}
        />
        <MysqlRole
            applicationAppState={applicationAppState}
            enable={mysqlAppState.get("enable_mariadb")?true:false}
            end
            environments={applicationAppState.get("application_evironments")?applicationAppState.get("application_evironments"):[]}
            mysqlAppState={mysqlAppState}
            removeMysqlDatabase={rolesActions.removeMysqlDatabase}
            removeMysqlDatabases={rolesActions.removeMysqlDatabases}
            removeMysqlPackages={rolesActions.removeMysqlPackages}
            removeMysqlUser={rolesActions.removeMysqlUser}
            removeMysqlUsers={rolesActions.removeMysqlUsers}
            setActiveEnvironment={setActiveEnvironment}
            setEnableMariadb={rolesActions.setEnableMariadb}
            setEnableMysql={rolesActions.setEnableMysql}
            setMysqlDatabases={rolesActions.setMysqlDatabases}
            setMysqlRootPassword={rolesActions.setMysqlRootPassword}
            setMysqlUser={rolesActions.setMysqlUser}
            setShowMysql={rolesActions.setShowMysql}
            setShowMysqlDatabase={rolesActions.setShowMysqlDatabase}
            setShowMysqlUser={rolesActions.setShowMysqlUser}
            type={"MariaDB"}
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
  buildbotAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setActiveEnvironment: PropTypes.func.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Application;
