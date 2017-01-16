import {Card} from "material-ui/Card";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import RaisedButton from "material-ui/RaisedButton";
import React, {PropTypes} from "react";

const style = {
  button: {
    margin: 12,
  },
  toolbar: {
    margin: "-1em -1em 3em -1em",
  },
  toolbarTitle: {
    marginLeft: "1em"
  }
};

const Menu = ( { userAppState } ) => {
  return (
    <div className="card">
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
                  href="/user"
                  primaryText="User Information"
              />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
          title="My DevOp"
      />
      <Card>
        <Toolbar style={style.toolbar}>
          <ToolbarGroup firstChild>
            <FontIcon className="icon icon-project"/>
            <ToolbarTitle
                style={style.toolbarTitle}
                text="Create New Project"
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <ToolbarSeparator />
            <RaisedButton
                href={"#"}
                icon={<FontIcon className="icon icon-edit" />}
                label={"Edit"}
                primary
                style={style.button}
            />
            <RaisedButton
                href={"#"}
                icon={<FontIcon className="icon icon-deploy" />}
                label={"Deploy"}
                primary
                style={style.button}
            />
            <RaisedButton
                href={"#"}
                icon={<FontIcon className="icon icon-cloud-download" />}
                label={"Download"}
                primary
                style={style.button}
            />
          </ToolbarGroup>
        </Toolbar>
      </Card>
    </div>
  );
};

Menu.propTypes = {
  userAppState: PropTypes.object.isRequired
};

export default Menu;
