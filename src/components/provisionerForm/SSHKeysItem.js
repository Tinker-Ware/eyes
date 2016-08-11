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
  isActive: PropTypes.bool,
  identifier: PropTypes.number,
  id: PropTypes.number,
  value: PropTypes.string.isRequired,
  end: PropTypes.string
};

export default SSHKeysItem;