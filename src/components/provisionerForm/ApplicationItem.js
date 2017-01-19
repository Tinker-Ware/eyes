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

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
    marginLeft: 16
  },
};

const ApplicationItem = ( { activeApplication, icon, identifier, roles, handleClick, name, end } ) => {
  return (
    <div className={'small-12 medium-6 large-6 columns one-click-app '+(end ? 'end':'')}>
      <Card>
        <CardHeader
          title={name}
          subtitle="One-Click App"
          avatar={<FontIcon className={'icon icon-'+icon}/>}
          showExpandableButton
        />
        <CardActions>
          <FlatButton
              label={'Select'}
              primary
              onClick={(event)=>handleClick(event, identifier, roles)}
          />
          <FlatButton
              label={'Configuration'}
          />
        </CardActions>
        <CardText expandable={true}>
          <p>{JSON.stringify(roles)}</p>
        </CardText>
      </Card>
    </div>
  );
};

ApplicationItem.propTypes = {
  activeApplication: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  end: PropTypes.bool.isRequired
};

export default ApplicationItem;
