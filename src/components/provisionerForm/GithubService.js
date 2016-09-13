import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { fromJS } from 'immutable';

const GithubService = ( {repositoryAppState, userAppState, setRepository, setIntegracion, requestRepositoryAccess, requestUserRepositories, setShowRepositories} ) => {
  const handleGithubLogin = (e) => {
    e.preventDefault();
    
    if(e.target.text != "Log out"){
      // Open a new window
      const win = window.open('http://github.com/login/oauth/authorize?access_type=online&client_id=e0b908187efc0692a83a&response_type=code&scope=user%3Aemail+repo&state=SGwLYRYSoB', 'name', 'height=600,width=450');
      if (win) win.focus();

      const pollTimer = window.setInterval(() => {
        try {
          if (!!win && win.location.href.indexOf('callback') !== -1) {
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
      setIntegracion(fromJS({
        integration: ''
      }));
      setRepository(fromJS({
        repository: ''
      }));
      setShowRepositories(fromJS({
        show: false
      }));
    }
  };
  const handleGithubRepos = (e) => {
    e.preventDefault();
    setRepository(fromJS({
      repository: {
        provider: "github",
        name: e.target.parentNode.id
      }
    }));
  };
  const handleGithubConfigurationEnable = (e) => {
    e.preventDefault();
    if (!repositoryAppState.get('show_repositories')){
      setShowRepositories(fromJS({
        show: true
      }));
      repositoryAppState.get('integration') && !repositoryAppState.get('repositories') ?
        requestUserRepositories(fromJS({
          userName: repositoryAppState.get('integration').toJS().username,
          accessToken: repositoryAppState.get('integration').toJS().access_token})) : 
        '';
    }else{
      setShowRepositories(fromJS({
        show: false
      }));
    }
  };
  const optionsRepositoryList = 
    (repositoryAppState.get('integration')) ? 
      <a
        href="#"
        onClick={handleGithubConfigurationEnable}
        className="button success radius btn-config">
          <i className="step fi-widget" />
           {repositoryAppState.get('show_repositories') ?
             'Hide Your Repositories' : 'Show Your Repositories'}</a> : '';
  const repositoryList =
    (repositoryAppState.get('integration')) && repositoryAppState.get('repositories') ?
      repositoryAppState.get('repositories').toJS().map((value, index) => 
        <div
          className={repositoryAppState.get('show_repositories')? "large-12 medium-12 small-12 columns" : "large-12 medium-12 small-12 columns hide"}
          key={index}>
            <div
              className="switch"
              id={value.name}>
                <input
                  className="switch-input"
                  onClick={handleGithubRepos}
                  id={index}
                  type="radio"
                  name="repositorySwitch" />
                <label
                  className="switch-paddle"
                  htmlFor={index}>
                    <span className="show-for-sr">{value.name}</span>
                    <span
                      className="switch-active"
                      aria-hidden="true">Yes</span>
                    <span
                      className="switch-inactive"
                      aria-hidden="true">No</span>
                </label>
            </div>
            <div className="switch-description">
                <span>{value.name}</span>
            </div>
        </div> ) : '';
  return (
    <div className="large-6 medium-6 small-12 columns">
      <ul className="selection-table">
        <li className="bullet-item">
          <a
            href="#"
            onClick={handleGithubLogin}
            className="button radius btn-connect">
              <img
                className="GitHub"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              {(repositoryAppState.get('integration')) ? 
                'Log out' : 'Log in with Github'}
          </a>
          {optionsRepositoryList}
          {repositoryAppState.get('show_repositories') && (repositoryAppState.get('integration')) ? 
            <h5 id="firstModalTitle">Select a repository.</h5> : ''}
          <div className="row">
              {repositoryList}
          </div>
        </li>
      </ul>
    </div>
  );
};

GithubService.propTypes = {
  setRepository: PropTypes.func.isRequired,
  setIntegracion: PropTypes.func.isRequired,
  setShowRepositories: PropTypes.func.isRequired,
  requestRepositoryAccess: PropTypes.func.isRequired,
  requestUserRepositories: PropTypes.func.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default GithubService;