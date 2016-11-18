import { Card } from "material-ui/Card";
import {List, ListItem} from "material-ui/List";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
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

const EnvironmentConfig = () => {
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
                text="Environments Configuration"
            />
          </ToolbarGroup>
        </Toolbar>
        <ListItem
            disabled
            primaryText={"Add new Trigger"}
            secondaryText={"Configure automatic deploys"}
        />
        <TextField
            floatingLabelText="Trigger"
            fullWidth
            hintText="Time"
            name="Environment"
            type="text"
        />
        <RadioButtonGroup
            defaultSelected="Event"
            name="trigger"
        >
          <RadioButton
              label={"Time"}
              value={"Time"}
          />
          <RadioButton
              label={"Event"}
              value={"Event"}
          />
        </RadioButtonGroup>
        <RaisedButton
            href="#"
            icon={<FontIcon className="icon icon-trigger" />}
            label="Add Trigger"
            primary
            style={style.button}
        />
        <List>
          <ListItem
              disabled
              primaryText={"Trigger"}
              secondaryText={"List of active triggers"}
          />
        </List>
        <Divider />
        <List>
          <ListItem
              leftIcon={<FontIcon className="icon icon-timer"/>}
              primaryText={"Time"}
              rightIcon={<FontIcon className="icon icon-delete"/>}
              secondaryText={"20 secs"}
          />
          <ListItem
              leftIcon={<FontIcon className="icon icon-push"/>}
              primaryText={"Event"}
              rightIcon={<FontIcon className="icon icon-delete"/>}
              secondaryText={"Push"}
          />
        </List>
      </Card>
    </div>
  );
};

export default EnvironmentConfig;
