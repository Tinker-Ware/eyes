import cookie from "react-cookie";
import PropTypes from "prop-types";
import React from "react";
import TextField from "material-ui/TextField";

const Base = ( {activeEnvironment, yiiAppState} ) => {
  const handleSetCookieValidationKey = (e, event) => {
    cookie.save("cookie_validation_key-"+activeEnvironment,
      JSON.stringify(
        (event=="")?
          {
            environment: activeEnvironment,
            cookie_validation_key: e.target.value
          }:
          {
            id: event.id,
            environment: event.environment,
            cookie_validation_key: e.target.value
          }
      ),
      { path:"/"});
  };
return (
    <div>
      <h2>{"Base Configuration"}</h2>
      {yiiAppState.get("cookie_validation_key")?
        yiiAppState.get("cookie_validation_key").filter(value=>
          value.get("environment") === activeEnvironment
        ).toJS().length>0?
          yiiAppState.get("cookie_validation_key").filter(value=>
            value.get("environment") === activeEnvironment
          ).toJS().map((value,index)=>
          <TextField
              defaultValue={value.cookie_validation_key}
              errorText="This field is required."
              floatingLabelText={"Cookie validation key"}
              fullWidth
              key={index}
              name={"cookie_validation_key"}
              onChange={(event)=>handleSetCookieValidationKey(event, value)}
              type={"password"}
          />
          ):
          <TextField
              errorText="This field is required."
              floatingLabelText={"Cookie validation key"}
              fullWidth
              name={"cookie_validation_key"}
              onChange={(event)=>handleSetCookieValidationKey(event, "")}
              type={"password"}
          />
        :
        <TextField
            errorText="This field is required."
            floatingLabelText={"Cookie validation key"}
            fullWidth
            name={"cookie_validation_key"}
            onChange={(event)=>handleSetCookieValidationKey(event, "")}
            type={"password"}
        />
      }
    </div>
  );
};

Base.propTypes = {
  yiiAppState: PropTypes.object.isRequired,
  activeEnvironment: PropTypes.number.isRequired
};

export default Base;
