import {browserHistory} from "react-router";
import AppBar from "material-ui/AppBar";
import cookie from "react-cookie";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import React from "react";

const Menu = () => {
  const signOut = () => {
    cookie.remove("user_session", { path: "/" });
    browserHistory.push("/login");
  };
  const showProjects = () => {
    browserHistory.push("/projects");
  };
  return (
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
                onClick={showProjects}
                primaryText="Projects"
            />
            {/* <MenuItem
                href="/user"
                primaryText="User Profile"
            /> */}
            <MenuItem
                onClick={signOut}
                primaryText="Sign out"
            />
          </IconMenu>
        }
        title="My DevOp"
    />
  );
};

Menu.propTypes = {
};

export default Menu;
