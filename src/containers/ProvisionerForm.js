// import SSHKeys from "../components/provisionerForm/SSHKeys";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {fromJS} from "immutable";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import * as actions from "../actions/ServiceFormActions";
import * as applicationActions from "../actions/ApplicationActions";
import * as rolesActions from "../actions/rolesActions";
import Application from "../components/provisionerForm/Application";
import CloudProvider from "../components/provisionerForm/CloudProvider";
import cookie from "react-cookie";
import CreateService from "../components/provisionerForm/CreateService";
import FontIcon from "material-ui/FontIcon";
import GithubService from "../components/provisionerForm/GithubService";
import Menu from "../components/Menu";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Notification from "../components/Notification";
import Paper from "material-ui/Paper";
import ProjectName from "../components/provisionerForm/ProjectName";
import RaisedButton from "material-ui/RaisedButton";
import React, { Component, PropTypes } from "react";

const provisionFormOptionsApi = require("../api/provisionFormOptionsApi");

const style = {
  button: {
    margin: 12,
  },
  toolbar: {
    margin: "-1em -1em 3em -1em",
  },
  toolbarTitle: {
    marginLeft: "1em"
  }
};

export class ServiceForm extends Component {
  componentWillMount() {
    if (!cookie.load("user_session"))
      browserHistory.push("/login");
  }
  render() {
    if(!this.props.userAppState.get("user_session") && cookie.load("user_session")){
      this.props.actions.setUserSesion(fromJS({"user_session": cookie.load("user_session")
      }));
      this.props.actions.requestRefreshUserSession(fromJS({"authorization": cookie.load("user_session").token
      }));
    }
    return (
      <MuiThemeProvider>
        <div className="small-12 medium-12 large-12 large-centered columns">
          <div className="container">
            <Paper zDepth={4}>
              <Menu setUserSesion={this.props.actions.setUserSesion}/>
              <div className="card">
                <Toolbar style={style.toolbar}>
                  <ToolbarGroup firstChild>
                    <FontIcon className="icon icon-project"/>
                    <ToolbarTitle
                        style={style.toolbarTitle}
                        text="Create New Project"
                    />
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <ToolbarSeparator />
                    <RaisedButton
                        href="/projects"
                        icon={<FontIcon className="icon icon-box" />}
                        label={"Projects"}
                        primary
                    />
                  </ToolbarGroup>
                </Toolbar>
                <h2>{"Choose a project name"}</h2>
                <p>{"Give your Droplets an identifying name you will remember them by."}</p>
                <ProjectName
                    projectNameAppState={this.props.projectNameAppState}
                    setProjectName={this.props.actions.setProjectName}
                />
                <h2>{"Connect to your Services"}</h2>
                <div className="row">
                  <GithubService
                      repositoryAppState={this.props.repositoryAppState}
                      requestRepositoryAccess={this.props.actions.requestRepositoryAccess}
                      requestUserRepositories={this.props.actions.requestUserRepositories}
                      setIntegracion={this.props.actions.setIntegracion}
                      setRepository={this.props.actions.setRepository}
                      setShowRepositories={this.props.actions.setShowRepositories}
                      userAppState={this.props.userAppState}
                  />
                  <CloudProvider
                      clearCloudProviderSSHKeys={this.props.actions.clearCloudProviderSSHKeys}
                      cloudProviderAppState={this.props.cloudProviderAppState}
                      requestCloudProviderAccess={this.props.actions.requestCloudProviderAccess}
                      setCloudProvider={this.props.actions.setCloudProvider}
                      userAppState={this.props.userAppState}
                  />
                </div>
                <Application
                    applicationAppState={this.props.applicationAppState}
                    applicationsOptions={(provisionFormOptionsApi.getProvisionFormOptions()[0]) ?   provisionFormOptionsApi.getProvisionFormOptions()[0].application[0] :""}
                    mysqlAppState={this.props.mysqlAppState}
                    rolesActions={this.props.rolesActions}
                    setActiveEnvironment={this.props.actions.setActiveEnvironment}
                    setApplication={this.props.actions.setApplication}
                    setApplicationOneClick={this.props.actions.setApplicationOneClick}
                    yiiAppState={this.props.yiiAppState}
                />
                {/* <h2>{"Add your SSH keys"}</h2>
                <SSHKeys
                    cloudProviderAppState={this.props.cloudProviderAppState}
                    deleteSSHKey={this.props.actions.deleteSSHKey}
                    enableSSHKey={this.props.actions.enableSSHKey}
                    requestPostCloudProviderSSHKey={this.props.actions.requestPostCloudProviderSSHKey}
                    setSSHKey={this.props.actions.setSSHKey}
                    setSSHKeyContent={this.props.actions.setSSHKeyContent}
                    setSSHKeyTitle={this.props.actions.setSSHKeyTitle}
                    showSSHKey={this.props.actions.showSSHKey}
                    userAppState={this.props.userAppState}
                /> */}
                <CreateService
                    applicationAppState={this.props.applicationAppState}
                    baseAppState={this.props.baseAppState}
                    cloudProviderAppState={this.props.cloudProviderAppState}
                    mysqlAppState={this.props.mysqlAppState}
                    nginxAppState={this.props.nginxAppState}
                    projectNameAppState={this.props.projectNameAppState}
                    repositoryAppState={this.props.repositoryAppState}
                    requestPostUserProject={this.props.actions.requestPostUserProject}
                    userAppState={this.props.userAppState}
                    yiiAppState={this.props.yiiAppState}
                />
              </div>
            </Paper>
          </div>
          <Notification
              message={this.props.applicationAppState.get("notification")}
              setNotification={this.props.applicationActions.setNotification}
          />
            {/* <div className="row">
              <footer>
                <div className="row">
                  <div className="large-12 large-centered medium-12 medium-centered small-12 small-centered columns">
                    <p className="copyright">
                      {"© 2015, Inc. All rights reserved."}
                    </p>
                  </div>
                </div>
              </footer>
            </div> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

ServiceForm.propTypes = {
  actions: PropTypes.object.isRequired,
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  baseAppState: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  ghostAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  nginxAppState: PropTypes.object.isRequired,
  plainHtmlAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    applicationAppState: state.applicationAppState,
    baseAppState: state.baseAppState,
    cloudProviderAppState: state.cloudProviderAppState,
    ghostAppState: state.ghostAppState,
    mysqlAppState: state.mysqlAppState,
    nginxAppState: state.nginxAppState,
    plainHtmlAppState: state.plainHtmlAppState,
    projectNameAppState: state.projectNameAppState,
    repositoryAppState: state.repositoryAppState,
    userAppState: state.userAppState,
    yiiAppState: state.yiiAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    applicationActions: bindActionCreators(applicationActions, dispatch),
    rolesActions: bindActionCreators(rolesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceForm);
