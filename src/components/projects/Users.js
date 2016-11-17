import {Card} from "material-ui/Card";
import {List, ListItem} from "material-ui/List";
import {Toolbar, ToolbarGroup, ToolbarTitle} from "material-ui/Toolbar";
import AppBar from "material-ui/AppBar";
import Divider from "material-ui/Divider";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import RaisedButton from "material-ui/RaisedButton";
import React  from "react";
import TextField from "material-ui/TextField";

const style = {
  button: {
   margin: 12,
  },
  chip: {
   margin: 4,
  },
  container: {
   position: "fixed",
  },
  refresh: {
   display: "inline-block",
   position: "relative",
  },
  toolbar: {
    margin: "-1em -1em 3em -1em",
  },
  toolbarTitle: {
    marginLeft: "1em"
  }
};

const Users = () => {
  return (
    <div className="card">
      <AppBar
          iconElementLeft={
            <IconButton href="/project/1">
              <FontIcon className="icon icon-arrow-back"/>
            </IconButton>
          }
          iconElementRight={
            <IconMenu
                anchorOrigin={
                  {
                    horizontal: 'right',
                    vertical: 'top'
                  }
                }
                iconButtonElement={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                targetOrigin={
                  {
                    horizontal: 'right',
                    vertical: 'top'
                  }
                }
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
          title="My DevOp"
      />
      <Card>
        <Toolbar style={style.toolbar}>
          <ToolbarGroup firstChild>
            <FontIcon className="icon icon-person"/>
            <ToolbarTitle
                style={style.toolbarTitle}
                text="Users"
            />
          </ToolbarGroup>
        </Toolbar>
        <TextField
            floatingLabelText="Name"
            fullWidth
            hintText="Javier"
            name="Name"
            type="text"
        />
        <RaisedButton
            href="#"
            icon={<FontIcon className="icon icon-person-add" />}
            label="Add User"
            primary
            style={style.button}
        />
        <div>
          <List>
            <ListItem
                disabled
                primaryText={"List of Users"}
                secondaryText={"Modify your project users"}
            />
          </List>
          <Divider />
          <List>
            <ListItem
                leftIcon={<FontIcon className="icon icon-person"/>}
                primaryText={"Alfonso"}
                rightIcon={<FontIcon className="icon icon-delete"/>}
                secondaryText={"Devop"}
            />
            <ListItem
                leftIcon={<FontIcon className="icon icon-person"/>}
                primaryText={"Antonio"}
                rightIcon={<FontIcon className="icon icon-delete"/>}
                secondaryText={"Developer"}
            />
          </List>
        </div>
      </Card>
    </div>
  );
};

export default Users;
