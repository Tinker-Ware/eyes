import { fromJS } from "immutable";
import cookie from "react-cookie";
import GithubService from "../GithubService";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const Repositories = ( {applicationAppState, setActiveStep, setRepo, removeRepo, repositoriesOptions, repositories, userAppState, repositoryAppState, requestRepositoryAccess, requestUserRepositories, setRepository, setActiveConfigurationStep} ) => {
  const style = {
   margin: 12,
  };
  const handleChangeRepository = (repository, insert) => {
    if(insert){
      setRepo(fromJS({
        repository: repository
      }));
      handleChangeStatusRepositories(repository, true);
    }else{
      removeRepo(fromJS({
        repository: repository
      }));
      handleChangeStatusRepositories(repository, false);
    }
  };
  const handleChangeStatusRepositories = (repository, status) => {
    switch (repository) {
      case "github":
        if(!repositoryAppState.get("integration")){
          let win = window.open("https://github.com/login/oauth/authorize?access_type=online&client_id="+process.env.INTEGRATIONS.GITHUB.CLIENTID+"&response_type=cod&state=github&scope=user%3Aemail+repo","Github Oauth","height=600,width=450");
          if (win) win.focus();
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
        break;
      default:
        break;
    }
  };
  const handleShowRepository = (e, remove) => {
    if(e)
      e.stopPropagation();
    if(remove)
      setActiveConfigurationStep(fromJS({
        "active_configuration_step": ""}));
    else
      setActiveConfigurationStep(fromJS({
        "active_configuration_step": "github"}));
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{"(Optional) Select your project repository"}</p>
      {applicationAppState.get("active_configuration_step")=="github"?
        <GithubService
            enable={applicationAppState.get("active_configuration_step")?true:false}
            handleClose={handleShowRepository}
            repositoryAppState={repositoryAppState}
            requestRepositoryAccess={requestRepositoryAccess}
            requestUserRepositories={requestUserRepositories}
            setRepository={setRepository}
            userAppState={userAppState}
        />:""
      }
      <Options
          handleChange={handleChangeRepository}
          handleConfigure={handleShowRepository}
          options={repositoriesOptions}
          optionsActives={repositories}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Previous Step"}
            onTouchTap={()=>setActiveStep(1)}
            primary
            style={style}
        />
        <RaisedButton
            label={"Next Step"}
            onTouchTap={()=>setActiveStep(3)}
            primary
            style={style}
        />
      </div>
    </div>
  );
};

Repositories.propTypes = {
  applicationAppState: PropTypes.object.isRequired,
  removeRepo: PropTypes.func.isRequired,
  repositories: PropTypes.object.isRequired,
  repositoriesOptions: PropTypes.object.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  requestRepositoryAccess: PropTypes.func.isRequired,
  requestUserRepositories: PropTypes.func.isRequired,
  setActiveConfigurationStep: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  setRepo: PropTypes.func.isRequired,
  setRepository: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default Repositories;
