import {fromJS} from 'immutable';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CloudProvider = ( {clearCloudProviderSSHKeys, cloudProviderAppState, userAppState, requestCloudProviderAccess, setCloudProvider} ) => {
  const handleDigitalOceanLogin = (e) => {
    e.preventDefault();
    if(e.target.text != "Log out"){
      // requestCloudProviderAccess(fromJS({
      //   authorization: userAppState.get('user_session').toJS().token
      // }));
      const win = window.open('https://cloud.digitalocean.com/v1/oauth/authorize?client_id=c12711e557b51b40320cad8fd7c36bffe6333b3029a33d9faac1e1479fcc7e1e&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdigitalocean%2Fdo_callback&response_type=code&scope=read+write', 'Digital Ocean Oauth', 'height=600,width=450');
      if (win) win.focus();

      const pollTimer = window.setInterval(() => {
        try {
          if (!!win && win.location.href.indexOf('/do_callback') !== -1) {
            window.clearInterval(pollTimer);

            // Get the URL hash with your token in it
            const hash = win.location.search;
            win.close();

            // Parse the string hash and convert to object of keys and values
            const result = hash.substring(1)
              .split('&')
              .map(i => i.split('='))
              .reduce((prev, curr) => {
                const next = { ...prev };
                next[curr[0]] = curr[1];
                return next;
              }, {});
                
            // Calculate when the token expires and store in the result object
            result.expires_at = Date.now() + parseInt(hash.expires_in, 10);

            //  TODO: Persist result in sessionStorage here
          }
        } catch (err) {
          // do something or nothing if window still not redirected after login
        }
      }, 100); 
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
