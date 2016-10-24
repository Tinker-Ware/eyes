import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { fromJS } from 'immutable';

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
                type="text"
                id="input-project_name"
                placeholder="projectname.servername"
                pattern="([a-z0-9]){2,15}\.([a-z0-9]){2,15}"
                title="Format needed: nombreproyecto.nombreservidor"
                autoComplete="off"
                onChange={ProjectNameKeypress}
                name="projectName"
                value={projectNameAppState.project_name}
                required/>
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
