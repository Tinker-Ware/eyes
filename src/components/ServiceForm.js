import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProjectName from './ProjectName';
import AutomationSoftware from './AutomationSoftware';

const ServiceForm = () => {
    return (
      <div className="row">
        <div className="large-12 columns">
            <h1><i className="step fi-clipboard-notes"></i> Create a Service</h1>
            <ProjectName />
            <AutomationSoftware />
        </div>
      </div>
    );
};

export default ServiceForm;
