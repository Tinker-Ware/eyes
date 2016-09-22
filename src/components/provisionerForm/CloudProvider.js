import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { fromJS } from 'immutable';
import cookie from 'react-cookie';

const CloudProvider = ( {clearCloudProviderSSHKeys, cloudProviderAppState, userAppState, requestCloudProviderAccess, setCloudProvider} ) => {
  if(userAppState.get('user_session')){
    let timer;
    timer = setInterval(function(){
      if(cookie.load('digitalocean_oauth')) {
        requestCloudProviderAccess(fromJS({
          "authorization": userAppState.get('user_session').toJS().token,
          "oauth_request": {
            "user_id": userAppState.get('user_session').toJS().id,
            "code": cookie.load('digitalocean_oauth').code
          }
        }));
        cookie.remove('digitalocean_oauth');
        clearInterval(timer);
      }  
    }, 1000);
  }
  const handleDigitalOceanLogin = (e) => {
    e.preventDefault();
    if(e.target.text != "Log out"){
      let win = window.open('https://cloud.digitalocean.com/v1/oauth/authorize?client_id=f3137238caf7470b2c976a2338d36e87b0c6a8112c0c1e32473a81af59ee7c54&redirect_uri=http://provision.tinkerware.io/oauth/digitalocean&response_type=code&scope=read+write', 'Digital Ocean Oauth', 'height=600,width=850');
      if (win) win.focus();
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
          <Link
            className="button radius btn-connect"
            href="#"
            onClick={handleDigitalOceanLogin}>
            <img
              className="DigitalOcean" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            {(cloudProviderAppState.get('cloud_provider')) ? 
              'Log out' : 'Log in as with Digital Ocean'}
          </Link>
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
