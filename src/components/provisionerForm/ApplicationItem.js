import React, { PropTypes } from 'react';

const ApplicationItem = ( props ) => {
    return (
        <div className= {props.end ? 'large-4 medium-6 small-12 columns end' : 'large-4 medium-6 small-12 columns'} data-equalizer-watch>
          <ul className="selection-table">
            <li className="bullet-item" id={props.identifier} onClick={props.handleChange}>
                <img className={props.identifier} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img>
                <span>{props.name}</span>
            </li>
          </ul>
        </div>
    );
};

ApplicationItem.propTypes = {
    handleChange: PropTypes.func.isRequired,
    identifier: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    end: PropTypes.string
};

export default ApplicationItem;
