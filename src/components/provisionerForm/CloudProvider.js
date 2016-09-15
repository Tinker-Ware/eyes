import {fromJS} from 'immutable';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import cookie from 'react-cookie';

const CloudProvider = ( {clearCloudProviderSSHKeys, cloudProviderAppState, userAppState, requestCloudProviderAccess, setCloudProvider} ) => {
  // var timer = setInterval(function() {   
	// 	if(cookie.load('github_oauth')) {
	// 		clearInterval(timer);
  //     // requestCloudProviderAccess(fromJS({
  //     //   authorization: userAppState.get('user_session').toJS().token
  //     // }));
	// 	}  
  // }, 1000); 
  const handleDigitalOceanLogin = (e) => {
    e.preventDefault();
    if(e.target.text != "Log out"){
      let win = window.open('https://cloud.digitalocean.com/v1/oauth/authorize?client_id=da77533a5c6b5449654de8e13a6ff412341a8e58721e5a7e519dda4de9046244&redirect_uri=http://localhost:3000/oauth/digitalocean&response_type=code&scope=read+write', 'Digital Ocean Oauth', 'height=600,width=450');
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
