import React, {PropTypes} from 'react';

const SSHKeysItem = ( props ) => {
  return (
    <div className={props.end ? 'large-3 medium-6 small-12 columns end' : 'large-3 medium-6 small-12 columns columns'}>
      <ul className={props.isActive ? 'selection-table active' : 'selection-table'} key={props.key}>
        <li
          className="bullet-item"
          onClick={props.handleClick}>
          {props.value}
        </li>
      </ul>
    </div>
  );
};

SSHKeysItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  end: PropTypes.string
};

export default SSHKeysItem;