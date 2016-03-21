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
          <div data-magellan-expedition="fixed">
            <div className="row">
              <dl className="sub-nav">
                <dd data-magellan-arrival="project-configuration" className="active"><a href="#project-configuration"><i className="step fi-wrench"></i> Project Configuration</a></dd>
                <dd data-magellan-arrival="connect-service"><a href="#connect-service"><i className="step fi-share"></i> Connect Service</a></dd>
                <dd data-magellan-arrival="automation-software"><a href="#automation-software"><i className="step fi-upload-cloud"></i> Automation Software</a></dd>
                <dd data-magellan-arrival="server-provider"><a href="#server-provider"><i className="step fi-cloud"></i> Server Provider</a></dd>
                <dd data-magellan-arrival="distribution"><a href="#distribution"><i className="step fi-annotate"></i> Distribution</a></dd>
                <dd data-magellan-arrival="aplications"><a href="#aplications"><i className="step fi-social-dropbox"></i> Aplications</a></dd>
                <dd data-magellan-arrival="packages"><a href="#packages"><i className="step fi-archive"></i> Packages</a></dd>
              </dl>
            </div>
          </div>
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
