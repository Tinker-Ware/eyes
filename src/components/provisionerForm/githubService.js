import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const githubUserApi = require("../../api/githubUserApi");
const githubUserReposApi = require("../../api/githubUserReposApi");

const GithubService = ( {repositoryAppState, setGitHubUserName, setGitHubRepositoryName} ) => {
    const handleGithubLogin = (e) => {
        if(e.target.text != "Log out"){
            setGitHubUserName(githubUserApi.getGithubUser()[0].username);
        }else{
            setGitHubUserName('');
            setGitHubRepositoryName('');
        }
    };
    const handleGithubRepos = (e) => {
        setGitHubRepositoryName(e.target.parentNode.id);
    };
    const optionsRepositoryList = (repositoryAppState.get('user_name')) ? <a href="#" data-type="github" className="button success radius btn-config"><i className="step fi-widget"></i> Show/Hide Repositories</a> : '';
    const repositoryList = (repositoryAppState.get('user_name')) ? githubUserReposApi.getAllUserRepos().map((value, index) => 
        <div className="large-12 medium-12 small-12 columns" key={index}>
            <div className="switch" id={value.fullName}>
                <input className="switch-input" onClick={handleGithubRepos} id={index} type="radio" name="repositorySwitch" />
                <label className="switch-paddle" htmlFor={index}>
                    <span className="show-for-sr">{value.fullName}</span>
                    <span className="switch-active" aria-hidden="true">Yes</span>
                    <span className="switch-inactive" aria-hidden="true">No</span>
                </label>
            </div>
            <div className="switch-description">
                <span>{value.fullName}</span>
            </div>
        </div> ) : '';
    return (
        <div className="row" data-magellan-destination="connect-service" id="connect-service">
          <h2><i className="step fi-share"></i> Connect Service(s)</h2>
          <div className="large-12 medium-12 small-12 columns">
            <ul className="selection-table" data-name="GitHub" data-type="connect-service" data-id="0">
              <li className="bullet-item">
                <img className="GitHub" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img>
                <span id="githubUser">
                    {(repositoryAppState.get('user_name')) ? 'Logged as ' + repositoryAppState.get('user_name'):''}
                </span>
                <a href="#" onClick={handleGithubLogin} data-type="github" className="button radius btn-connect">
                    {(repositoryAppState.get('user_name')) ? 'Log out':'Log in with Github'}
                </a>
                {optionsRepositoryList}
                <h3 id="firstModalTitle">Your Repositories.</h3>
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
    repositoryAppState: PropTypes.object.isRequired
};

export default GithubService;
