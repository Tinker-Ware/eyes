import { fromJS } from "immutable";
import {Card, CardActions, CardHeader} from "material-ui/Card";
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

const YiiRole = ( {end, setCookieValidationKey, setEnableYii, setShowYii, yiiAppState} ) => {
  const handleEnable = () => {
    setEnableYii(
      fromJS({
        enable_yii: !yiiAppState.get("enable_yii")
      })
    );
  };
  const handleShowConfiguration = () => {
    setShowYii(
      fromJS({
        show_yii: !yiiAppState.get("show_yii")
      })
    );
  };
  const handleSetCookieVaidationKey = (e) => {
    setCookieValidationKey(
      fromJS({
        cookie_validation_key: e.target.value
      })
    );
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
            avatar={<FontIcon className={"icon icon-yii"}/>}
            subtitle={"PHP Framework"}
            title={"Yii"}
        />
        <CardActions>
          <Toggle
              label="Enabled"
              labelPosition="right"
              onToggle={handleEnable}
              toggled={yiiAppState.get("enable_yii")?true:false}
          />
          <FlatButton
              label={"Configuration"}
              onTouchTap={handleShowConfiguration}
          />
        </CardActions>
        <Dialog
            actions={actions}
            actionsContainerStyle={styles.button}
            modal={false}
            onRequestClose={handleShowConfiguration}
            open={yiiAppState.get("show_yii")?true:false}
            title="Configurations"
        >
          {"All the changes are autosaved"}
          <TextField
              errorText="This field is required."
              floatingLabelText={"Cookie validation key"}
              fullWidth
              name={"cookie_validation_key"}
              onChange={handleSetCookieVaidationKey}
              type={"password"}
              value={yiiAppState.get("cookie_validation_key")}
          />
        </Dialog>
      </Card>
    </div>
  );
};

YiiRole.propTypes = {
  end: PropTypes.bool.isRequired,
  setCookieValidationKey: PropTypes.func.isRequired,
  setEnableYii: PropTypes.func.isRequired,
  setShowYii: PropTypes.func.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default YiiRole;
