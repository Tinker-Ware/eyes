import React, {PropTypes} from "react";
import CreateService from "./CreateService";

const ServiceSummary = ( {cloudProviderAppState, projectNameAppState, repositoryAppState, applicationAppState, userAppState, requestPostUserProject} ) => {
  return (
    <div className="row sidebar">
      <h3>
        <i className="step fi-clipboard-notes" />
        {"Your Service"}
      </h3>
      <h4 className="color-green">
        <i className="step fi-italic" />
        {"Project Name"}
      </h4>
      <p id="label-project-name">
        {(projectNameAppState.get("project_name")) ? projectNameAppState.get("project_name"):"none"}
      </p>
      <h4 className="color-green">
        <i className="step fi-social-dropbox" />
        {"Aplication"}
      </h4>
      <p id="label-aplications">
        {(applicationAppState.get("application_name")) ? applicationAppState.get("application_name").toJS().name:"none"}
      </p>
      <CreateService
          applicationAppState={applicationAppState}
          cloudProviderAppState={cloudProviderAppState}
          projectNameAppState={projectNameAppState}
          repositoryAppState={repositoryAppState}
          requestPostUserProject={requestPostUserProject}
          userAppState={userAppState}
      />
    </div>
  );
};

ServiceSummary.propTypes = {
  cloudProviderAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  requestPostUserProject: PropTypes.func.isRequired
};

export default ServiceSummary;
