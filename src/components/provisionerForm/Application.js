import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ApplicationItem from './ApplicationItem';

const Application = ( {applicationsOptions, setApplication, applicationAppState} ) => {
  const handleApplicationClick = (e) => {
    if( e.target.nodeName.toLowerCase()=="span" || e.target.nodeName.toLowerCase()=="img" )
      setApplication(e.target.parentNode.id);
    else
      setApplication(e.target.id);
  };
  return (
    <div className="row">
      <h2>
        <i className="step fi-social-dropbox"></i>
         Select Application
      </h2>
      {applicationsOptions.map((value, index) => 
        <ApplicationItem
          applicationAppState={applicationAppState}
          key={value.identifier}
          identifier={value.identifier}
          handleClick={handleApplicationClick}
          name={value.name}
          end={(index == applicationsOptions.length - 1) ? "end" : ""} />)}
    </div>
  );
};

Application.propTypes = {
  setApplication: PropTypes.func.isRequired,
  applicationsOptions: PropTypes.array.isRequired,
  applicationAppState: PropTypes.object.isRequired
};

export default Application;
