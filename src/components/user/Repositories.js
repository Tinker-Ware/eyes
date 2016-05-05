import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Repositories = () => {
  return (
    <div>
      <h3>Repositories</h3>
      <div className="row">
        <Link to="#" className="medium-2 columns button"><span className="fi-social-github">Github</span></Link>
      </div>
    </div>
  );
};

export default Repositories;
