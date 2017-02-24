import React, {PropTypes} from "react";
import {fromJS} from "immutable";
import cookie from "react-cookie";
import {Card, CardActions, CardHeader, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import {List} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";

const styles = {
  block: {
    maxWidth: 250,
  },
  cardText: {
    height: 400,
    overflowY: scroll,
    overflowX: "hidden",
  },
  radioButton: {
    marginBottom: 16,
    marginLeft: 16
  },
};

const GithubService = ( {repositoryAppState, userAppState, setRepository, setIntegracion, requestRepositoryAccess, requestUserRepositories, setShowRepositories} ) => {
  if(userAppState.get("user_session")){
    let timer;
    timer = setInterval(function(){
      if(cookie.load("github_oauth")){
        requestRepositoryAccess(fromJS({
          "authorization": userAppState.get("user_session").toJS().token,
          "oauth_request": {
            "user_id": userAppState.get("user_session").toJS().id,
            "code": cookie.load("github_oauth").code,
            "state": cookie.load("github_oauth").state
          }
        }));
        cookie.remove("github_oauth", { path: "/" });
        clearInterval(timer);
      }
    }, 1000);
  }
  const handleGithubLogin = (e, isConnected) => {
    e.preventDefault();
    if(!isConnected){
      let win = window.open("https://github.com/login/oauth/authorize?access_type=online&client_id="+process.env.INTEGRATIONS.GITHUB.CLIENTID+"&response_type=cod&state=github&scope=user%3Aemail+repo","Github Oauth","height=600,width=450");
      if (win) win.focus();
    }else{
      setIntegracion(fromJS({
        integration:""}));
      setRepository(fromJS({
        repository:""}));
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
    if (!repositoryAppState.get("show_repositories")){
      setShowRepositories(fromJS({
        show: true
      }));
      repositoryAppState.get("integration") && !repositoryAppState.get("repositories") ?
        requestUserRepositories(fromJS({
          "userName": repositoryAppState.get("integration").toJS().username,
          "authorization": userAppState.get("user_session").toJS().token})):"";
    }else{
      setShowRepositories(fromJS({
        show: false
      }));
    }
  };
  const repositoryList =
    repositoryAppState.get("integration") && repositoryAppState.get("repositories") ?
      <RadioButtonGroup
          defaultSelected={repositoryAppState.get("repository")?repositoryAppState.get("repository").toJS().name:""}
          name="repositories"
      >
        {repositoryAppState.get("repositories").toJS().map((value, index)=>
          <RadioButton
              key={index}
              label={value.full_name}
              onClick={(event)=>handleGithubRepos(event, value.full_name)}
              style={styles.radioButton}
              value={value.full_name}
          />
        )}
      </RadioButtonGroup> : "";
  return (
    <div className="small-12 medium-6 large-6 columns">
      <Card expanded={repositoryAppState.get("show_repositories")}>
        <CardHeader
            avatar={<FontIcon className="icon icon-github"/>}
            subtitle="Repository"
            title="Github"
        />
        <CardActions>
          <FlatButton
              label={repositoryAppState.get("integration")? "Connected":"Connect Github"}
              onClick={(event)=>handleGithubLogin(event, (repositoryAppState.get("integration"))? true : false)}
              primary
          />
          <FlatButton
              disabled={repositoryAppState.get("integration")?false:true}
              label={repositoryAppState.get("show_repositories")?"Hide Repositories":"Show Repositories"}
              onClick={handleGithubConfigurationEnable}
          />
        </CardActions>
        <CardText
            expandable
            style={styles.cardText}
        >
          <div className="row repository-list">
            <List>
              <Subheader>{"Select a repository"}</Subheader>
            </List>
            {repositoryList}
          </div>
        </CardText>
      </Card>
    </div>
  );
};

GithubService.propTypes = {
  repositoryAppState: PropTypes.object.isRequired,
  requestRepositoryAccess: PropTypes.func.isRequired,
  requestUserRepositories: PropTypes.func.isRequired,
  setIntegracion: PropTypes.func.isRequired,
  setRepository: PropTypes.func.isRequired,
  setShowRepositories: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default GithubService;
