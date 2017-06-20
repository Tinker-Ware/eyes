// import SSHKeys from "../components/provisionerForm/SSHKeys";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { fromJS } from "immutable";
import * as applicationActions from "../actions/ApplicationActions";
import * as provisionerFormActions from "../actions/ServiceFormActions";
import * as rolesActions from "../actions/rolesActions";
import cookie from "react-cookie";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Steps from "../components/provisionerForm/Steps";
import tinkerwareBaseTheme from "../theme/tinkerwareBaseTheme";

export class ServiceForm extends Component {
  componentWillMount() {
    if (!cookie.load("user_session"))
      browserHistory.push("/login");
  }
  render() {
    if(!this.props.userAppState.get("user_session") && cookie.load("user_session")){
      this.props.provisionerFormActions.setUserSesion(fromJS({"user_session": cookie.load("user_session")
      }));
      this.props.provisionerFormActions.requestRefreshUserSession(fromJS({"authorization": cookie.load("user_session").token
      }));
    }
    const customMuiTheme = getMuiTheme(tinkerwareBaseTheme);
    return (
      <div className="row">
        <MuiThemeProvider muiTheme={customMuiTheme}>
          <Steps
              applicationActions={this.props.applicationActions}
              applicationAppState={this.props.applicationAppState}
              baseAppState={this.props.baseAppState}
              buildbotAppState={this.props.buildbotAppState}
              cloudProviderAppState={this.props.cloudProviderAppState}
              ghostAppState={this.props.ghostAppState}
              mysqlAppState={this.props.mysqlAppState}
              nginxAppState={this.props.nginxAppState}
              plainHtmlAppState={this.props.plainHtmlAppState}
              projectNameAppState={this.props.projectNameAppState}
              provisionerFormActions={this.props.provisionerFormActions}
              repositoryAppState={this.props.repositoryAppState}
              rolesActions={this.props.rolesActions}
              userAppState={this.props.userAppState}
              yiiAppState={this.props.yiiAppState}
          />
        </MuiThemeProvider>
      </div>
      // <MuiThemeProvider>
      //   <div className="small-12 medium-12 large-12 large-centered columns">
      //     <div className="container">
      //       <Paper zDepth={4}>
      //         <Menu setUserSesion={this.props.provisionerFormActions.setUserSesion}/>
      //         <div className="card">
      //           <Toolbar style={style.toolbar}>
      //             <ToolbarGroup firstChild>
      //               <FontIcon className="icon icon-project"/>
      //               <ToolbarTitle
      //                   style={style.toolbarTitle}
      //                   text="Create New Project"
      //               />
      //             </ToolbarGroup>
      //             <ToolbarGroup>
      //               <ToolbarSeparator />
      //               <RaisedButton
      //                   href="/projects"
      //                   icon={<FontIcon className="icon icon-box" />}
      //                   label={"Projects"}
      //                   primary
      //               />
      //             </ToolbarGroup>
      //           </Toolbar>
      //           <h2>{"Choose a project name"}</h2>
      //           <p>{"Give your Droplets an identifying name you will remember them by."}</p>
      //           <ProjectName
      //               projectNameAppState={this.props.projectNameAppState}
      //               setProjectName={this.props.provisionerFormActions.setProjectName}
      //           />
      //           <h2>{"Connect to your Services"}</h2>
      //           <div className="row">
      //             <GithubService
      //                 repositoryAppState={this.props.repositoryAppState}
      //                 requestRepositoryAccess={this.props.provisionerFormActions.requestRepositoryAccess}
      //                 requestUserRepositories={this.props.provisionerFormActions.requestUserRepositories}
      //                 setIntegracion={this.props.provisionerFormActions.setIntegracion}
      //                 setRepository={this.props.provisionerFormActions.setRepository}
      //                 setShowRepositories={this.props.provisionerFormActions.setShowRepositories}
      //                 userAppState={this.props.userAppState}
      //             />
      //             <CloudProvider
      //                 clearCloudProviderSSHKeys={this.props.provisionerFormActions.clearCloudProviderSSHKeys}
      //                 cloudProviderAppState={this.props.cloudProviderAppState}
      //                 requestCloudProviderAccess={this.props.provisionerFormActions.requestCloudProviderAccess}
      //                 setCloudProvider={this.props.provisionerFormActions.setCloudProvider}
      //                 userAppState={this.props.userAppState}
      //             />
      //           </div>
      //           <Application
      //               applicationAppState={this.props.applicationAppState}
      //               buildbotAppState={this.props.buildbotAppState}
      //               mysqlAppState={this.props.mysqlAppState}
      //               rolesActions={this.props.rolesActions}
      //               setActiveEnvironment={this.props.provisionerFormActions.setActiveEnvironment}
      //               setApplicationOneClick={this.props.provisionerFormActions.setApplicationOneClick}
      //               yiiAppState={this.props.yiiAppState}
      //           />
      //           <h2>{"Add your SSH keys"}</h2>
      //           <SSHKeys
      //               cloudProviderAppState={this.props.cloudProviderAppState}
      //               deleteSSHKey={this.props.provisionerFormActions.deleteSSHKey}
      //               enableSSHKey={this.props.provisionerFormActions.enableSSHKey}
      //               requestPostCloudProviderSSHKey={this.props.provisionerFormActions.requestPostCloudProviderSSHKey}
      //               setSSHKey={this.props.provisionerFormActions.setSSHKey}
      //               setSSHKeyContent={this.props.provisionerFormActions.setSSHKeyContent}
      //               setSSHKeyTitle={this.props.provisionerFormActions.setSSHKeyTitle}
      //               showSSHKey={this.props.provisionerFormActions.showSSHKey}
      //               userAppState={this.props.userAppState}
      //           />
      //           <CreateService
      //               applicationAppState={this.props.applicationAppState}
      //               baseAppState={this.props.baseAppState}
      //               buildbotAppState={this.props.buildbotAppState}
      //               cloudProviderAppState={this.props.cloudProviderAppState}
      //               mysqlAppState={this.props.mysqlAppState}
      //               nginxAppState={this.props.nginxAppState}
      //               projectNameAppState={this.props.projectNameAppState}
      //               repositoryAppState={this.props.repositoryAppState}
      //               requestPostUserProject={this.props.provisionerFormActions.requestPostUserProject}
      //               userAppState={this.props.userAppState}
      //               yiiAppState={this.props.yiiAppState}
      //           />
      //         </div>
      //       </Paper>
      //     </div>
      //     <Notification
      //         message={this.props.applicationAppState.get("notification")}
      //         setNotification={this.props.applicationActions.setNotification}
      //     />
      //       <div className="row">
      //         <footer>
      //           <div className="row">
      //             <div className="large-12 large-centered medium-12 medium-centered small-12 small-centered columns">
      //               <p className="copyright">
      //                 {"© 2015, Inc. All rights reserved."}
      //               </p>
      //             </div>
      //           </div>
      //         </footer>
      //       </div>
      //   </div>
      // </MuiThemeProvider>
    );
  }
}

ServiceForm.propTypes = {
  provisionerFormActions: PropTypes.object.isRequired,
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  baseAppState: PropTypes.object.isRequired,
  buildbotAppState: PropTypes.object.isRequired,
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
    buildbotAppState: state.buildbotAppState,
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
    provisionerFormActions: bindActionCreators(provisionerFormActions, dispatch),
    applicationActions: bindActionCreators(applicationActions, dispatch),
    rolesActions: bindActionCreators(rolesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceForm);
