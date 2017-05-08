import { Card, CardActions, CardHeader } from "material-ui/Card";
import { fromJS } from "immutable";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import React from "react";
import Toggle from "material-ui/Toggle";

const YiiRole = ( {end, setEnableYii, setEnableYiiAdvanced, yiiAppState} ) => {
  const handleEnable = () => {
    setEnableYii(
      fromJS({
        enable_yii: !yiiAppState.get("enable_yii")
      })
    );
  };
  const handleEnableYiiAdvanced = () => {
    setEnableYiiAdvanced(
      fromJS({
        enable_yii_advanced: !yiiAppState.get("enable_yii_advanced")
      })
    );
  };
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
          <Toggle
              label="Yii Advanced"
              labelPosition="right"
              onToggle={handleEnableYiiAdvanced}
              toggled={yiiAppState.get("enable_yii_advanced")?true:false}
          />
        </CardActions>
      </Card>
    </div>
  );
};

YiiRole.propTypes = {
  end: PropTypes.bool.isRequired,
  setEnableYii: PropTypes.func.isRequired,
  setEnableYiiAdvanced: PropTypes.func.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default YiiRole;
