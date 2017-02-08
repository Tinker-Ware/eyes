import {browserHistory} from "react-router";
import AppBar from "material-ui/AppBar";
import cookie from "react-cookie";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import ProjectsList from "../components/projects/ProjectsList";
import React, { Component } from "react";
import FontIcon from "material-ui/FontIcon";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

export class Projects extends Component {
  componentWillMount() {
    if (!cookie.load("user_session"))
      browserHistory.push("/login");
  }
  render() {
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
                          primaryText="User Profile" />
                      <MenuItem primaryText="Sign out" />
                    </IconMenu>
                  }
                  title="My DevOp"
              />
              <ProjectsList/>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Projects;
