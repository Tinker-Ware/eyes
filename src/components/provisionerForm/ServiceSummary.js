import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CreateService from './CreateService';

const ServiceSummary = ( {projectNameAppState, repositoryAppState, applicationAppState} ) => {
    return (
        <div className="row sidebar">
        <h3><i className="step fi-clipboard-notes"></i> Your Service</h3>
        <h4 className="color-green"><i className="step fi-italic"></i> Project Name</h4>
        <p id="label-project-name">
            {(projectNameAppState.get('project_name')) ? projectNameAppState.get('project_name'):'none'}
        </p>
        <h4 className="color-green"><i className="step fi-social-dropbox"></i> Aplication</h4>
        <p id="label-aplications">
            {(applicationAppState.get('application_name')) ? applicationAppState.get('application_name'):'none'}
        </p>
        <CreateService 
            projectNameAppState={projectNameAppState}
            repositoryAppState={repositoryAppState}
            applicationAppState={applicationAppState}/>
      </div>
    );
};

ServiceSummary.propTypes = {
    projectNameAppState: PropTypes.object.isRequired,
    repositoryAppState: PropTypes.object.isRequired,
    applicationAppState: PropTypes.object.isRequired
};

export default ServiceSummary;
