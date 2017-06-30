import { fromJS } from "immutable";
import cookie from "react-cookie";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import React from "react";
import TextField from "material-ui/TextField";

const styles = {
  button: {
    padding: 12
  },
  body: {
    padding: "1em",
    color: "#536a70"
  },
  textField: {
    color: "#536a70"
  },
  title: {
    color: "#536a70"
  },
};

const AddUser = ( {activeEnvironment, setMysqlUser, setShowMysqlUser, mysqlAppState} ) => {
  const handleSetMysqlUsers = (e, attribute) => {
    cookie.save("mysql_users-"+attribute, e.target.value, { path:"/"});
  };
  const handleSaveUser = () => {
    if(mysqlAppState.get("show_mysql_user")){
      setMysqlUser(
        fromJS({
          update: false,
          mysql_users: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
          mysql_user: [{
            environment:activeEnvironment,
            name: cookie.load("mysql_users-name") ? cookie.load("mysql_users-name") : "",
            host: "%",
            password: cookie.load("mysql_users-password") ? cookie.load("mysql_users-password") : "",
            priv: cookie.load("mysql_databases-name")?cookie.load("mysql_databases-name")+".*:ALL/*.*:SUPER":""
          }]
        })
      );
      cookie.save("mysql_databases-oldname", cookie.load("mysql_databases-name"), { path:"/"});
    }
    setShowMysqlUser(
      fromJS({
        show_mysql_user: !mysqlAppState.get("show_mysql_user")
      })
    );
    cookie.remove("mysql_users-host", { path: "/" });
    cookie.remove("mysql_users-name", { path: "/" });
    cookie.remove("mysql_users-password", { path: "/" });
    cookie.remove("mysql_users-database", { path: "/" });
  };
  const handleCancelAddUser = () => {
    setShowMysqlUser(
      fromJS({
        show_mysql_user: !mysqlAppState.get("show_mysql_user")
      })
    );
    cookie.remove("mysql_users-host", { path: "/" });
    cookie.remove("mysql_users-name", { path: "/" });
    cookie.remove("mysql_users-password", { path: "/" });
    cookie.remove("mysql_users-database", { path: "/" });
  };
  const actions = [
      <FlatButton
          icon={<FontIcon className="icon icon-cancel" />}
          key={2}
          label={"Cancel"}
          onTouchTap={handleCancelAddUser}
          secondary
      />,
      <FlatButton
          icon={<FontIcon className="icon icon-save" />}
          key={1}
          label={"Save"}
          onTouchTap={handleSaveUser}
          primary
      />
    ];
  return (
    <Dialog
        actions={actions}
        actionsContainerStyle={styles.button}
        autoScrollBodyContent
        bodyStyle={styles.body}
        modal={false}
        onRequestClose={handleCancelAddUser}
        open={mysqlAppState.get("show_mysql_user")?true:false}
        title="Add Authorized User"
        titleStyle={styles.title}
    >
      <TextField
          errorText="This field is required."
          floatingLabelText={"User Name"}
          fullWidth
          inputStyle={styles.textField}
          name={"mysql_user_name"}
          onChange={(event)=> handleSetMysqlUsers(event, "name")}
          type={"text"}
      />
      <TextField
          errorText="This field is required."
          floatingLabelText={"User Password"}
          fullWidth
          inputStyle={styles.textField}
          name={"mysql_user_password"}
          onChange={(event)=> handleSetMysqlUsers(event, "password")}
          type={"password"}
      />
    </Dialog>
  );
};

AddUser.propTypes = {
  activeEnvironment: PropTypes.number.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  setMysqlUser: PropTypes.func.isRequired,
  setShowMysqlUser: PropTypes.func.isRequired
};

export default AddUser;
