import React, { PropTypes } from "react";
import { fromJS } from "immutable";
import ApplicationItem from "./ApplicationItem";

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
         {"Select Application"}
      </h2>
      {applicationsOptions.map((value, index) =>
        <ApplicationItem
            activeApplication={applicationAppState.get("application_name")?applicationAppState.get("application_name").toJS().name:""}
            end={(index == applicationsOptions.length - 1) ? true : false}
            handleClick={handleApplicationClick}
            identifier={value.identifier}
            key={value.identifier}
            name={value.name}
            roles={value.roles}
        />)
      }
    </div>
  );
};

Application.propTypes = {
  setApplication: PropTypes.func.isRequired,
  applicationsOptions: PropTypes.array.isRequired,
  applicationAppState: PropTypes.object.isRequired
};

export default Application;
