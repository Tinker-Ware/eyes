import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Project from "../components/projects/Project";

export class ProjectInfo extends Component {
  // componentWillMount() {
  //   if (cookie.load("user_session"))
  //     browserHistory.push("/");
  // }
  // componentDidUpdate() {
  //   if (this.props.userAppState.get("user_session")) {
  //     this.props.actions.setUserSesionEmail(fromJS({
  //       "user_sesion_email":""}));
  //     this.props.actions.setUserSesionPassword(fromJS({
  //       "user_sesion_password":""}));
  //     browserHistory.push("/");
  //   }
  // }
  render() {
    return (
      <MuiThemeProvider>
        <div className="small-12 medium-12 large-12 large-centered columns">
          <Project/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ProjectInfo;
