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
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import AddUser from "./mysql/AddUser";

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
    display: 'flex',
    flexWrap: 'wrap',
  }
};

const MysqlRole = ( {end, environments, applicationAppState, setMysqlUser, setMysqlRootPassword, setActiveEnvironment, setEnableMysql, setShowMysql, mysqlAppState, updateMysqlUser, removeMysqlUser, setShowMysqlUser, setShowMysqlDatabase} ) => {
  const handleRemoveUser = (e, value) => {
    removeMysqlUser(
      fromJS({
        mysql_users: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
        mysql_user: value
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
  const handleChangeEnvironment = (value) => {
    setActiveEnvironment(fromJS({
      active_environment:value
    }));
  };
  const handleSetMysqlUsers = (e, attribute) => {
    cookie.save("mysql_users-"+attribute, e.target.value, { path:"/"});
  };
  const handleEnable = () => {
    setEnableMysql(
      fromJS({
        enable_mysql: !mysqlAppState.get("enable_mysql")
      })
    );
  };
  const handleShowConfiguration = () => {
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
      environments.map((value,index)=>
        // cookie.load("mysql_root_password-"+activeEnvironment, JSON.stringify(event), { path:"/"});
        console.log(cookie.load("mysql_root_password-"+value.id))
        let mysql_root_password;
        if(value.id)
          mysql_root_password={
            id: cookie.load("mysql_root_password-"+value.id).id,
            environment: cookie.load("mysql_root_password-"+value.id).environment,
            password: cookie.load("mysql_root_password-"+value.id).password
          }
        else
          mysql_root_password={
            environment: cookie.load("mysql_root_password-"+value.id).environment,
            password: cookie.load("mysql_root_password-"+value.id).password
          }
        setMysqlRootPassword(
          fromJS({
            mysql_root_passwords: mysqlAppState.get("mysql_root_password")?mysqlAppState.get("mysql_root_password").toJS():[],
            mysql_root_password: [event]
          })
        );
      )

      cookie.remove("mysql_users-host", { path: '/' });
      cookie.remove("mysql_users-name", { path: '/' });
      cookie.remove("mysql_users-password", { path: '/' });
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
          onTouchTap={handleShowConfiguration}
          secondary
      />
    ];
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
              onTouchTap={handleShowConfiguration}
          />
        </CardActions>
        <Dialog
            actions={actions}
            actionsContainerStyle={styles.button}
            bodyStyle={styles.body}
            autoScrollBodyContent
            modal={false}
            onRequestClose={handleShowConfiguration}
            open={mysqlAppState.get("show_mysql")?true:false}
            title="Configurations"
        >
          <AddUser
              activeEnvironment={environments[applicationAppState.get("active_environment")].id}
              mysqlAppState={mysqlAppState}
              setMysqlUser={setMysqlUser}
              setShowMysqlDatabase={setShowMysqlDatabase}
              setShowMysqlUser={setShowMysqlUser}
          />
          <Tabs
              onChange={handleChangeEnvironment}
              value={applicationAppState.get("active_environment")}
          >
            {environments.map((value, index)=>
              <Tab
                  label={value.name}
                  key={index}
                  value={index}
              />
            )}
          </Tabs>
          <SwipeableViews
              index={applicationAppState.get("active_environment")}
              onChangeIndex={handleChangeEnvironment}
          >
            <div className={"small-12 medium-12 large-12 columns"}>
              <Base
                  activeEnvironment={environments[applicationAppState.get("active_environment")].id}
                  mysqlAppState={mysqlAppState}
                  setMysqlRootPassword={setMysqlRootPassword}
              />
              <h2>{"Users"}</h2>
              <div style={styles.wrapper}>
                {mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").filter(value=>
                  value.get("environment") === environments[applicationAppState.get("active_environment")].id
                ).toJS().map((value,index)=>
                  <Chip
                      style={styles.chip}
                      // onTouchTap={handleClick}
                      key={index}
                      onRequestDelete={(event)=>handleRemoveUser(event, value)}
                  >
                    <Avatar icon={<FontIcon className="icon icon-person" />} />
                    {value.name}
                  </Chip>
                ):""}
                <Chip
                    style={styles.chip}
                    onTouchTap={handleShowAddUser}
                >
                  <Avatar icon={<FontIcon className="icon icon-person-add" />} />
                  {"Add User"}
                </Chip>
              </div>
              <h2>{"DataBases"}</h2>
              <div style={styles.wrapper}>
                <Chip
                    style={styles.chip}
                    // onTouchTap={handleClick}
                    // onRequestDelete={handleRemove}
                >
                  <Avatar icon={<FontIcon className="icon icon-person" />} />
                  {"TinkerWare"}
                </Chip>
                <Chip
                    style={styles.chip}
                    // onTouchTap={handleClick}
                    // onRequestDelete={handleRemove}
                >
                  <Avatar icon={<FontIcon className="icon icon-person" />} />
                  {"Add Database"}
                </Chip>
              </div>
            </div>
            <div className={"small-12 medium-12 large-12 columns"}>
              <Base
                  activeEnvironment={environments[applicationAppState.get("active_environment")].id}
                  setMysqlRootPassword={setMysqlRootPassword}
                  mysqlAppState={mysqlAppState}
              />
              <h2>{"Users"}</h2>
              <div style={styles.wrapper}>
                {mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").filter(value=>
                  value.get("environment") === environments[applicationAppState.get("active_environment")].id
                ).toJS().map((value,index)=>
                  <Chip
                      style={styles.chip}
                      // onTouchTap={handleClick}
                      key={index}
                      onRequestDelete={(event)=>handleRemoveUser(event, value)}
                  >
                    <Avatar icon={<FontIcon className="icon icon-person" />} />
                    {value.name}
                  </Chip>
                ):""}
                <Chip
                    style={styles.chip}
                    onTouchTap={handleShowAddUser}
                >
                  <Avatar icon={<FontIcon className="icon icon-person-add" />} />
                  {"Add User"}
                </Chip>
              </div>
              <h2>{"DataBases"}</h2>
              <div style={styles.wrapper}>
                <Chip
                    style={styles.chip}
                    // onTouchTap={handleClick}
                    // onRequestDelete={handleRemove}
                >
                  <Avatar icon={<FontIcon className="icon icon-person" />} />
                  {"TinkerWare"}
                </Chip>
                <Chip
                    style={styles.chip}
                    // onTouchTap={handleClick}
                    // onRequestDelete={handleRemove}
                >
                  <Avatar icon={<FontIcon className="icon icon-person" />} />
                  {"Add Database"}
                </Chip>
              </div>
            </div>
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
  removeMysqlUser: PropTypes.func.isRequired,
  setActiveEnvironment: PropTypes.func.isRequired,
  setEnableMysql: PropTypes.func.isRequired,
  setMysqlRootPassword: PropTypes.func.isRequired,
  setMysqlUser: PropTypes.func.isRequired,
  setShowMysql: PropTypes.func.isRequired,
  setShowMysqlDatabase: PropTypes.func.isRequired,
  setShowMysqlUser: PropTypes.func.isRequired,
  updateMysqlUser: PropTypes.func.isRequired
};

export default MysqlRole;
