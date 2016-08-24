import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ServiceFormActions';
import Application from '../components/provisionerForm/Application';
import CreateService from '../components/provisionerForm/CreateService';
import CloudProvider from '../components/provisionerForm/CloudProvider';
import GithubService from '../components/provisionerForm/GithubService';
import Menu from '../components/provisionerForm/Menu';
import ProjectName from '../components/provisionerForm/ProjectName';
import ServiceSummary from '../components/provisionerForm/ServiceSummary';
import SSHKeys from '../components/provisionerForm/SSHKeys';

const provisionFormOptionsApi = require("../api/provisionFormOptionsApi");

export class ServiceForm extends Component {
  componentWillMount() {
    if (!this.props.userAppState.get('user_session'))
      browserHistory.push('/login');
  }
  render() {
    return (
      <div className="row">
        <Menu userAppState={this.props.userAppState} />
        <div className="row">
          <div className="large-10 columns">
            <h1><i className="step fi-clipboard-notes"></i>
              Create a Service
            </h1>
            <ProjectName 
              projectNameAppState={this.props.projectNameAppState}
              setProjectName={this.props.actions.setProjectName} />
            <div className="row">
              <h2>
                <i className="step fi-share"></i>
                 Connect Service(s)
              </h2>
              {(provisionFormOptionsApi.getProvisionFormOptions()[0]) ?       
                provisionFormOptionsApi.getProvisionFormOptions()[0].services.map((value, index) =>   
                  (value.identifier == 'github') ?
                    <GithubService 
                      key = {value.identifier}
                      repositoryAppState={this.props.repositoryAppState}
                      setRepository={this.props.actions.setRepository}
                      setIntegracion={this.props.actions.setIntegracion}
                      requestRepositoryAccess={this.props.actions.requestRepositoryAccess}
                      requestUserRepositories={this.props.actions.requestUserRepositories}
                      setShowRepositories={this.props.actions.setShowRepositories}
                      userAppState={this.props.userAppState} /> : ''
                  ):''}
              <CloudProvider
                clearCloudProviderSSHKeys={this.props.actions.clearCloudProviderSSHKeys}
                cloudProviderAppState={this.props.cloudProviderAppState}
                requestCloudProviderAccess={this.props.actions.requestCloudProviderAccess}
                setCloudProvider={this.props.actions.setCloudProvider}
                userAppState={this.props.userAppState} />
            </div>
            <Application
              applicationsOptions={(provisionFormOptionsApi.getProvisionFormOptions()[0]) ? 
                provisionFormOptionsApi.getProvisionFormOptions()[0].application : ''}
              applicationAppState={this.props.applicationAppState}
              setApplication={this.props.actions.setApplication}/>
            <SSHKeys
              deleteSSHKey={this.props.actions.deleteSSHKey}
              enableSSHKey={this.props.actions.enableSSHKey}
              showSSHKey={this.props.actions.showSSHKey}
              requestPostCloudProviderSSHKey={this.props.actions.requestPostCloudProviderSSHKey}
              setSSHKey={this.props.actions.setSSHKey}
              setSSHKeyTitle={this.props.actions.setSSHKeyTitle}
              setSSHKeyContent={this.props.actions.setSSHKeyContent}
              cloudProviderAppState={this.props.cloudProviderAppState}
              userAppState={this.props.userAppState} />
            <CreateService
              projectNameAppState={this.props.projectNameAppState}
              repositoryAppState={this.props.repositoryAppState}
              applicationAppState={this.props.applicationAppState}/>
          </div>
          <div className="large-2 columns hide-for-small-only hide-for-medium-only">
            <ServiceSummary
              projectNameAppState={this.props.projectNameAppState}
              repositoryAppState={this.props.repositoryAppState}
              applicationAppState={this.props.applicationAppState}/>
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

ServiceForm.propTypes = {
  actions: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    cloudProviderAppState: state.cloudProviderAppState,
    projectNameAppState: state.projectNameAppState,
    applicationAppState: state.applicationAppState,
    repositoryAppState: state.repositoryAppState,
    userAppState: state.userAppState
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
