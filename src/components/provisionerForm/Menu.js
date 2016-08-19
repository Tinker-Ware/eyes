import React, { Component, PropTypes } from 'react';
import {Link, IndexLink} from 'react-router';

const Menu = () => {
  const handleApplicationClick = (e) => {
    e.preventDefault();
  };
  return (
    <div data-magellan-expedition="fixed">
      <div className="row">
        <dl className="sub-nav">
          <dd className="active">
            <a href="#project-configuration">
              <i className="step fi-wrench"></i>
               Project Configuration</a>
          </dd>
          <dd>
            <a href="#connect-service">
              <i className="step fi-share"></i>
               Connect Service</a>
          </dd>
          <dd>
            <a href="#aplications"><i className="step fi-social-dropbox"></i>
             Aplications</a>
          </dd>
          <dd className="user-login">
            <Link to="/login"><i className="step fi-torso"></i>
             Log in</Link>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Menu;
