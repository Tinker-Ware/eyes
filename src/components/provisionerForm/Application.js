import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { fromJS } from 'immutable';
import ApplicationItem from './ApplicationItem';

const Application = ( {applicationsOptions, setApplication, applicationAppState} ) => {
  const handleApplicationClick = (e, role) => {
    e.preventDefault();
    if( e.target.nodeName.toLowerCase()=="span" || e.target.nodeName.toLowerCase()=="img" ){
      setApplication(fromJS({
        application: {
          name: e.target.parentNode.id,
          roles: role
        }
      }));
    }else{
      setApplication(fromJS({
        application: {
          name: e.target.id,
          roles: role
        }
      }));
    }
  };
  return (
    <div className="row">
      <h2>
        <i className="step fi-social-dropbox" />
         Select Application
      </h2>
      {applicationsOptions.map((value, index) =>
        <ApplicationItem
          activeApplication={applicationAppState.get('application_name')?applicationAppState.get('application_name').toJS().name:""}
          key={value.identifier}
          identifier={value.identifier}
          roles={value.roles}
          handleClick={handleApplicationClick}
          name={value.name}
          end={(index == applicationsOptions.length - 1) ? true : false} />)}
    </div>
  );
};

Application.propTypes = {
  setApplication: PropTypes.func.isRequired,
  applicationsOptions: PropTypes.array.isRequired,
  applicationAppState: PropTypes.object.isRequired
};

export default Application;
