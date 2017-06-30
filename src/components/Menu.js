import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import AppBar from "material-ui/AppBar";
import cookie from "react-cookie";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import PropTypes from "prop-types";
import React from "react";

const Menu = ( {setUserSesion} ) => {
  const signOut = () => {
    cookie.remove("user_session", { path: "/" });
    setUserSesion(
      fromJS(
        {
          "user_session": ""
        }
      )
    );
    HandleGoToSomePath("/login");
  };
  const HandleGoToSomePath = (path) => {
    browserHistory.push(path);
  };
  return (
    <AppBar
        iconElementLeft={
          <IconButton>
            <FontIcon
                onClick={()=>HandleGoToSomePath("/projects")}
                className="icon icon-home"
            />
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
                onClick={()=>HandleGoToSomePath("/projects")}
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
  setUserSesion: PropTypes.func.isRequired
};

export default Menu;
