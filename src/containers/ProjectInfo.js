import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {fromJS} from "immutable";
import * as actions from "../actions/ServiceFormActions";
import * as applicationActions from "../actions/ApplicationActions";
import * as projectsActions from "../actions/projectsActions";
import cookie from "react-cookie";
import Menu from "../components/Menu";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Notification from "../components/Notification";
import Paper from "material-ui/Paper";
import Project from "../components/projects/Project";
import React, { Component, PropTypes } from "react";

export class ProjectInfo extends Component {
  componentWillMount() {
    if (!cookie.load("user_session"))
      browserHistory.push("/login");
    if(cookie.load("user_session")){
      this.props.projectsActions.requestGetUserProject(fromJS({
        "authorization": cookie.load("user_session").token,
        "projectId": this.props.params.projecId
      }));
      this.props.projectsActions.requestProjectDeploys(fromJS({
        "authorization": cookie.load("user_session").token,
        "project_id": this.props.params.projecId
      }));
    }
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
              <Project
                  deleteProjectServer={this.props.projectsActions.deleteProjectServer}
                  deployProject={this.props.projectsActions.deployProject}
                  projectsAppState={this.props.projectsAppState}
                  requestProjectDeployServers={this.props.projectsActions.requestProjectDeployServers}
                  setShowProjectServers={this.props.projectsActions.setShowProjectServers}
                  userAppState={this.props.userAppState}
              />
            </Paper>
          </div>
          <Notification
              message={this.props.applicationAppState.get("notification")}
              setNotification={this.props.applicationActions.setNotification}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

ProjectInfo.propTypes = {
  actions: PropTypes.object.isRequired,
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  projectsActions: PropTypes.object.isRequired,
  projectsAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    applicationAppState: state.applicationAppState,
    projectsAppState: state.projectsAppState,
    userAppState: state.userAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    applicationActions: bindActionCreators(applicationActions, dispatch),
    projectsActions: bindActionCreators(projectsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectInfo);
