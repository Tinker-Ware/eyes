import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const githubUserApi = require("../../api/githubUserApi");
const githubUserReposApi = require("../../api/githubUserReposApi");

const GithubService = ( {repositoryAppState, setRepository, setIntegracion, setShowRepositories} ) => {
  const handleGithubLogin = (e) => {
    if(e.target.text != "Log out"){
      setIntegracion(githubUserApi.getGithubUser()[0].token);
      setShowRepositories(true);
    }else{
      setIntegracion('');
      setRepository({
        provider: '',
        name: ''
      });
      setShowRepositories(false);
    }
  };
  const handleGithubRepos = (e) => {
    setRepository({
      provider: "github",
      name: e.target.parentNode.id
    });
  };
  const handleGithubConfigurationEnable = (e) => {
    repositoryAppState.get('show_repositories') ? setShowRepositories(false) : setShowRepositories(true);
  };
  const optionsRepositoryList = 
    (repositoryAppState.get('integracion')) ? 
      <a
        href="#"
        onClick={handleGithubConfigurationEnable}
        className="button success radius btn-config">
          <i className="step fi-widget"></i>
           {repositoryAppState.get('show_repositories') ?
             'Hide Your Repositories' : 'Show Your Repositories'}</a> : '';
  const repositoryList =
    (repositoryAppState.get('integracion')) ?
      githubUserReposApi.getAllUserRepos().map((value, index) => 
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
            <a
              href="#"
              onClick={handleGithubLogin}
              className="button radius btn-connect">
                <img
                  className="GitHub"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></img>
                {(repositoryAppState.get('integracion')) ? 
                  'Log out' : 'Log in with Github'}
            </a>
            {optionsRepositoryList}
            {repositoryAppState.get('show_repositories') && (repositoryAppState.get('integracion')) ? 
              <h5 id="firstModalTitle">Select a repository.</h5> : ''}
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
  setRepository: PropTypes.func.isRequired,
  setIntegracion: PropTypes.func.isRequired,
  setShowRepositories: PropTypes.func.isRequired,
  repositoryAppState: PropTypes.object.isRequired
};

export default GithubService;
