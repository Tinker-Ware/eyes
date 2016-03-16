import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ServerProvider = () => {
    return (
        <div className="row" data-magellan-destination="server-provider" id="server-provider" data-equalizer>
        <h2><i className="step fi-cloud"></i> Select Server Provider</h2>
        <div className="large-3 medium-6 small-6 columns" data-equalizer-watch>
          <ul className="selection-table" data-name="amazon_web_services" data-type="server-provider" data-id="0">
            <li className="price"><img className="amazon_web_services small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Amazon Web Services</li>
          </ul>
        </div>
        <div className="large-3 medium-6 small-6 columns" data-equalizer-watch>
          <ul className="selection-table active" data-name="digital_ocean" data-type="server-provider" data-id="1">
            <li className="price"><img className="digital_ocean small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Digital Ocean</li>
          </ul>
        </div>
        <div className="large-3 medium-6 small-6 columns end" data-equalizer-watch>
          <ul className="selection-table" data-name="google_cloud" data-type="server-provider" data-id="2">
            <li className="price"><img className="google_cloud small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Google Cloud</li>
          </ul>
        </div>
        <div className="large-3 medium-6 small-6 columns end" data-equalizer-watch>
          <ul className="selection-table" data-name="none" data-type="server-provider" data-id="3">
            <li className="price"><img className="none small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">None</li>
          </ul>
        </div>
      </div>
    );
};

export default ServerProvider;