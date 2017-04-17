import { fromJS } from "immutable";
import PropTypes from "prop-types";
import React from "react";
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
