import { Card, CardActions, CardHeader } from "material-ui/Card";
import { fromJS } from "immutable";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import React from "react";
import Toggle from "material-ui/Toggle";

const YiiRole = ( {enable, end, setEnableYii, setEnableYiiAdvanced, type} ) => {
  const handleEnable = () => {
    if(type=="Yii")
      setEnableYii(
        fromJS({
          enable_yii: !enable
        })
      );
    else
      setEnableYiiAdvanced(
        fromJS({
          enable_yii_advanced: !enable
        })
      );
  };
  return (
    <div className={"small-6 medium-3 large-3 columns one-click-app "+(end ? "end":"")}>
      <Card>
        <CardHeader
            avatar={<FontIcon className={"icon icon-yii"}/>}
            subtitle={"PHP Framework"}
            title={type}
        />
        <CardActions>
          <Toggle
              label="Enabled"
              labelPosition="right"
              onToggle={handleEnable}
              toggled={enable?true:false}
          />
        </CardActions>
      </Card>
    </div>
  );
};

YiiRole.propTypes = {
  enable: PropTypes.bool.isRequired,
  end: PropTypes.bool.isRequired,
  setEnableYii: PropTypes.func.isRequired,
  setEnableYiiAdvanced: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default YiiRole;
