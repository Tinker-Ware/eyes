import {fromJS} from 'immutable';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CloudProvider = ( {clearCloudProviderSSHKeys, cloudProviderAppState, userAppState, requestCloudProviderAccess, setCloudProvider} ) => {
  const handleDigitalOceanLogin = (e) => {
    e.preventDefault();
    if(e.target.text != "Log out"){
      requestCloudProviderAccess(fromJS({
        authorization: userAppState.get('user_session').toJS().token
      }));
    }else{
      setCloudProvider(fromJS({
        cloud_provider: ''
      }));
      clearCloudProviderSSHKeys(fromJS({
        cloud_provider_ssh_keys: ''
      }));
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
              className="DigitalOcean" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            {(cloudProviderAppState.get('cloud_provider')) ? 
              'Log out' : 'Log in as with Digital Ocean'}
          </a>
        </li>
      </ul>
    </div>
  );
};

CloudProvider.propTypes = {
  clearCloudProviderSSHKeys: PropTypes.func.isRequired,
  cloudProviderAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired,
  requestCloudProviderAccess: PropTypes.func.isRequired,
  setCloudProvider: PropTypes.func.isRequired
};

export default CloudProvider;
