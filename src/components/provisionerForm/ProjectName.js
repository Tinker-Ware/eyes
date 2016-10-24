import React, { PropTypes } from "react";
import { fromJS } from "immutable";

const ProjectName = ( {setProjectName, projectNameAppState} ) => {

  const ProjectNameKeypress = (e) => {
    e.preventDefault();
    setProjectName(fromJS({
      name: e.target.value
    }));
  };

  return (
    <div
      className="row"
      id="project-configuration">
      <h2>
        <i className="step fi-italic" />
         Project Name
      </h2>
      <div className="large-12 columns">
        <form>
          <div className="row">
            <div className="large-12 columns">
              <input
                autoComplete="off"
                id="input-project_name"
                name="projectName"
                onChange={ProjectNameKeypress}
                pattern="([a-z0-9]){2,15}\.([a-z0-9]){2,15}"
                placeholder="projectname.servername"
                required
                title="Format needed: nombreproyecto.nombreservidor"
                type="text"
                value={projectNameAppState.project_name}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

ProjectName.propTypes = {
  setProjectName: PropTypes.func.isRequired,
  projectNameAppState: PropTypes.object.isRequired
};

export default ProjectName;
