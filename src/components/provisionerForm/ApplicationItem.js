import React, { PropTypes } from "react";

const ApplicationItem = ( { activeApplication, identifier, roles, handleClick, name, end } ) => {
  return (
    <div className={end ?"large-4 medium-6 small-12 columns end":"large-4 medium-6 small-12 columns"}>
      <ul className={activeApplication == identifier ?"selection-table active":"selection-table"}>
        <li
            className="bullet-item"
            id={identifier}
            onClick={(event)=>handleClick(event, roles)} >
          <img
              className={identifier}
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          />
          <span>{name}</span>
        </li>
      </ul>
    </div>
  );
};

ApplicationItem.propTypes = {
  activeApplication: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  end: PropTypes.bool.isRequired
};

export default ApplicationItem;
