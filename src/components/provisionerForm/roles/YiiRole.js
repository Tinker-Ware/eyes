import { Card, CardActions, CardHeader } from "material-ui/Card";
import { fromJS } from "immutable";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import React from "react";
import Toggle from "material-ui/Toggle";

const YiiRole = ( {end, setEnableYii, yiiAppState} ) => {
  const handleEnable = () => {
    setEnableYii(
      fromJS({
        enable_yii: !yiiAppState.get("enable_yii")
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
        </CardActions>
      </Card>
    </div>
  );
};

YiiRole.propTypes = {
  end: PropTypes.bool.isRequired,
  setEnableYii: PropTypes.func.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default YiiRole;
