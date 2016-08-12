import React, {PropTypes} from 'react';

const SSHKeysItem = ( {end, isActive, id, handleClick, value} ) => {
  return (
    <div className={end ? 'large-3 medium-6 small-12 columns end' : 'large-3 medium-6 small-12 columns columns'}>
      <ul className={isActive ? 'selection-table active' : 'selection-table'} id={id}>
        <li
          className="bullet-item"
          onClick={handleClick}>
          {value}
        </li>
      </ul>
    </div>
  );
};

SSHKeysItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  identifier: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};

export default SSHKeysItem;