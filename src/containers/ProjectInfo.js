import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {fromJS} from "immutable";
import * as actions from "../actions/ServiceFormActions";
import * as projectsActions from "../actions/projectsActions";
import AppBar from "material-ui/AppBar";
import cookie from "react-cookie";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import Project from "../components/projects/Project";
import React, { Component, PropTypes } from "react";

export class ProjectInfo extends Component {
  componentWillMount() {
    if (!cookie.load("user_session"))
      browserHistory.push("/login");
    if(cookie.load("user_session"))
      this.props.projectsActions.requestGetUserProject(fromJS({
        "authorization": cookie.load("user_session").token,
        "projectId": this.props.params.projecId
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
              <AppBar
                  iconElementLeft={
                    <IconButton>
                      <FontIcon className="icon icon-home"/>
                    </IconButton>
                  }
                  iconElementRight={
                    <IconMenu
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "top"
                        }}
                        iconButtonElement={
                          <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{
                          horizontal: "right",
                          vertical: "top"
                        }}
                    >
                      <MenuItem
                          href="/projects"
                          primaryText="Dashboard"
                      />
                      <MenuItem
                          href="/user"
                          primaryText="User Profile"
                      />
                      <MenuItem primaryText="Sign out" />
                    </IconMenu>
                  }
                  title="My DevOp"
              />
              <Project
                  projectsAppState={this.props.projectsAppState}
              />
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ProjectInfo.propTypes = {
  actions: PropTypes.object.isRequired,
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
    projectsActions: bindActionCreators(projectsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectInfo);
