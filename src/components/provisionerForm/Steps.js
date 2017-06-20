import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import { Step, Stepper, StepButton, StepLabel } from "material-ui/Stepper";
import Addons from "./steps/Addons";
import DataBases from "./steps/DataBases";
import Email from "./steps/Email";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import Stacks from "./steps/Stacks";
import SwipeableViews from "react-swipeable-views";
import ArrowForwardIcon from "material-ui/svg-icons/navigation/arrow-forward";
// import Application from "../components/provisionerForm/Application";
// import CloudProvider from "../components/provisionerForm/CloudProvider";
// import CreateService from "../components/provisionerForm/CreateService";
// import GithubService from "../components/provisionerForm/GithubService";
// import ProjectName from "../components/provisionerForm/ProjectName";
import Notification from "../Notification";

const Steps = ( {applicationActions, applicationAppState, baseAppState, buildbotAppState, cloudProviderAppState, ghostAppState, mysqlAppState, nginxAppState, plainHtmlAppState, projectNameAppState, provisionerFormActions, repositoryAppState, rolesActions, userAppState, yiiAppState} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeStep = (value) => {
    provisionerFormActions.setActiveStep(fromJS({
      active_step: value
    }));
  };
  return (
    <div className="small-12 medium-12 large-12 large-centered columns">
      <div className="container">
        <Stepper
            activeStep={applicationAppState.get("active_step")}
            connector={<ArrowForwardIcon />}
        >
          <Step>
            <StepButton onClick={() => handleChangeStep(0)}>
              {"Frameworks"}
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => handleChangeStep(1)}>
              {"DataBases"}
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => handleChangeStep(2)}>
              {"Add-ons"}
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => handleChangeStep(3)}>
              {"Local Environment"}
            </StepButton>
          </Step>
        </Stepper>
        <SwipeableViews
            index={applicationAppState.get("active_step")}
        >
          <Stacks
              removeStack={provisionerFormActions.removeStack}
              setActiveStep={handleChangeStep}
              setStack={provisionerFormActions.setStack}
              stacks={applicationAppState.get("stacks")?applicationAppState.get("stacks"):fromJS([])}
              stacksOptions={applicationAppState.getIn(["steps","stacks"])}
          />
          <DataBases
              databases={applicationAppState.get("databases")?applicationAppState.get("databases"):fromJS([])}
              databasesOptions={applicationAppState.getIn(["steps","databases"])}
              removeDatabase={provisionerFormActions.removeDatabase}
              setActiveStep={handleChangeStep}
              setDatabase={provisionerFormActions.setDatabase}
          />
          <Addons
              addons={applicationAppState.get("addons")?applicationAppState.get("addons"):fromJS([])}
              addonsOptions={applicationAppState.getIn(["steps","addons"])}
              removeAddons={provisionerFormActions.removeAddons}
              setActiveStep={handleChangeStep}
              setAddons={provisionerFormActions.setAddons}
          />
          <div className="align-center steps">
            <p className="align-center pdt-3 title">{"Thanks"}</p>
            <p className="align-center pdt-2 subtitle">{"We are in "}<strong>{"private beta."}</strong></p>
            <p className="align-center subtitle">{"We will contact you soon to become more efficient!"}</p>
            <div className="pdt-5">
              <RaisedButton
                  label={"Go to Home"}
                  onTouchTap={()=>onTabClick("/", false)}
                  primary
                  style={style}
              />
            </div>
          </div>
        </SwipeableViews>
      </div>
      <Notification
          message={applicationAppState.get("notification")}
          setNotification={applicationActions.setNotification}
      />
    </div>
  );
};

Steps.propTypes = {
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  baseAppState: PropTypes.object.isRequired,
  buildbotAppState: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  ghostAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  nginxAppState: PropTypes.object.isRequired,
  plainHtmlAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  provisionerFormActions: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Steps;