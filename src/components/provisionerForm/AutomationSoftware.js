import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AutomationSoftware = () => {
    return (
        <div className="row" data-magellan-destination="automation-software" id="automation-software" data-equalizer>
        <h2><i className="step fi-upload-cloud"></i> Select Automation Software</h2>
        <div className="large-4 medium-6 small-6 columns" data-equalizer-watch>
          <ul className="selection-table active" data-name="puppet" data-type="automation-software" data-id="0">
            <li className="price"><img className="puppet small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Puppet</li>
          </ul>
        </div>
        <div className="large-4 medium-6 small-6 columns" data-equalizer-watch>
          <ul className="selection-table" data-name="ansible" data-type="automation-software" data-id="1">
            <li className="price"><img className="ansible small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Ansible</li>
          </ul>
        </div>
        <div className="large-4 medium-6 small-6 columns end" data-equalizer-watch>
          <ul className="selection-table" data-name="chef" data-type="automation-software" data-id="2">
            <li className="price"><img className="chef small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Chef</li>
          </ul>
        </div>
      </div>
    );
};

export default AutomationSoftware;
