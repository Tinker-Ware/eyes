import React, {PropTypes} from "react";
import {Card, CardActions, CardHeader, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import {List} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import Divider from "material-ui/Divider";

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
    marginLeft: 16
  },
};

const ApplicationItem = ( { configuration, description, icon, identifier, roles, handleApplicationOneClick, name, end, remplaceRoleValue } ) => {
  const actions = [
      <FlatButton
          // onTouchTap={this.handleClose}
          key={1}
          label={"Cancel"}
          primary
      />,
      <FlatButton
          // onTouchTap={this.handleClose}
          key={2}
          keyboardFocused
          label={"Submit"}
          primary
      />,
    ];
  return (
    <div className={"small-12 medium-6 large-6 columns one-click-app "+(end ? "end":"")}>
      <Card>
        <CardHeader
            avatar={<FontIcon className={"icon icon-"+icon}/>}
            showExpandableButton
            subtitle={description}
            title={name}
        />
        <CardActions>
          <FlatButton
              label={"Use"}
              onClick={(event)=>handleApplicationOneClick(event, identifier, roles)}
              primary
          />
          <FlatButton
              label={"Show Configuration"}
          />
        </CardActions>
        <CardText expandable>
          <Divider/>
          <List>
            <Subheader>
              {"Configurations"}
            </Subheader>
          </List>
          {configuration.map((value, index) =>
            <TextField
                errorText="This field is required."
                floatingLabelText={value.name}
                fullWidth
                key={index}
                name={value.id}
                onChange={(event)=>remplaceRoleValue(event, roles, identifier)}
                type={value.type}
            />
          )}
          <RaisedButton
              // onClick={remplaceRoleValue(roles, identifier)}
              buttonStyle={styles.button}
              icon={<FontIcon className="icon icon-save" />}
              label={"Save"}
              primary
          />
        </CardText>
        <Dialog
            // onRequestClose={true}
            actions={actions}
            modal={false}
            open={false}
            title={"Dialog With Actions"}
        >
          {"The actions in this window were passed in as an array of React objects."}
        </Dialog>
      </Card>
    </div>
  );
};

ApplicationItem.propTypes = {
  configuration: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  end: PropTypes.bool.isRequired,
  handleApplicationOneClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  remplaceRoleValue: PropTypes.func.isRequired,
  roles: PropTypes.object.isRequired
};

export default ApplicationItem;
