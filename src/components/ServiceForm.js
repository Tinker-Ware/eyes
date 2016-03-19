import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProjectName from './ProjectName';
import AutomationSoftware from './AutomationSoftware';
import ServerProvider from './ServerProvider';
import Distribution from './Distribution';
import Application from './Application';
import Package from './Package';
import SSHKeys from './SSHKeys';
import CreateService from './CreateService';

const ServiceForm = () => {
    return (
      <div className="row">
        <div className="large-12 columns">
            <h1><i className="step fi-clipboard-notes"></i> Create a Service</h1>
            <ProjectName />
            <AutomationSoftware />
            <ServerProvider />
            <Distribution />
            <Application />
            <Package />
            <SSHKeys />
            <CreateService />
        </div>
      </div>
    );
};

export default ServiceForm;
