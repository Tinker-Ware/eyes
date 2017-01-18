import React, { PropTypes } from "react";
import { fromJS } from "immutable";
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
          type="text"
          value={projectNameAppState.project_name}
          onChange={ProjectNameKeypress}
      />
    </div>
  );
};

ProjectName.propTypes = {
  setProjectName: PropTypes.func.isRequired,
  projectNameAppState: PropTypes.object.isRequired
};

export default ProjectName;
