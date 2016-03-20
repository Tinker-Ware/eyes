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
import ServiceSummary from './ServiceSummary';

const ServiceForm = () => {
    return (
      <div className="row">
          <div className="row">
            <div className="large-10 columns">
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
            <div className="large-2 columns hide-for-small-only hide-for-medium-only">
                <ServiceSummary />
            </div>
          </div>
          <div className="row">
              <footer>
                <div className="row">
                  <div className="large-12 large-centered medium-12 medium-centered small-12 small-centered columns">
                    <p className="copyright">© 2015, Inc. All rights reserved.</p>
                  </div>
                </div>
              </footer>
          </div>
      </div>
    );
};

export default ServiceForm;
