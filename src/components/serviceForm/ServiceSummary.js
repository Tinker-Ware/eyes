import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CreateService from './CreateService';

const ServiceSummary = () => {
    return (
        <div className="row sidebar">
        <h3><i className="step fi-clipboard-notes"></i> Your Service</h3>
        <h4 className="color-green"><i className="step fi-italic"></i> Project Name</h4>
        <p id="label-project-name">none</p>
        <h4 className="color-green"><i className="step fi-social-dropbox"></i> Aplication</h4>
        <p id="label-aplications">Aplications..</p>
        <CreateService />
      </div>
    );
};

export default ServiceSummary;
