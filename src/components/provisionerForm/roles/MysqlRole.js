import {fromJS} from "immutable";
import {Card, CardActions, CardHeader} from "material-ui/Card";
import cookie from "react-cookie";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import React, {PropTypes} from "react";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";

const styles = {
  block: {
    maxWidth: 250,
  },
  button: {
    padding: 12,
  },
  radioButton: {
    marginBottom: 16,
    marginLeft: 16
  },
};

const MysqlRole = ( {end, setMysqlUsers, setMysqlRootPassword, setEnableMysql, setShowMysql, mysqlAppState} ) => {
  const handleSetMysqlUsers = (e, attribute) => {
    cookie.save("mysql_users-"+attribute, e.target.value, { path:"/"});
  };
  const handleSetMysqlRootPassword = (e) => {
    setMysqlRootPassword(
      fromJS({
        mysql_root_password: e.target.value
      })
    );
  };
  const handleEnable = () => {
    setEnableMysql(
      fromJS({
        enable_mysql: !mysqlAppState.get("enable_mysql")
      })
    );
  };
  const handleShowConfiguration = () => {
    setShowMysql(
      fromJS({
        show_mysql: !mysqlAppState.get("show_mysql")
      })
    );
    setMysqlUsers(
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
    cookie.remove("mysql_users-host");
    cookie.remove("mysql_users-name");
    cookie.remove("mysql_users-password");
  };
  const actions = [
      <FlatButton
          icon={<FontIcon className="icon icon-cancel" />}
          key
          label={"Close"}
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
            autoScrollBodyContent
            modal={false}
            onRequestClose={handleShowConfiguration}
            open={mysqlAppState.get("show_mysql")?true:false}
            title="Configurations"
        >
          {"All the changes are autosaved"}
          <TextField
              errorText="This field is required."
              floatingLabelText={"MySQL root password"}
              fullWidth
              name={"mysql_root_password"}
              onChange={handleSetMysqlRootPassword}
              type={"password"}
              value={mysqlAppState.get("mysql_root_password")?mysqlAppState.get("mysql_root_password"):""}
          />
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
      </Card>
    </div>
  );
};

MysqlRole.propTypes = {
  end: PropTypes.bool.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  setEnableMysql: PropTypes.func.isRequired,
  setMysqlRootPassword: PropTypes.func.isRequired,
  setMysqlUsers: PropTypes.func.isRequired,
  setShowMysql: PropTypes.func.isRequired
};

export default MysqlRole;
