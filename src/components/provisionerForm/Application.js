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
    <div className="small-12 medium-12 large-12">
      <div className="row">
        <h2>{'Choose an One-Click Apps'}</h2>
        {applicationsOptions.apps.map((value, index) =>
          <ApplicationItem
              activeApplication={applicationAppState.get("application_name")?applicationAppState.get("application_name").toJS().name:""}
              configuration={value.configuration[0]}
              description={value.description}
              end={(index == applicationsOptions.apps.length - 1) ? true : false}
              handleClick={handleApplicationClick}
              icon={value.icon}
              identifier={value.identifier}
              key={value.identifier}
              name={value.name}
              roles={value.roles}
          />)
        }
      </div>
      <div className="row">
        <h2>{'Choose a Database'}</h2>
        {applicationsOptions.databases.map((value, index) =>
          <ApplicationItem
              activeApplication={applicationAppState.get("application_name")?applicationAppState.get("application_name").toJS().name:""}
              configuration={value.configuration[0]}
              description={value.description}
              end={(index == applicationsOptions.databases.length - 1) ? true : false}
              handleClick={handleApplicationClick}
              icon={value.icon}
              identifier={value.identifier}
              key={value.identifier}
              name={value.name}
              roles={value.roles}
          />)
        }
      </div>
      <div className="row">
        <h2>{'Choose a Web Serving Software'}</h2>
        {applicationsOptions.web_serving_softwares.map((value, index) =>
          <ApplicationItem
              activeApplication={applicationAppState.get("application_name")?applicationAppState.get("application_name").toJS().name:""}
              configuration={value.configuration[0]}
              description={value.description}
              end={(index == applicationsOptions.web_serving_softwares.length - 1) ? true : false}
              handleClick={handleApplicationClick}
              icon={value.icon}
              identifier={value.identifier}
              key={value.identifier}
              name={value.name}
              roles={value.roles}
          />)
        }
      </div>
    </div>
  );
};

Application.propTypes = {
  setApplication: PropTypes.func.isRequired,
  applicationsOptions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired
};

export default Application;
