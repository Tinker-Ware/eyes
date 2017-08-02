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
              environments={this.props.applicationAppState.get("application_evironments")?this.props.applicationAppState.get("application_evironments").toJS():[]}
              ghostAppState={this.props.ghostAppState}
              mongodbAppState={this.props.mongodbAppState}
              mysqlAppState={this.props.mysqlAppState}
              nginxAppState={this.props.nginxAppState}
              nodejsAppState={this.props.nodejsAppState}
              plainHtmlAppState={this.props.plainHtmlAppState}
              projectNameAppState={this.props.projectNameAppState}
              provisionerFormActions={this.props.provisionerFormActions}
              repositoryAppState={this.props.repositoryAppState}
              rolesActions={this.props.rolesActions}
              setProjectName={this.props.provisionerFormActions.setProjectName}
              sparkAppState={this.props.sparkAppState}
              springAppState={this.props.springAppState}
              userAppState={this.props.userAppState}
              yiiAppState={this.props.yiiAppState}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

ServiceForm.propTypes = {
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  baseAppState: PropTypes.object.isRequired,
  buildbotAppState: PropTypes.object.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  ghostAppState: PropTypes.object.isRequired,
  mongodbAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  nginxAppState: PropTypes.object.isRequired,
  nodejsAppState: PropTypes.object.isRequired,
  plainHtmlAppState: PropTypes.object.isRequired,
  projectNameAppState: PropTypes.object.isRequired,
  provisionerFormActions: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  sparkAppState: PropTypes.object.isRequired,
  springAppState: PropTypes.object.isRequired,
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
    mongodbAppState: state.mongodbAppState,
    mysqlAppState: state.mysqlAppState,
    nginxAppState: state.nginxAppState,
    nodejsAppState: state.nodejsAppState,
    plainHtmlAppState: state.plainHtmlAppState,
    projectNameAppState: state.projectNameAppState,
    repositoryAppState: state.repositoryAppState,
    sparkAppState: state.sparkAppState,
    springAppState: state.springAppState,
    userAppState: state.userAppState,
    yiiAppState: state.yiiAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applicationActions: bindActionCreators(applicationActions, dispatch),
    provisionerFormActions: bindActionCreators(provisionerFormActions, dispatch),
    rolesActions: bindActionCreators(rolesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceForm);
