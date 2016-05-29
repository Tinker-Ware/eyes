import {Map, fromJS} from 'immutable';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DigitalOceanService = ( {serverProviderAppState, setServerProvider} ) => {
  const handleDigitalOceanLogin = (e) => {
    if(e.target.text != "Log out"){
      setServerProvider({
        name: 'digital_ocean',
        token: '77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3'
      });
    }else{
      setServerProvider({
        name: '',
        token: ''
      });
    }
  };
  return (
    <div className="large-6 medium-6 small-12 columns">
      <ul className="selection-table">
        <li className="bullet-item">
          <a
            className="button radius btn-connect"
            href="#"
            onClick={handleDigitalOceanLogin}>
            <img
              className="DigitalOcean" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img>
            {(serverProviderAppState.get('server_provider')) ? 
                (serverProviderAppState.get('server_provider').get('name')) ?
                  'Log out' : 'Log in with Digital Ocean' 
                :'Log in with Digital Ocean'}
          </a>
        </li>
      </ul>
    </div>
  );
};

DigitalOceanService.propTypes = {
  serverProviderAppState: PropTypes.object.isRequired,
  setServerProvider: PropTypes.func.isRequired
};

export default DigitalOceanService;
