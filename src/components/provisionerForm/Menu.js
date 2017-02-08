import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import React, {PropTypes} from "react";

const Menu = ( { userAppState } ) => {
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
  );
};

Menu.propTypes = {
  userAppState: PropTypes.object.isRequired
};

export default Menu;
