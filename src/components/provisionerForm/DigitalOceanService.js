import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DigitalOceanService = ( ) => {
  return (
    <div className="large-6 medium-6 small-12 columns">
      <ul className="selection-table">
        <li className="bullet-item">
          <a
            href="#"
            className="button radius btn-connect">
            <img
              className="DigitalOcean" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img>
            Log in with Digital Ocean</a>
        </li>
      </ul>
    </div>
  );
};

export default DigitalOceanService;
