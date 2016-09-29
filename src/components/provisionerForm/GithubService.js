import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { fromJS } from 'immutable';
import cookie from 'react-cookie';

const GithubService = ( {repositoryAppState, userAppState, setRepository, setIntegracion, requestRepositoryAccess, requestUserRepositories, setShowRepositories} ) => {
  if(userAppState.get('user_session')){
    let timer; 
    timer = setInterval(function(){
      if(cookie.load('github_oauth')){
        requestRepositoryAccess(fromJS({
          "authorization": userAppState.get('user_session').toJS().token,
          "oauth_request": {
            "user_id": userAppState.get('user_session').toJS().id,
            "code": cookie.load('github_oauth').code,
            "state": cookie.load('github_oauth').state
          }
        }));
        cookie.remove('github_oauth');
        clearInterval(timer);
      }
    }, 1000);
  }
  const handleGithubLogin = (e) => {
    e.preventDefault();
    if(!e.target.text.includes("Connected")){
      let win = window.open('http://github.com/login/oauth/authorize?access_type=online&client_id=cfc461f8cf0dc4de566d&response_type=cod&state=github&scope=user%3Aemail+repo', 'Github Oauth', 'height=600,width=450');
      if (win) win.focus();
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
  const handleGithubRepos = (e, full_name) => {
    setRepository(fromJS({
      repository: {
        provider: "github",
        name: full_name
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
          "userName": repositoryAppState.get('integration').toJS().username,
          "authorization": userAppState.get('user_session').toJS().token})) : 
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
             'Hide Repositories' : 'Select Repository'}</a> : '';
  const repositoryList =
    (repositoryAppState.get('integration')) && repositoryAppState.get('repositories') ?
      repositoryAppState.get('repositories').toJS().map((value, index) => 
        <div
          className={repositoryAppState.get('show_repositories')? "large-12 medium-12 small-12 columns" : "large-12 medium-12 small-12 columns hide"}
          key={index}>
          <div
            className="switch large">
            <input className="switch-input"
              id={index}
              type="radio"
              onClick={(event)=>handleGithubRepos(event, value.full_name)}
              name="exampleSwitch"/>
            <label
              className="switch-paddle"
              htmlFor={index}>
              <span className="show-for-sr">Do you like me?</span>
              <span
                className="switch-active"
                aria-hidden="true">Yes
              </span>
              <span
                className="switch-inactive"
                aria-hidden="true">No
              </span>
            </label>
          </div>
          <div className="switch-description">
              <span>{value.full_name}</span>
          </div>
        </div> ) : '';
  return (
    <div className="large-6 medium-6 small-12 columns">
      <ul className="selection-table">
        <li className="bullet-item">
          <Link
            href="#"
            onClick={handleGithubLogin}
            className="button radius btn-connect">
              <img
                className="GitHub"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              {(repositoryAppState.get('integration')) ? 
                'Connected: '+repositoryAppState.get('integration').toJS().username : 'Connect Github'}
          </Link>
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
