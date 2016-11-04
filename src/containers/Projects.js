import React, { Component } from "react";
import ProjectsList from "../components/projects/ProjectsList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export class Projects extends Component {
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
          <ProjectsList/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Projects;
