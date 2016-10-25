import React, { PropTypes } from "react";
import { Link } from "react-router";

const Menu = ( { userAppState } ) => {
  return (
    <div data-magellan-expedition="fixed">
      <div className="row">
        <dl className="sub-nav">
          <dd className="active">
            <a href="#project-configuration">
              <i className="step fi-wrench" />
              {"Project Configuration"}
            </a>
          </dd>
          <dd>
            <a href="#connect-service">
              <i className="step fi-share" />
              {"Connect Service"}
            </a>
          </dd>
          <dd>
            <a href="#aplications">
              <i className="step fi-social-dropbox" />
              {"Aplications"}
            </a>
          </dd>
          <dd className="user-login">
            <Link to="/user">
              <i className="step fi-torso" />
              &nbsp;{"Logged as"} {userAppState.get("user_session")?userAppState.get("user_session").toJS().email:""}
            </Link>
          </dd>
        </dl>
      </div>
    </div>
  );
};

Menu.propTypes = {
  userAppState: PropTypes.object.isRequired
};

export default Menu;
