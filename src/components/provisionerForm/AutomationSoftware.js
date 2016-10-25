import React from "react";

const AutomationSoftware = () => {
  return (
    <div
        className="row"
        id="automation-software"
    >
      <h2>
        <i className="step fi-upload-cloud" />
         {"Select Automation Software"}
      </h2>
      <div className="large-4 medium-6 small-6 columns">
        <ul className="selection-table active">
          <li className="price">
            <img
                className="puppet small-image"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          </li>
          <li className="bullet-item">
            {"Puppet"}
          </li>
        </ul>
      </div>
      <div
          className="large-4 medium-6 small-6 columns"
          data-equalizer-watch
      >
        <ul className="selection-table">
          <li className="price">
            <img
                className="ansible small-image"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          </li>
          <li className="bullet-item">
            {"Ansible"}
          </li>
        </ul>
      </div>
      <div className="large-4 medium-6 small-6 columns end">
        <ul className="selection-table">
          <li className="price">
            <img
                className="chef small-image"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
            </li>
          <li className="bullet-item">
            {"Chef"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AutomationSoftware;
