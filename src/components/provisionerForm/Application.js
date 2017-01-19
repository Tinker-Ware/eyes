import React, { PropTypes } from "react";
import { fromJS } from "immutable";
import ApplicationItem from "./ApplicationItem";

const Application = ( {applicationsOptions, setApplication, applicationAppState} ) => {
  const handleApplicationClick = (e, id, role) => {
    e.preventDefault();
    setApplication(fromJS({
      application: {
        name: id,
        roles: role
      }
    }));
  };
  return (
    <div className="row">
      {applicationsOptions.map((value, index) =>
        <ApplicationItem
            activeApplication={applicationAppState.get("application_name")?applicationAppState.get("application_name").toJS().name:""}
            end={(index == applicationsOptions.length - 1) ? true : false}
            handleClick={handleApplicationClick}
            icon={value.icon}
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
