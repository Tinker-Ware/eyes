// import FontIcon from "material-ui/FontIcon";
import { Card, CardActions, CardHeader } from "material-ui/Card";
import { fromJS } from "immutable";
import PropTypes from "prop-types";
import React from "react";
import Toggle from "material-ui/Toggle";

const BuildRole = ( {end, setEnableBuildbot, buildbotAppState} ) => {
  const handleEnable = () => {
    setEnableBuildbot(
      fromJS({
        enable_buildbot: !buildbotAppState.get("enable_buildbot")
      })
    );
  };
  return (
    <div className={"small-6 medium-3 large-3 columns one-click-app "+(end ? "end":"")}>
      <Card>
        <CardHeader
            // avatar={<FontIcon className={"icon icon-buildbot"}/>}
            subtitle={"CI System"}
            title={"Buildbot"}
        />
        <CardActions>
          <Toggle
              label="Enabled"
              labelPosition="right"
              onToggle={handleEnable}
              toggled={buildbotAppState.get("enable_buildbot")?true:false}
          />
        </CardActions>
      </Card>
    </div>
  );
};

BuildRole.propTypes = {
  end: PropTypes.bool.isRequired,
  setEnableBuildbot: PropTypes.func.isRequired,
  buildbotAppState: PropTypes.object.isRequired
};

export default BuildRole;
