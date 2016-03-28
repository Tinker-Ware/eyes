import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const GithubService = () => {
    return (
        <div className="row" data-magellan-destination="connect-service" id="connect-service">
          <h2><i className="step fi-share"></i> Connect Service(s)</h2>
          <div className="large-12 medium-12 small-12 columns">
            <ul className="selection-table" data-name="GitHub" data-type="connect-service" data-id="0">
              <li className="bullet-item"><img className="GitHub" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img>GitHub <a href="#" data-type="github" className="button radius btn-connect">Connect</a> <a href="#" data-type="github" className="button success radius btn-config hide"><i className="step fi-widget"></i></a></li>
            </ul>
          </div>
        </div>
    );
};

export default GithubService;
