import cookie from "react-cookie";
import PropTypes from "prop-types";
import React from "react";
import TextField from "material-ui/TextField";

const styles = {
  textField: {
    color: "#536a70"
  }
};

const Base = ( {activeEnvironment, mysqlAppState} ) => {
  const handleSetMysqlRootPassword = (e, event) => {
    cookie.save("mysql_root_password-"+activeEnvironment,
      JSON.stringify(
        (event=="")?
          {
            environment: activeEnvironment,
            password: e.target.value
          }:
          {
            id: event.id,
            environment: event.environment,
            password: e.target.value
          }
      ),
      { path:"/"});
  };
return (
    <div>
      {mysqlAppState.get("mysql_root_password")?
        mysqlAppState.get("mysql_root_password").filter(value=>
          value.get("environment") === activeEnvironment
        ).toJS().length>0?
          mysqlAppState.get("mysql_root_password").filter(value=>
            value.get("environment") === activeEnvironment
          ).toJS().map((value,index)=>
          <TextField
              defaultValue={value.password}
              errorText="This field is required."
              floatingLabelText={"MySQL root password"}
              fullWidth
              inputStyle={styles.textField}
              key={index}
              name={"mysql_root_password"}
              onChange={(event)=>handleSetMysqlRootPassword(event, value)}
              type={"password"}
          />
          ):
          <TextField
              errorText="This field is required."
              floatingLabelText={"MySQL root password"}
              fullWidth
              inputStyle={styles.textField}
              name={"mysql_root_password"}
              onChange={(event)=>handleSetMysqlRootPassword(event, "")}
              type={"password"}
          />
        :
        <TextField
            errorText="This field is required."
            floatingLabelText={"MySQL root password"}
            fullWidth
            inputStyle={styles.textField}
            name={"mysql_root_password"}
            onChange={(event)=>handleSetMysqlRootPassword(event, "")}
            type={"password"}
        />
      }
    </div>
  );
};

Base.propTypes = {
  mysqlAppState: PropTypes.object.isRequired,
  activeEnvironment: PropTypes.number.isRequired
};

export default Base;
