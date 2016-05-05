import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const githubUserApi = require("../../api/githubUserApi");
const githubUserReposApi = require("../../api/githubUserReposApi");

const GithubService = ( {repositoryAppState, setGitHubUserName, setGitHubRepositoryName, setGithubConfigurationEnable} ) => {
  const handleGithubLogin = (e) => {
    if(e.target.text != "Log out"){
      setGitHubUserName(githubUserApi.getGithubUser()[0].user_name);
    }else{
      setGitHubUserName('');
      setGitHubRepositoryName('');
    }
  };
  const handleGithubRepos = (e) => {
    setGitHubRepositoryName(e.target.parentNode.id);
  };
  const handleGithubConfigurationEnable = (e) => {
    repositoryAppState.get('github_configuration_enable') ? setGithubConfigurationEnable(false) : setGithubConfigurationEnable(true);
  };
  const optionsRepositoryList = 
    (repositoryAppState.get('github_user_name')) ? 
      <a
        href="#"
        onClick={handleGithubConfigurationEnable}
        className="button success radius btn-config">
          <i className="step fi-widget"></i>
           {repositoryAppState.get('github_configuration_enable') ?
             'Hide Your Repositories' : 'Show Your Repositories'}</a> : '';
  const repositoryList =
    (repositoryAppState.get('github_user_name')) ?
      githubUserReposApi.getAllUserRepos().map((value, index) => 
        <div
          className={repositoryAppState.get('github_configuration_enable')? "large-12 medium-12 small-12 columns" : "large-12 medium-12 small-12 columns hide"}
          key={index}>
            <div
              className="switch"
              id={value.full_name}>
                <input
                  className="switch-input"
                  onClick={handleGithubRepos}
                  id={index}
                  type="radio"
                  name="repositorySwitch" />
                <label
                  className="switch-paddle"
                  htmlFor={index}>
                    <span className="show-for-sr">{value.full_name}</span>
                    <span
                      className="switch-active"
                      aria-hidden="true">Yes</span>
                    <span
                      className="switch-inactive"
                      aria-hidden="true">No</span>
                </label>
            </div>
            <div className="switch-description">
                <span>{value.full_name}</span>
            </div>
        </div> ) : '';
  return (
    <div
      className="row"
      id="connect-service">
      <h2>
        <i className="step fi-share"></i>
         Connect Service(s)
      </h2>
      <div className="large-12 medium-12 small-12 columns">
        <ul className="selection-table">
          <li className="bullet-item">
            <img
              className="GitHub"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img>
            <span id="githubUser">
              {(repositoryAppState.get('github_user_name')) ? 
                'Logged as ' + repositoryAppState.get('github_user_name') : ''}
            </span>
            <a
              href="#"
              onClick={handleGithubLogin}
              className="button radius btn-connect">
                {(repositoryAppState.get('github_user_name')) ? 
                  'Log out' : 'Log in with Github'}
            </a>
            {optionsRepositoryList}
            {repositoryAppState.get('github_configuration_enable') && (repositoryAppState.get('github_user_name')) ? 
              <h3 id="firstModalTitle">Your Repositories.</h3> : ''}
            <div className="row">
                {repositoryList}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

GithubService.propTypes = {
  setGitHubUserName: PropTypes.func.isRequired,
  setGitHubRepositoryName: PropTypes.func.isRequired,
  setGithubConfigurationEnable: PropTypes.func.isRequired,
  repositoryAppState: PropTypes.object.isRequired
};

export default GithubService;
