import { fromJS } from "immutable";
import {Card, CardActions, CardHeader} from "material-ui/Card";
import {Tabs, Tab} from "material-ui/Tabs";
import Base from "./yii/Base";
import cookie from "react-cookie";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import React, {PropTypes} from "react";
import SwipeableViews from "react-swipeable-views";
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

const YiiRole = ( {end, environments, applicationAppState, setActiveEnvironment, setCookieValidationKey, setEnableYii, setShowYii, yiiAppState} ) => {
  const handleChangeEnvironment = (value) => {
    setActiveEnvironment(fromJS({
      active_environment:value
    }));
  };
  const handleEnable = () => {
    setEnableYii(
      fromJS({
        enable_yii: !yiiAppState.get("enable_yii")
      })
    );
  };
  const handleSaveConfiguration = () => {
    if(yiiAppState.get("show_yii")){
      let yiiCookieValidationKey = [];
      environments.map((value,index)=>{
        if(cookie.load("cookie_validation_key-"+index)){
          if(cookie.load("cookie_validation_key-"+index).id)
            yiiCookieValidationKey.push({
              id: cookie.load("cookie_validation_key-"+index).id,
              environment: cookie.load("cookie_validation_key-"+index).environment,
              cookie_validation_key: cookie.load("cookie_validation_key-"+index).cookie_validation_key
            });
          else
            yiiCookieValidationKey.push({
              environment: cookie.load("cookie_validation_key-"+index).environment,
              cookie_validation_key: cookie.load("cookie_validation_key-"+index).cookie_validation_key
            });
          cookie.remove("cookie_validation_key-"+index, { path: "/" });
        }
      });
      if(yiiCookieValidationKey.length>0)
      setCookieValidationKey(
        fromJS({
          cookie_validation_keys: yiiAppState.get("cookie_validation_key")?yiiAppState.get("cookie_validation_key").toJS():[],
          cookie_validation_key: yiiCookieValidationKey
        })
      );
    }
    setShowYii(
      fromJS({
        show_yii: !yiiAppState.get("show_yii")
      })
    );
  };
  const handleCancelSaveConfiguration = () => {
    environments.map((value,index)=>{
      cookie.remove("cookie_validation_key-"+index, { path: "/" });
    });
    setShowYii(
      fromJS({
        show_yii: !yiiAppState.get("show_yii")
      })
    );
  };
  const actions = [
      <FlatButton
          icon={<FontIcon className="icon icon-cancel" />}
          key={2}
          label={"Cancel"}
          onTouchTap={handleCancelSaveConfiguration}
          secondary
      />,
      <FlatButton
          icon={<FontIcon className="icon icon-cancel" />}
          key={1}
          label={"Save"}
          onTouchTap={handleSaveConfiguration}
          primary
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
              onTouchTap={handleSaveConfiguration}
          />
        </CardActions>
        <Dialog
            actions={actions}
            actionsContainerStyle={styles.button}
            modal={false}
            onRequestClose={handleCancelSaveConfiguration}
            open={yiiAppState.get("show_yii")?true:false}
            title="Configurations"
        >
          <Tabs
              onChange={handleChangeEnvironment}
              value={applicationAppState.get("active_environment")}
          >
            {environments.map((value, index)=>
              <Tab
                  key={index}
                  label={value.name}
                  value={index}
              />
            )}
          </Tabs>
          <SwipeableViews
              index={applicationAppState.get("active_environment")}
              onChangeIndex={handleChangeEnvironment}
          >
            {environments.map((value, index)=>
              <div
                  className={"small-12 medium-12 large-12 columns"}
                  key={index}
              >
                <Base
                    activeEnvironment={environments[applicationAppState.get("active_environment")].id}
                    yiiAppState={yiiAppState}
                />
              </div>
            )}
          </SwipeableViews>
        </Dialog>
      </Card>
    </div>
  );
};

YiiRole.propTypes = {
  applicationAppState: PropTypes.object.isRequired,
  end: PropTypes.bool.isRequired,
  environments: PropTypes.array.isRequired,
  setActiveEnvironment: PropTypes.func.isRequired,
  setCookieValidationKey: PropTypes.func.isRequired,
  setEnableYii: PropTypes.func.isRequired,
  setShowYii: PropTypes.func.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default YiiRole;
