import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProvisionPage = () => {
    return (
      <div>
        <h2>Project Name</h2>
        <input type="text" id="input-project_name" placeholder="projectname.servername" pattern="([a-z0-9]){2,15}\.([a-z0-9]){2,15}" title="Format needed: nombreproyecto.nombreservidor" autoComplete="off" required />
      </div>
    );
};

export default ProvisionPage;
