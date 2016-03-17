import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Profile = () => {
    return (
      <div>
        <h2>Profile</h2>
        <img src="http://lorempixel.com/g/200/200/" />
        <h3>Username</h3>
        <div>
          <ul className="user-info">
            <li>
              <span>email@host.com</span>
            </li>
            <li>
              <span>Address</span>
            </li>
            <li>
              <Link to={'/user/id'}>Add/Edit Address</Link>
            </li>
            <li>
              <Link to={'/user/id'}>Edit</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Profile;
