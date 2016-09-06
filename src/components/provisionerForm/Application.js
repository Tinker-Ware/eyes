import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { fromJS } from 'immutable';
import ApplicationItem from './ApplicationItem';

const Application = ( {applicationsOptions, setApplication, applicationAppState} ) => {
  const handleApplicationClick = (e) => {
    e.preventDefault();
    if( e.target.nodeName.toLowerCase()=="span" || e.target.nodeName.toLowerCase()=="img" )
      setApplication(fromJS({
        application: e.target.parentNode.id
      }));
    else
      setApplication(fromJS({
        application: e.target.id
      }));
  };
  return (
    <div className="row">
      <h2>
        <i className="step fi-social-dropbox" />
         Select Application
      </h2>
      {applicationsOptions.map((value, index) => 
        <ApplicationItem
          activeApplication={applicationAppState.get('application_name')}
          key={value.identifier}
          identifier={value.identifier}
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
