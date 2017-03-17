import React, {PropTypes} from "react";
import {fromJS} from "immutable";
import TextField from "material-ui/TextField";

const ProjectName = ( {setProjectName, projectNameAppState} ) => {

  const ProjectNameKeypress = (e) => {
    setProjectName(fromJS({
      name: e.target.value
    }));
  };
  return (
    <div>
      <TextField
          errorText={projectNameAppState.get("project_name")?"":"This field is required."}
          floatingLabelText="ProjectName"
          fullWidth
          name="projectName"
          onChange={ProjectNameKeypress}
          type="text"
          value={projectNameAppState.get("project_name")}
      />
    </div>
  );
};

ProjectName.propTypes = {
  projectNameAppState: PropTypes.object.isRequired,
  setProjectName: PropTypes.func.isRequired
};

export default ProjectName;
