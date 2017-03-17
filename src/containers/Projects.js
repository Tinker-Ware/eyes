import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {fromJS} from "immutable";
import * as actions from "../actions/ServiceFormActions";
import * as projectsActions from "../actions/projectsActions";
import cookie from "react-cookie";
import Menu from "../components/Menu";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import ProjectsList from "../components/projects/ProjectsList";
import React, { Component, PropTypes } from "react";

export class Projects extends Component {
  componentWillMount() {
    if (!cookie.load("user_session"))
      browserHistory.push("/login");
    if(cookie.load("user_session"))
      this.props.projectsActions.requestGetUserProjects(fromJS({
        "authorization": cookie.load("user_session").token
      }));
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
              <ProjectsList
                  projectsAppState={this.props.projectsAppState}
              />
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Projects.propTypes = {
  actions: PropTypes.object.isRequired,
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
    projectsActions: bindActionCreators(projectsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
