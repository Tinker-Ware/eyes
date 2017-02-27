import {fromJS} from "immutable";
import cookie from "react-cookie";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import React, {PropTypes} from "react";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";

const styles = {
  button: {
    padding: 12
  },
  body: {
    padding: "1em"
  },
  checkbox: {
    marginBottom: 16,
  },
};

const AddDatabase = ( {activeEnvironment, setMysqlDatabases, setShowMysqlDatabase, mysqlAppState} ) => {
  const handleSetMysqlDatabases = (e) => {
    cookie.save("mysql_databases-name", e.target.value, { path:"/"});
  };
  const handleSetActiveMysqlMariaDB = (e) => {
    if(e.target.checked)
      cookie.save("mysql_databases-packages", e.target.checked, { path:"/"});
  };
  const handleSaveDatabase = () => {
    if(mysqlAppState.get("show_mysql_database"))
      setMysqlDatabases(
        fromJS({
          mysql_databases: mysqlAppState.get("mysql_databases")?mysqlAppState.get("mysql_databases").toJS():[],
          mysql_database: [{
            name: cookie.load("mysql_databases-name"),
            encoding: "utf8",
            collation: "utf8_general_ci",
            environment: activeEnvironment,
            mariaDB: cookie.load("mysql_databases-packages")?true:false
          }]
        })
      );
    setShowMysqlDatabase(
      fromJS({
        show_mysql_database: !mysqlAppState.get("show_mysql_database")
      })
    );
    cookie.remove("mysql_databases-name", { path: "/" });
    cookie.remove("mysql_databases-packages", { path: "/" });
  };
  const handleCanelAddDatabase = () => {
    setShowMysqlDatabase(
      fromJS({
        show_mysql_database: !mysqlAppState.get("show_mysql_database")
      })
    );
    cookie.remove("mysql_databases-name", { path: "/" });
    cookie.remove("mysql_databases-packages", { path: "/" });
  };
  const actions = [
    <FlatButton
        icon={<FontIcon className="icon icon-cancel" />}
        key={2}
        label={"Cancel"}
        onTouchTap={handleCanelAddDatabase}
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
  return (
    <Dialog
        actions={actions}
        actionsContainerStyle={styles.button}
        autoScrollBodyContent
        bodyStyle={styles.body}
        modal={false}
        onRequestClose={handleCanelAddDatabase}
        open={mysqlAppState.get("show_mysql_database")?true:false}
        title="Add Database"
    >
      <TextField
          errorText="This field is required."
          floatingLabelText={"Database Name"}
          fullWidth
          name={"name"}
          onChange={handleSetMysqlDatabases}
          type={"text"}
      />
      <Checkbox
          label="MariaDB"
          onCheck={handleSetActiveMysqlMariaDB}
          // checked
          style={styles.checkbox}
      />
    </Dialog>
  );
};

AddDatabase.propTypes = {
  activeEnvironment: PropTypes.number.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  setMysqlDatabases: PropTypes.func.isRequired,
  setShowMysqlDatabase: PropTypes.func.isRequired
};

export default AddDatabase;
