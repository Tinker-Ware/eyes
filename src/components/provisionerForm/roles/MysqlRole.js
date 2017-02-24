import Avatar from "material-ui/Avatar";
import {Card, CardActions, CardHeader} from "material-ui/Card";
import {fromJS} from "immutable";
import {Tabs, Tab} from "material-ui/Tabs";
import Base from "./mysql/Base";
import Chip from "material-ui/Chip";
import cookie from "react-cookie";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import React, {PropTypes} from "react";
import SwipeableViews from "react-swipeable-views";
import Toggle from "material-ui/Toggle";
import AddUser from "./mysql/AddUser";
import AddDatabase from "./mysql/AddDatabase";

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
    padding: 0
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

const MysqlRole = ( {end, environments, applicationAppState, setMysqlUser, setMysqlRootPassword, setActiveEnvironment, setEnableMysql, setMysqlDatabases, setShowMysql, mysqlAppState, removeMysqlDatabase, removeMysqlUser, setShowMysqlUser, setShowMysqlDatabase, setMysqlDatabaseIndex} ) => {
  const handleRemoveUser = (e, value) => {
    removeMysqlUser(
      fromJS({
        mysql_users: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
        mysql_user: value
      })
    );
  };
  const handleRemoveDatabase = (e, value) => {
    removeMysqlDatabase(
      fromJS({
        mysql_databases: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
        mysql_database: value
      })
    );
  };
  const handleShowAddUser = () => {
    setShowMysqlUser(
      fromJS({
        show_mysql_user: !mysqlAppState.get("show_mysql_user")
      })
    );
  };
  const handleShowDatabase = () => {
    setShowMysqlDatabase(
      fromJS({
        show_mysql_database: !mysqlAppState.get("show_mysql_database")
      })
    );
  };
  const handleChangeEnvironment = (value) => {
    setActiveEnvironment(fromJS({
      active_environment:value
    }));
  };
  const handleEnable = () => {
    setEnableMysql(
      fromJS({
        enable_mysql: !mysqlAppState.get("enable_mysql")
      })
    );
  };
  const handleSaveConfigurations = () => {
    if(mysqlAppState.get("show_mysql")){
      setMysqlUser(
        fromJS({
          mysql_users:[],
          mysql_user: [{
            name: cookie.load("mysql_users-name") ? cookie.load("mysql_users-name") : "",
            host: cookie.load("mysql_users-host") ? cookie.load("mysql_users-host") : "",
            password: cookie.load("mysql_users-password") ? cookie.load("mysql_users-password") : "",
            priv: "ti_database.*:ALL"
          }]
        })
      );
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
      setMysqlRootPassword(
        fromJS({
          mysql_root_passwords: mysqlAppState.get("mysql_root_password")?mysqlAppState.get("mysql_root_password").toJS():[],
          mysql_root_password: mysqlRootPasswordArray
        })
      );
      cookie.remove("mysql_users-host", { path: "/" });
      cookie.remove("mysql_users-name", { path: "/" });
      cookie.remove("mysql_users-password", { path: "/" });
    }
    setShowMysql(
      fromJS({
        show_mysql: !mysqlAppState.get("show_mysql")
      })
    );
  };
  const actions = [
      <FlatButton
          icon={<FontIcon className="icon icon-save" />}
          key
          label={"Save"}
          onTouchTap={handleSaveConfigurations}
          secondary
      />
    ];
  const users = () => {
    return mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").filter(value=>
      value.get("environment") === environments[applicationAppState.get("active_environment")].id
    ).toJS().map((value,index)=>
      <Chip
          // onTouchTap={handleClick}
          key={index}
          onRequestDelete={(event)=>handleRemoveUser(event, value)}
          style={styles.chip}
      >
        <Avatar icon={<FontIcon className="icon icon-person" />} />
        {value.name}
      </Chip>
    ):"";
  };
  const databases = () => {
    return mysqlAppState.get("mysql_databases")?mysqlAppState.get("mysql_databases").filter(value=>
      value.get("environment") === environments[applicationAppState.get("active_environment")].id
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
    <div className={"small-6 medium-3 large-3 columns one-click-app "+(end ? "end":"")}>
      <Card>
        <CardHeader
            avatar={<FontIcon className={"icon icon-mysql"}/>}
            subtitle={"Relational Database"}
            title={"MySQL"}
        />
        <CardActions>
          <Toggle
              label="Enabled"
              labelPosition="right"
              onToggle={handleEnable}
              toggled={mysqlAppState.get("enable_mysql")?true:false}
          />
          <FlatButton
              label={"Configuration"}
              onTouchTap={handleSaveConfigurations}
          />
        </CardActions>
        <Dialog
            actions={actions}
            actionsContainerStyle={styles.button}
            autoScrollBodyContent
            bodyStyle={styles.body}
            modal={false}
            onRequestClose={handleSaveConfigurations}
            open={mysqlAppState.get("show_mysql")?true:false}
            title="Configurations"
        >
          <AddUser
              activeEnvironment={environments[applicationAppState.get("active_environment")].id}
              mysqlAppState={mysqlAppState}
              setMysqlDatabaseIndex={setMysqlDatabaseIndex}
              setMysqlUser={setMysqlUser}
              setShowMysqlDatabase={setShowMysqlDatabase}
              setShowMysqlUser={setShowMysqlUser}
          />
          <AddDatabase
              activeEnvironment={environments[applicationAppState.get("active_environment")].id}
              mysqlAppState={mysqlAppState}
              setMysqlDatabases={setMysqlDatabases}
              setShowMysqlDatabase={setShowMysqlDatabase}
              setShowMysqlUser={setShowMysqlUser}
          />
          <Tabs
              onChange={handleChangeEnvironment}
              value={applicationAppState.get("active_environment")}
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
              index={applicationAppState.get("active_environment")}
              onChangeIndex={handleChangeEnvironment}
          >
            {environments.map((value, index)=>
              <div
                  className={"small-12 medium-12 large-12 columns"}
                  key={index}
              >
                <Base
                    activeEnvironment={environments[applicationAppState.get("active_environment")].id}
                    mysqlAppState={mysqlAppState}
                />
                <h2>{"Users"}</h2>
                <div style={styles.wrapper}>
                  {users()}
                  <Chip
                      onTouchTap={handleShowAddUser}
                      style={styles.chip}
                  >
                    <Avatar icon={<FontIcon className="icon icon-person-add" />} />
                    {"Add User"}
                  </Chip>
                </div>
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
      </Card>
    </div>
  );
};

MysqlRole.propTypes = {
  applicationAppState: PropTypes.object.isRequired,
  end: PropTypes.bool.isRequired,
  environments: PropTypes.array.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  removeMysqlDatabase: PropTypes.func.isRequired,
  removeMysqlUser: PropTypes.func.isRequired,
  setActiveEnvironment: PropTypes.func.isRequired,
  setEnableMysql: PropTypes.func.isRequired,
  setMysqlDatabaseIndex: PropTypes.func.isRequired,
  setMysqlDatabases: PropTypes.func.isRequired,
  setMysqlRootPassword: PropTypes.func.isRequired,
  setMysqlUser: PropTypes.func.isRequired,
  setShowMysql: PropTypes.func.isRequired,
  setShowMysqlDatabase: PropTypes.func.isRequired,
  setShowMysqlUser: PropTypes.func.isRequired
};

export default MysqlRole;
