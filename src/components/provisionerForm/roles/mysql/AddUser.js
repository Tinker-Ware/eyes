import {fromJS} from "immutable";
import cookie from "react-cookie";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import React, {PropTypes} from "react";
import TextField from "material-ui/TextField";

const styles = {
  button: {
    padding: 12
  },
  body: {
    padding: "1em"
  },
};

const MysqlRole = ( {activeEnvironment, setMysqlUser, setShowMysqlDatabase, setShowMysqlUser, mysqlAppState} ) => {
  const handleSetMysqlUsers = (e, attribute) => {
    cookie.save("mysql_users-"+attribute, e.target.value, { path:"/"});
  };
  const handleShowAddUser = () => {
    setMysqlUser(
      fromJS({
        mysql_users: mysqlAppState.get("mysql_users")?mysqlAppState.get("mysql_users").toJS():[],
        mysql_user: [{
          environment:activeEnvironment,
          name: cookie.load("mysql_users-name") ? cookie.load("mysql_users-name") : "",
          host: cookie.load("mysql_users-host") ? cookie.load("mysql_users-host") : "",
          password: cookie.load("mysql_users-password") ? cookie.load("mysql_users-password") : "",
          priv: "ti_database.*:ALL"
        }]
      })
    );
    setShowMysqlUser(
      fromJS({
        show_mysql_user: !mysqlAppState.get("show_mysql_user")
      })
    );
    cookie.remove("mysql_users-host", { path: '/' });
    cookie.remove("mysql_users-name", { path: '/' });
    cookie.remove("mysql_users-password", { path: '/' });
  };
  const actions = [
      <FlatButton
          icon={<FontIcon className="icon icon-save" />}
          key
          label={"Save"}
          onTouchTap={handleShowAddUser}
          secondary
      />
    ];
  return (
    <Dialog
        actions={actions}
        actionsContainerStyle={styles.button}
        bodyStyle={styles.body}
        autoScrollBodyContent
        modal={false}
        onRequestClose={handleShowAddUser}
        open={mysqlAppState.get("show_mysql_user")?true:false}
        title="Add User"
    >
      <TextField
          errorText="This field is required."
          floatingLabelText={"User Name"}
          fullWidth
          name={"mysql_user_name"}
          onChange={(event)=> handleSetMysqlUsers(event, "name")}
          type={"text"}
      />
      <TextField
          errorText="This field is required."
          floatingLabelText={"Host"}
          fullWidth
          name={"mysql_user_host"}
          onChange={(event)=> handleSetMysqlUsers(event, "host")}
          type={"text"}
      />
      <TextField
          errorText="This field is required."
          floatingLabelText={"User Password"}
          fullWidth
          name={"mysql_user_password"}
          onChange={(event)=> handleSetMysqlUsers(event, "password")}
          type={"password"}
      />
    </Dialog>
  );
};

MysqlRole.propTypes = {
  activeEnvironment: PropTypes.number.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  setMysqlUser: PropTypes.func.isRequired,
  setShowMysqlDatabase: PropTypes.func.isRequired,
  setShowMysqlUser: PropTypes.func.isRequired
};

export default MysqlRole;
