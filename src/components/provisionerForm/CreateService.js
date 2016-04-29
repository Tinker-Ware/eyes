import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CreateService = ( {projectNameAppState, repositoryAppState, applicationAppState} ) => {
    const btnCreateService = repositoryAppState.get('github_user_name') && 
                    repositoryAppState.get('github_repository_name') &&
                    projectNameAppState.get('project_name') && 
                    applicationAppState.get('application_name') ? 
                    <a href="javascript:void(0);" id="btn-create_service" className="button radius expanded"><i className="step fi-power"></i> Create Service</a> : 
                    <a href="javascript:void(0);" id="btn-create_service" className="button radius expanded disabled"><i className="step fi-power"></i> Create Service</a>;
    return (
        <div className="large-12 large-centered medium-12 medium-centered small-12 small-centered columns">
          {btnCreateService}
      </div>
    );
};

CreateService.propTypes = {
    projectNameAppState: PropTypes.object.isRequired,
    repositoryAppState: PropTypes.object.isRequired,
    applicationAppState: PropTypes.object.isRequired
};

export default CreateService;
