import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import { Step, Stepper, StepButton } from "material-ui/Stepper";
import Addons from "./steps/Addons";
import DataBases from "./steps/DataBases";
import ProjectName from "./steps/ProjectName";
import PropTypes from "prop-types";
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

const Steps = ( {applicationActions, applicationAppState, environments, baseAppState, buildbotAppState, cloudProviderAppState, ghostAppState, mysqlAppState, nginxAppState, plainHtmlAppState, projectNameAppState, provisionerFormActions, repositoryAppState, rolesActions, setProjectName, userAppState, yiiAppState} ) => {
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
              {"Project Name"}
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => handleChangeStep(1)}>
              {"Frameworks"}
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => handleChangeStep(2)}>
              {"DataBases"}
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => handleChangeStep(3)}>
              {"Add-ons"}
            </StepButton>
          </Step>
        </Stepper>
        <SwipeableViews
            index={applicationAppState.get("active_step")}
        >
          <ProjectName
              projectNameAppState={projectNameAppState}
              setActiveStep={handleChangeStep}
              setProjectName={setProjectName}
          />
          <Stacks
              removeStack={provisionerFormActions.removeStack}
              rolesActions={rolesActions}
              setActiveStep={handleChangeStep}
              setStack={provisionerFormActions.setStack}
              stacks={applicationAppState.get("stacks")?applicationAppState.get("stacks"):fromJS([])}
              stacksOptions={applicationAppState.getIn(["steps","stacks"])}
          />
          <DataBases
              activeEnvironment={environments[applicationAppState.get("active_environment")].id}
              activeStepConfiguration={applicationAppState.get("active_configuration_step")}
              databases={applicationAppState.get("databases")?applicationAppState.get("databases"):fromJS([])}
              databasesOptions={applicationAppState.getIn(["steps","databases"])}
              applicationAppState={applicationAppState}
              environments={environments}
              mysqlAppState={mysqlAppState}
              removeDatabase={provisionerFormActions.removeDatabase}
              rolesActions={rolesActions}
              setActiveStep={handleChangeStep}
              setDatabase={provisionerFormActions.setDatabase}
              setActiveConfigurationStep={provisionerFormActions.setActiveConfigurationStep}
          />
          <Addons
              addons={applicationAppState.get("addons")?applicationAppState.get("addons"):fromJS([])}
              addonsOptions={applicationAppState.getIn(["steps","addons"])}
              removeAddons={provisionerFormActions.removeAddons}
              setActiveStep={handleChangeStep}
              setAddons={provisionerFormActions.setAddons}
          />
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
  environments: PropTypes.array.isRequired,
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
  setProjectName: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Steps;
