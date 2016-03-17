import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AccountSidebar from "./user/AccountSidebar";
import UserSidebar from "./user/UserSidebar";

const UserProfile = (props) => {
    return (
        <div className="row">
          <div className="large-3 columns">
            <AccountSidebar />
            <UserSidebar />
          </div>
          <div className="large-9 columns">
            {props.children}
          </div>
        </div>
    );
};

UserProfile.propTypes = {
  children: PropTypes.element
};

export default UserProfile;
