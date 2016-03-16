import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Distribution = () => {
    return (
        <div className="row" data-magellan-destination="distribution" id="distribution">
        <h2><i className="step fi-annotate"></i> Select Distribution</h2>
        <div className="large-3 medium-4 small-6 columns">
          <ul className="selection-table" data-name="Ubuntu" data-type="distribution" data-id="0">
            <li className="price"><img className="Ubuntu small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Ubuntu</li>
            <li className="description">
              Version
                <select value="15.04 x64">
                  <option value="15.04 x64">15.04 x64</option>
                  <option value="15.04 x32">15.04 x32</option>
                  <option value="14.04 x64">14.04 x64</option>
                  <option value="14.04 x32">14.04 x32</option>
                  <option value="12.04 x64">12.04 x64</option>
                  <option value="12.04 x32">12.04 x32</option>
                </select>
            </li>
          </ul>
        </div>
        <div className="large-3 medium-4 small-6 columns">
          <ul className="selection-table" data-name="FreeBSD" data-type="distribution" data-id="1">
            <li className="price"><img className="FreeBSD small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">FreeBSD</li>
            <li className="description">
              Version
                <select value="10.01">
                  <option value="10.01">10.01</option>
                </select>
            </li>
          </ul>
        </div>
        <div className="large-3 medium-4 small-6 columns">
          <ul className="selection-table" data-name="Fedora" data-type="distribution" data-id="2">
            <li className="price"><img className="Fedora small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Fedora</li>
            <li className="description">
              Version
                <select value="22 x64">
                  <option value="22 x64">22 x64</option>
                  <option value="21 x64">21 x64</option>
                </select>
            </li>
          </ul>
        </div>
        <div className="large-3 medium-4 small-6 columns">
          <ul className="selection-table active" data-name="Debian" data-type="distribution" data-id="3">
            <li className="price"><img className="Debian small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
            <li className="bullet-item">Debian</li>
            <li className="description">
              Version
                <select value="8.1 x64">
                  <option value="8.1 x64">8.1 x64</option>
                  <option value="8.1 x32">8.1 x32</option>
                  <option value="7.0 x64">7.0 x64</option>
                  <option value="7.0 x32">7.0 x32</option>
                  <option value="6.0 x64">6.0 x64</option>
                  <option value="6.0 x32">6.0 x32</option>
                </select>
            </li>
          </ul>
        </div>
      <div className="large-3 medium-4 small-6 columns">
        <ul className="selection-table" data-name="CoreOS" data-type="distribution" data-id="4">
          <li className="price"><img className="CoreOS small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
          <li className="bullet-item">CoreOS</li>
          <li className="description">
            Version
              <select value="758.1.0 (alpha)">
                <option value="758.1.0 (alpha)">758.1.0 (alpha)</option>
                <option value="723.3.0 (stable)">723.3.0 (stable)</option>
                <option value="723.3.0 (beta)">723.3.0 (beta)</option>
              </select>
          </li>
        </ul>
      </div>
      <div className="large-3 medium-4 small-6 columns end">
        <ul className="selection-table" data-name="CentOS" data-type="distribution" data-id="5">
          <li className="price"><img className="CentOS small-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img></li>
          <li className="bullet-item">CentOS</li>
          <li className="description">
            Version
              <select value="7 x64">
                <option value="7 x64">7 x64</option>
                <option value="6.7 x64">6.7 x64</option>
                <option value="6.7 x32">6.7 x32</option>
                <option value="5.10 x64">5.10 x64</option>
                <option value="5.10 x32">5.10 x32</option>
              </select>
          </li>
        </ul>
      </div>
      </div>
    );
};

export default Distribution;