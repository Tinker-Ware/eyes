import { Link } from "react-router";
import React from "react";

const AccountSidebar = () => {
  return (
    <div>
      <nav>
        <h3>
          {"Account"}
        </h3>
        <ul>
          <li>
            <Link to="#">
              {"Account"}
            </Link></li>
          <li>
            <Link to="#">
              {"Billing"}
            </Link>
          </li>
          <li>
            <Link to="#">
              {"Team"}
            </Link>
          </li>
          <li>
            <Link to="#">
              {"Project/Services"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AccountSidebar;
