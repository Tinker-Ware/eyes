import React from "react";

const Package = () => {
  return (
    <div
        className="row"
        id="packages">
      <h2>
        <i className="step fi-archive" />
         Select Package
      </h2>
      <div className="large-4 medium-6 small-12 columns">
        <ul className="selection-table active">
          <li className="bullet-item">
            <img
                className="Sinatra"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            Sinatra
          </li>
        </ul>
      </div>
      <div className="large-4 medium-6 small-12 columns">
        <ul className="selection-table">
          <li className="bullet-item">
            <img
                className="Ruby"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            Ruby
          </li>
        </ul>
      </div>
      <div className="large-4 medium-6 small-12 columns">
        <ul className="selection-table">
          <li className="bullet-item">
            <img
                className="Haskell"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            Haskell
          </li>
        </ul>
      </div>
      <div className="large-4 medium-6 small-12 columns">
        <ul className="selection-table active">
          <li className="bullet-item">
            <img
                className="Emacs"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            Emacs
          </li>
        </ul>
      </div>
      <div className="large-4 medium-6 small-12 columns end">
        <ul className="selection-table">
          <li className="bullet-item">
            <img
                className="VIM"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            VIM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Package;
