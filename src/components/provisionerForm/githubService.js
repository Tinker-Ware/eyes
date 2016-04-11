import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const UserApi = require("../../api/githubUserApi");

const GithubService = ( {repositoryAppState, setGitHubUserName} ) => {
    const handleClick = (e) => {
        if(e.target.text != "Log out"){
            setGitHubUserName(UserApi.getGithubUser()[0].username);
        }else{
            setGitHubUserName('');
        }
    };
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
                <a href="#" onClick={handleClick} data-type="github" className="button radius btn-connect">
                    {(repositoryAppState.get('user_name')) ? 'Log out':'Log in with Github'}
                </a>
                <a href="#" data-type="github" className="button success radius btn-config hide"><i className="step fi-widget"></i></a>
              </li>
            </ul>
          </div>
        </div>
    );
};

GithubService.propTypes = {
    setGitHubUserName: PropTypes.func.isRequired,
    repositoryAppState: PropTypes.object.isRequired
};

export default GithubService;
