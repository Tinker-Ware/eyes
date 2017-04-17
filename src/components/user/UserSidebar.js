import { Link } from "react-router";
import React from "react";

const UserSidebar = () => {
  return (
    <div>
      <nav>
        <h3>
          {"User"}
        </h3>
        <ul>
          <li>
            <Link to="#">
              {"Profile"}
            </Link>
          </li>
          <li>
            <Link to="#">
              {"Security"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
