import { fromJS } from "immutable";
import { Tabs, Tab } from "material-ui/Tabs";
import AddDatabase from "./mysql/AddDatabase";
import Avatar from "material-ui/Avatar";
import Base from "./mysql/Base";
import Chip from "material-ui/Chip";
import cookie from "react-cookie";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";

const styles = {
  block: {
    maxWidth: 250
  },
  button: {
    padding: 12
  },
  chip: {
    margin: 4,
  },
  body: {
    padding: 0,
    color: "#536a70"
  },
  title: {
    color: "#536a70"
  },
  radioButton: {
    marginBottom: 16,
    marginLeft: 16
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  }
};

const MysqlRole = ( {activeEnvironment, applicationAppState, handleClose, enable, environments, mysqlAppState, rolesActions, setActiveEnvironment} ) => {
  const handleRemoveDatabase = (e, database) => {
    rolesActions.removeMysqlDatabase(
      fromJS({
        mysql_databases: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
        mysql_database: database
      })
    );
    mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").filter(user=>
      user.get("environment") === environments[activeEnvironment].id &&   user.get("priv") === database.name+".*:ALL"
    ).toJS().map((user)=>{
      rolesActions.removeMysqlUser(
        fromJS({
          mysql_users: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
          mysql_user: user
        })
      );
    }):"";
  };
  const handleShowDatabase = () => {
    rolesActions.setShowMysqlDatabase(
      fromJS({
        show_mysql_database: !mysqlAppState.get("show_mysql_database")
      })
    );
  };
  const handleChangeEnvironment = (value) => {
    setActiveEnvironment(fromJS({
      active_environment: value
    }));
  };
  const handleSaveConfigurations = () => {
    if(mysqlAppState.get("show_mysql")){
      let mysqlRootPasswordArray = [];
      environments.map((value,index)=>{
        if(cookie.load("mysql_root_password-"+index)){
          if(cookie.load("mysql_root_password-"+index).id)
            mysqlRootPasswordArray.push({
              id: cookie.load("mysql_root_password-"+index).id,
              environment: cookie.load("mysql_root_password-"+index).environment,
              password: cookie.load("mysql_root_password-"+index).password
            });
          else
            mysqlRootPasswordArray.push({
              environment: cookie.load("mysql_root_password-"+index).environment,
              password: cookie.load("mysql_root_password-"+index).password
            });
          cookie.remove("mysql_root_password-"+index, { path: "/" });
        }
      });
      if(mysqlRootPasswordArray.length>0)
        rolesActions.setMysqlRootPassword(
          fromJS({
            mysql_root_passwords: mysqlAppState.get("mysql_root_password")?mysqlAppState.get("mysql_root_password").toJS():[],
            mysql_root_password: mysqlRootPasswordArray
          })
        );
      cookie.remove("mysql_users-host", { path: "/" });
      cookie.remove("mysql_users-name", { path: "/" });
      cookie.remove("mysql_users-password", { path: "/" });
    }
    rolesActions.setShowMysql(
      fromJS({
        show_mysql: !mysqlAppState.get("show_mysql")
      })
    );
    handleClose(null, true);
  };
  const handleCancelSaveConfigurations = () => {
    environments.map((value,index)=>{
      cookie.remove("mysql_root_password-"+index, { path: "/" });
    });
    cookie.remove("mysql_users-host", { path: "/" });
    cookie.remove("mysql_users-name", { path: "/" });
    cookie.remove("mysql_users-password", { path: "/" });
    rolesActions.setShowMysql(
      fromJS({
        show_mysql: !mysqlAppState.get("show_mysql")
      })
    );
    handleClose(null, true);
  };
  const actions = [
      <FlatButton
          icon={<FontIcon className="icon icon-cancel" />}
          key={2}
          label={"Cancel"}
          onTouchTap={handleCancelSaveConfigurations}
          secondary
      />,
      <FlatButton
          icon={<FontIcon className="icon icon-save" />}
          key={1}
          label={"Save"}
          onTouchTap={handleSaveConfigurations}
          primary
      />
    ];
  const databases = () => {
    return mysqlAppState.get("mysql_databases")?mysqlAppState.get("mysql_databases").filter(value=>
      value.get("environment") === environments[activeEnvironment].id
    ).toJS().map((value,index)=>
      <Chip
          // onTouchTap={handleClick}
          key={index}
          onRequestDelete={(event)=>handleRemoveDatabase(event, value)}
          style={styles.chip}
      >
        <Avatar icon={<FontIcon className="icon icon-person" />} />
        {value.name}
      </Chip>
    ):"";
  };
  return (
    <Dialog
        actions={actions}
        actionsContainerStyle={styles.button}
        autoScrollBodyContent
        bodyStyle={styles.body}
        modal
        onRequestClose={handleCancelSaveConfigurations}
        open={enable}
        title="Configurations"
        titleStyle={styles.title}
    >
      <AddDatabase
          activeEnvironment={environments[activeEnvironment].id}
          applicationAppState={applicationAppState}
          environments={environments}
          mysqlAppState={mysqlAppState}
          removeMysqlUser={rolesActions.removeMysqlUser}
          setMysqlDatabases={rolesActions.setMysqlDatabases}
          setMysqlUser={rolesActions.setMysqlUser}
          setShowMysqlDatabase={rolesActions.setShowMysqlDatabase}
          setShowMysqlUser={rolesActions.setShowMysqlUser}
      />
      <Tabs
          onChange={handleChangeEnvironment}
          value={activeEnvironment}
      >
        {environments.map((value, index)=>
          <Tab
              key={index}
              label={value.name}
              value={index}
          />
        )}
      </Tabs>
      <SwipeableViews
          index={activeEnvironment}
          onChangeIndex={handleChangeEnvironment}
      >
        {environments.map((value, index)=>
          <div
              className={"small-12 medium-12 large-12 columns"}
              key={index}
          >
            <Base
                activeEnvironment={environments[activeEnvironment].id}
                mysqlAppState={mysqlAppState}
            />
            <h2>{"DataBases"}</h2>
            <div style={styles.wrapper}>
              {databases()}
              <Chip
                  onTouchTap={handleShowDatabase}
                  style={styles.chip}
              >
                <Avatar icon={<FontIcon className="icon icon-person" />} />
                {"Add Database"}
              </Chip>
            </div>
          </div>
        )}
      </SwipeableViews>
    </Dialog>
  );
};

MysqlRole.propTypes = {
  activeEnvironment: PropTypes.number.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  enable: PropTypes.bool.isRequired,
  environments: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired,
  mysqlAppState:PropTypes.object.isRequired,
  rolesActions:PropTypes.object.isRequired,
  setActiveEnvironment: PropTypes.func.isRequired
};

export default MysqlRole;
