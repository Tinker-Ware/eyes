import React, { PropTypes } from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from "material-ui/FontIcon";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

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
    <div className={'small-12 medium-6 large-6 columns one-click-app '+(end ? 'end':'')}>
      <Card>
        <CardHeader
          title={name}
          subtitle={description}
          avatar={<FontIcon className={'icon icon-'+icon}/>}
          showExpandableButton
        />
        <CardActions>
          <FlatButton
              label={'Use'}
              primary
              onClick={(event)=>handleClick(event, identifier, roles)}
          />
          <FlatButton
              label={'Show Configuration'}
          />
        </CardActions>
        <CardText expandable={true}>
          <Divider/>
          <List>
            <Subheader>{"Configurations"}</Subheader>
          </List>
          <TextField
              errorText="This field is required."
              floatingLabelText={configuration.name}
              fullWidth
              name={configuration.id}
              type={configuration.type}
              // value={projectNameAppState.project_name}
              // onChange={ProjectNameKeypress}
          />
          <RaisedButton
              icon={<FontIcon className="icon icon-save" />}
              label={"Save"}
              primary
              // onClick={handleCreateUserProject}
              buttonStyle={styles.button}
          />
        </CardText>
      </Card>
    </div>
  );
};

ApplicationItem.propTypes = {
  activeApplication: PropTypes.string.isRequired,
  configuration: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  end: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired
};

export default ApplicationItem;
