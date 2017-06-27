import { fromJS } from "immutable";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import TextField from "material-ui/TextField";

const ProjectName = ( { setProjectName, projectNameAppState, setActiveStep} ) => {
  const style = {
   margin: 12,
  };
  const handleSetProjectName = (e) => {
    setProjectName(fromJS({
      name: e.target.value
    }));
  };
  return (
    <div className="align-center steps">
      <p className="align-center pdt-2 title">{"Whats is your project name?"}</p>
      <div className="small-12 medium-6 large-6 medium-centered large-centered">
        <TextField
            floatingLabelText={"Project Name"}
            fullWidth
            name={"Previous Step"}
            onChange={handleSetProjectName}
            type={"text"}
            value={projectNameAppState.get("project_name")}
        />
      </div>
      <div className="pdt-5">
        <RaisedButton
            disabled={projectNameAppState.get("project_name")?false:true}
            label={"Next Step"}
            onTouchTap={()=>{setActiveStep(1);}}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

ProjectName.propTypes = {
  projectNameAppState: PropTypes.object.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setProjectName: PropTypes.func.isRequired
};

export default ProjectName;
