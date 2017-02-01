import React, { PropTypes } from "react";
import { fromJS } from "immutable";
import ApplicationItem from "./ApplicationItem";
import YiiRole from "./roles/YiiRole";
import MysqlRole from "./roles/MysqlRole";

const Application = ( {applicationsOptions, setApplication, setApplicationOneClick, applicationAppState, rolesActions, yiiAppState, mysqlAppState} ) => {
  const findAndReplace = (object, value, replacevalue) => {
  };
  const handleApplicationClick = (e, id, role) => {
    setApplication(fromJS({
      application: {
        name: id,
        roles: role
      }
    }));
  };
  const remplaceRoleValue = (e, role, identifier) => {
  };
  const handleApplicationOneClick = (e, id, role) => {
    setApplicationOneClick(fromJS({
      applications: applicationAppState.get("application_oneclickapp")?applicationAppState.get("application_oneclickapp"):[],
      application: {
        id: id,
        name: id,
        roles: role
      }
    }));
  };
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
            setMysqlDatabases={rolesActions.setMysqlDatabases}
            setMysqlPackages={rolesActions.setMysqlPackages}
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
  applicationAppState: PropTypes.object.isRequired,
  applicationsOptions: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setApplication: PropTypes.func.isRequired,
  setApplicationOneClick: PropTypes.func.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Application;
