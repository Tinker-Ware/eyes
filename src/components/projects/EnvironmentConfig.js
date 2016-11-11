import React  from "react";
import FontIcon from "material-ui/FontIcon";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import {List, ListItem} from "material-ui/List";
import Divider from "material-ui/Divider";
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
};

const EnvironmentConfig = () => {
  return (
    <div className="card">
      <Card>
        <h2 className="align-center">
          {"Environments Configuration"}
        </h2>
        <ListItem
            primaryText={"Add new Environment"}
            secondaryText={"Configure the advanced configuration"}
        />
        <TextField
            floatingLabelText="Environment"
            fullWidth
            hintText="Production"
            name="Environment"
            type="text"
        />
        <RaisedButton
            href="#"
            icon={<FontIcon className="icon icon-person-add" />}
            label="Add Environment"
            primary
            style={style.button}
        />
        <div className="align-right">
          <RaisedButton
              href="#"
              icon={<FontIcon className="icon icon-trigger" />}
              label="Add Trigger"
              primary
              style={style.button}
          />
        </div>
        <List>
          <ListItem
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
