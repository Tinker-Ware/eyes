import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AccountSidebar from "./user/AccountSidebar";
import UserSidebar from "./user/UserSidebar";

const UserProfile = (props) => {
    return (
        <div>
          <AccountSidebar />
          <UserSidebar />
          {props.children}
        </div>
    );
};

UserProfile.propTypes = {
  children: PropTypes.element
};

export default UserProfile;
