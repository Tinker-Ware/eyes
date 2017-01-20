import React, {PropTypes} from "react";
import {fromJS} from "immutable";
import TextField from "material-ui/TextField";

const ProjectName = ( {setProjectName, projectNameAppState} ) => {

  const ProjectNameKeypress = (e) => {
    e.preventDefault();
    setProjectName(fromJS({
      name: e.target.value
    }));
  };

  return (
    <div>
      <TextField
          floatingLabelText="ProjectName.ServerName"
          fullWidth
          name="projectName"
          onChange={ProjectNameKeypress}
          type="text"
          value={projectNameAppState.project_name}
      />
    </div>
  );
};

ProjectName.propTypes = {
  projectNameAppState: PropTypes.object.isRequired,
  setProjectName: PropTypes.func.isRequired
};

export default ProjectName;
