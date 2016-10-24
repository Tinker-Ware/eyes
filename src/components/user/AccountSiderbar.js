import React from 'react';
import { Link } from 'react-router';

const AccountSidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="#">Account</Link></li>
          <li><Link to="#">Billing</Link></li>
          <li><Link to="#">Team</Link></li>
          <li><Link to="#">Project/Services</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AccountSidebar;
