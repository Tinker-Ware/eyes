import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import CreateService from "../CreateService";

const Addons = ( {setActiveStep, setAddons, removeAddons, addonsOptions, addons, applicationAppState, baseAppState, buildbotAppState, cloudProviderAppState, mysqlAppState, nginxAppState, projectNameAppState, springAppState, repositoryAppState, requestPostUserProject, mongodbAppState, userAppState, yiiAppState, plainHtmlAppState, nodejsAppState, sparkAppState} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeAddons = (addon, insert) => {
    if(insert)
      setAddons(fromJS({
        addon: addon
      }));
    else
      removeAddons(fromJS({
        addon: addon
      }));
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{"Select your Add-ons (Optional)"}</p>
      <Options
          handleChange={handleChangeAddons}
          options={addonsOptions}
          optionsActives={addons}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Previous Step"}
            onTouchTap={()=>setActiveStep(3)}
            primary
            style={style}
        />
        <CreateService
            applicationAppState={applicationAppState}
            baseAppState={baseAppState}
            buildbotAppState={buildbotAppState}
            cloudProviderAppState={cloudProviderAppState}
            mongodbAppState={mongodbAppState}
            mysqlAppState={mysqlAppState}
            nginxAppState={nginxAppState}
            nodejsAppState={nodejsAppState}
            plainHtmlAppState={plainHtmlAppState}
            projectNameAppState={projectNameAppState}
            repositoryAppState={repositoryAppState}
            requestPostUserProject={requestPostUserProject}
            sparkAppState={sparkAppState}
            springAppState={springAppState}
            userAppState={userAppState}
            yiiAppState={yiiAppState}
        />
      </div>
    </div>
  );
};

Addons.propTypes = {
  addons: PropTypes.object.isRequired,
  addonsOptions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  baseAppState: PropTypes.object.isRequired,
  buildbotAppState: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  mongodbAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  nginxAppState: PropTypes.object.isRequired,
  nodejsAppState: PropTypes.object.isRequired,
  plainHtmlAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  removeAddons: PropTypes.func.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  requestPostUserProject: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setAddons: PropTypes.func.isRequired,
  sparkAppState: PropTypes.object.isRequired,
  springAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Addons;
