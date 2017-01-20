import React, {PropTypes} from "react";
import {Card, CardActions, CardHeader, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import {List} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
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

const ApplicationItem = ( { activeApplication, configuration, description, icon, identifier, roles, handleClick, name, end } ) => {
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
              onClick={(event)=>handleClick(event, identifier, roles)}
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
                // onChange={ProjectNameKeypress}
                // value={projectNameAppState.project_name}
                errorText="This field is required."
                floatingLabelText={value.name}
                fullWidth
                key={index}
                name={value.id}
                type={value.type}
            />
          )}
          <RaisedButton
              // onClick={handleCreateUserProject}
              buttonStyle={styles.button}
              icon={<FontIcon className="icon icon-save" />}
              label={"Save"}
              primary
          />
        </CardText>
      </Card>
    </div>
  );
};

ApplicationItem.propTypes = {
  activeApplication: PropTypes.string.isRequired,
  configuration: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  end: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired
};

export default ApplicationItem;
