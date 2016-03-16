import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Profile from './user/Profile';
import AccountSidebar from "./user/AccountSidebar";
import UserSidebar from "./user/UserSidebar";

const UserProfile = () => {
    return (
        <div>
          <AccountSidebar />
          <UserSidebar />
          <Profile />
        </div>
    );
};
export default UserProfile;
