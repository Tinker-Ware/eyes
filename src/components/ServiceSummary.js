import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CreateService from './CreateService';

const ServiceSummary = () => {
    return (
        <div className="row sidebar">
        <h3><i className="step fi-clipboard-notes"></i> Your Service</h3>
        <h4 className="color-green"><i className="step fi-italic"></i> Project Name</h4>
        <p id="label-project-name">none</p>
        <h4 className="color-green"><i className="step fi-upload-cloud"></i> Automation Software</h4>
        <p id="label-automation-software">automation software..</p>
        <h4 className="color-green"><i className="step fi-cloud"></i> Server Provider</h4>
        <p id="label-server-provider">Server Provider..</p>
        <h4 className="color-green"><i className="step fi-annotate"></i> Distribution</h4>
        <p id="label-distribution">Distribution..</p>
        <h4 className="color-green"><i className="step fi-social-dropbox"></i> Aplication</h4>
        <p id="label-aplications">Aplications..</p>
        <h4 className="color-green"><i className="step fi-archive"></i> Packages</h4>
        <p id="label-packages">none</p>
        <h4 className="color-green"><i className="step fi-key"></i> SSH Keys</h4>
        <p id="label-keys">none</p>
        <CreateService />
      </div>
    );
};

export default ServiceSummary;
