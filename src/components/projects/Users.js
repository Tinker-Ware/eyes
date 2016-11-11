import React  from "react";
import FontIcon from "material-ui/FontIcon";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import {List, ListItem} from "material-ui/List";
import Divider from "material-ui/Divider";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
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

const Users = () => {
  return (
    <div className="card">
      <Card>
        <h2 className="align-center">
          {"Project Users"}
        </h2>
        <ListItem
            primaryText={"Add new Users"}
            secondaryText={"Select to witch environmet the user will have access"}
        />
        <TextField
            floatingLabelText="Name"
            fullWidth
            hintText="Javier"
            name="Name"
            type="text"
        />
        <RadioButtonGroup
            defaultSelected={"Developer"}
            name={"shipSpeed"}
        >
          <RadioButton
              label={"Developer"}
              value={"Developer"}
          />
          <RadioButton
              label={"Tester"}
              value={"Tester"}
          />
          <RadioButton
              label={"Devop"}
              value={"Devop"}
          />
        </RadioButtonGroup>
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
                primaryText={"List of Users"}
                secondaryText={"Modify your project users"}
            />
          </List>
          <Divider />
          <List>
            <ListItem
                leftIcon={<FontIcon className="icon icon-time"/>}
                primaryText={"Alfonso"}
                rightIcon={<FontIcon className="icon icon-delete"/>}
                secondaryText={"Devop"}
            />
            <ListItem
                leftIcon={<FontIcon className="icon icon-push"/>}
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
