import Avatar from "material-ui/Avatar";
import {fromJS} from "immutable";
import cookie from "react-cookie";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import React, {PropTypes} from "react";
import TextField from "material-ui/TextField";
import Chip from "material-ui/Chip";
import AddUser from "./AddUser";

const styles = {
  button: {
    padding: 12
  },
  body: {
    padding: "1em"
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  }
};

const AddDatabase = ( {activeEnvironment, applicationAppState, environments, setMysqlDatabases, setShowMysqlDatabase, mysqlAppState, removeMysqlUser, setMysqlUser, setShowMysqlUser} ) => {
  const handleSetMysqlDatabases = (e) => {
    cookie.save("mysql_databases-name", e.target.value, { path:"/"});
  };
  const handleSaveDatabase = () => {
    if(mysqlAppState.get("show_mysql_database")){
      setMysqlDatabases(
        fromJS({
          mysql_databases: mysqlAppState.get("mysql_databases")?mysqlAppState.get("mysql_databases").toJS():[],
          mysql_database: [{
            name: cookie.load("mysql_databases-name"),
            encoding: "utf8",
            collation: "utf8_general_ci",
            environment: activeEnvironment,
            mariaDB: false
          }]
        })
      );
      let users = [];
      mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").filter(user=>
        user.get("environment") === environments[applicationAppState.get("active_environment")].id &&   user.get("priv") === cookie.load("mysql_databases-oldname")+".*:ALL/*.*:SUPER"
      ).toJS().map((user)=>{
        user.priv = cookie.load("mysql_databases-name")+".*:ALL/*.*:SUPER";
        users.push(user);
      }):"";
      setMysqlUser(
        fromJS({
          update: true,
          mysql_users: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
          mysql_user: users
        })
      );
    }
    setShowMysqlDatabase(
      fromJS({
        show_mysql_database: !mysqlAppState.get("show_mysql_database")
      })
    );
    cookie.remove("mysql_databases-name", { path: "/" });
    cookie.remove("mysql_databases-oldname", { path: "/" });
  };
  const handleCancelAddDatabase = () => {
    setShowMysqlDatabase(
      fromJS({
        show_mysql_database: !mysqlAppState.get("show_mysql_database")
      })
    );
    cookie.remove("mysql_databases-oldname", { path:"/"});
    cookie.remove("mysql_databases-name", { path: "/" });
  };
  const handleShowAddUser = () => {
    setShowMysqlUser(
      fromJS({
        show_mysql_user: !mysqlAppState.get("show_mysql_user")
      })
    );
  };
  const actions = [
    <FlatButton
        icon={<FontIcon className="icon icon-cancel" />}
        key={2}
        label={"Cancel"}
        onTouchTap={handleCancelAddDatabase}
        secondary
    />,
    <FlatButton
        icon={<FontIcon className="icon icon-save" />}
        key={1}
        label={"Save"}
        onTouchTap={handleSaveDatabase}
        primary
    />
  ];
  const handleRemoveUser = (e, value) => {
    removeMysqlUser(
      fromJS({
        mysql_users: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
        mysql_user: value
      })
    );
  };
  const users = () => {
    return mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").filter(value=>
      value.get("environment") === environments[applicationAppState.get("active_environment")].id &&   value.get("priv") === cookie.load("mysql_databases-name")+".*:ALL/*.*:SUPER"
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
  return (
    <Dialog
        actions={actions}
        actionsContainerStyle={styles.button}
        autoScrollBodyContent
        bodyStyle={styles.body}
        modal={false}
        onRequestClose={handleCancelAddDatabase}
        open={mysqlAppState.get("show_mysql_database")?true:false}
        title="Create Database"
    >
      <AddUser
          activeEnvironment={environments[applicationAppState.get("active_environment")].id}
          mysqlAppState={mysqlAppState}
          setMysqlDatabases={setMysqlDatabases}
          setMysqlUser={setMysqlUser}
          setShowMysqlDatabase={setShowMysqlDatabase}
          setShowMysqlUser={setShowMysqlUser}
      />
      <TextField
          errorText="This field is required."
          floatingLabelText={"Database Name"}
          fullWidth
          name={"name"}
          onChange={handleSetMysqlDatabases}
          type={"text"}
      />
      <h2>{"Authorized Users"}</h2>
      <p>{"First Name Database. Then Add Authorized Users"}</p>
      <div style={styles.wrapper}>
        {users()}
        <Chip
            onTouchTap={handleShowAddUser}
            style={styles.chip}
        >
          <Avatar icon={<FontIcon className="icon icon-person-add" />} />
          {"Add New Authorized User"}
        </Chip>
      </div>
    </Dialog>
  );
};

AddDatabase.propTypes = {
  activeEnvironment: PropTypes.number.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  environments: PropTypes.array.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  removeMysqlUser: PropTypes.func.isRequired,
  setMysqlDatabases: PropTypes.func.isRequired,
  setMysqlUser: PropTypes.func.isRequired,
  setShowMysqlDatabase: PropTypes.func.isRequired,
  setShowMysqlUser: PropTypes.func.isRequired
};

export default AddDatabase;
