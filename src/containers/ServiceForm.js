import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ServiceFormActions';
import Application from '../components/serviceForm/Application';
import CreateService from '../components/serviceForm/CreateService';
import GithubService from '../components/serviceForm/GithubService';
import ProjectName from '../components/serviceForm/ProjectName';
import ServiceSummary from '../components/serviceForm/ServiceSummary';

class ServiceForm extends Component {
    
    static propTypes = {
      actions: PropTypes.object.isRequired,
      appState: PropTypes.object.isRequired
    };
  
    render() {
        return (
          <div className="row">
              <div data-magellan-expedition="fixed">
                <div className="row">
                  <dl className="sub-nav">
                    <dd data-magellan-arrival="project-configuration" className="active"><a href="#project-configuration"><i className="step fi-wrench"></i> Project Configuration</a></dd>
                    <dd data-magellan-arrival="connect-service"><a href="#connect-service"><i className="step fi-share"></i> Connect Service</a></dd>
                    <dd data-magellan-arrival="aplications"><a href="#aplications"><i className="step fi-social-dropbox"></i> Aplications</a></dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="large-10 columns">
                    <h1><i className="step fi-clipboard-notes"></i> Create a Service</h1>
                    <ProjectName />
                    <GithubService />
                    <Application />
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
    }
}

function mapStateToProps(state) {
  return {
    appState: state.projectNameAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceForm);
