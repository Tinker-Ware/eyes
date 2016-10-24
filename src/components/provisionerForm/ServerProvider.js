import React from 'react';

const ServerProvider = () => {
  return (
    <div
      className="row"
      id="server-provider">
      <h2>
        <i className="step fi-cloud" />
          Select Server Provider
        </h2>
      <div className="large-3 medium-6 small-6 columns">
        <ul className="selection-table">
          <li className="price">
            <img
              className="amazon_web_services small-image"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </li>
          <li className="bullet-item">Amazon Web Services</li>
        </ul>
      </div>
      <div className="large-3 medium-6 small-6 columns">
        <ul className="selection-table active">
          <li className="price">
            <img
              className="digital_ocean small-image"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </li>
          <li className="bullet-item">Digital Ocean</li>
        </ul>
      </div>
      <div className="large-3 medium-6 small-6 columns end">
        <ul className="selection-table">
          <li className="price">
            <img className="google_cloud small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
          </li>
          <li className="bullet-item">Google Cloud</li>
        </ul>
      </div>
      <div className="large-3 medium-6 small-6 columns end">
        <ul className="selection-table">
          <li className="price">
            <img className="none small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
          </li>
          <li className="bullet-item">None</li>
        </ul>
      </div>
    </div>
  );
};

export default ServerProvider;
