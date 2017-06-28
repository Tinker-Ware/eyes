import { fromJS } from "immutable";
import Options from "./Options";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import GithubService from "../GithubService";

const Repositories = ( {applicationAppState, setActiveStep, setRepo, removeRepo, repositoriesOptions, repositories, userAppState, repositoryAppState, requestRepositoryAccess, setShowRepositories, requestUserRepositories, setRepository, setActiveConfigurationStep} ) => {
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
        if(status)
          if(repositoryAppState.get("integration")){
            setShowRepositories(fromJS({
              show: true
            }));
            repositoryAppState.get("integration") && !repositoryAppState.get("repositories") ?
              requestUserRepositories(fromJS({
                "userName": repositoryAppState.get("integration").toJS().username,
                "authorization": userAppState.get("user_session").toJS().token})):"";
          }
          else {
            let win = window.open("https://github.com/login/oauth/authorize?access_type=online&client_id="+process.env.INTEGRATIONS.GITHUB.CLIENTID+"&response_type=cod&state=github&scope=user%3Aemail+repo","Github Oauth","height=600,width=450");
            if (win) win.focus();
          }
        else
          setShowRepositories(fromJS({
            show: false
          }));
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
  const RepositoryConfiguration = () => {
    switch (applicationAppState.get("active_configuration_step")) {
      case "github":
        return (<GithubService
            enable={applicationAppState.get("active_configuration_step")?true:false}
            handleClose={handleShowRepository}
            repositoryAppState={repositoryAppState}
            requestRepositoryAccess={requestRepositoryAccess}
            requestUserRepositories={requestUserRepositories}
            setRepository={setRepository}
            userAppState={userAppState}
                />);
      default:
        break;
    }
  };
  return (
    <div className="align-center steps">
      <p className="align-center title">{"Select your project repository (Optional)"}</p>
      {RepositoryConfiguration()}
      <Options
          handleChange={handleChangeRepository}
          handleConfigure={handleShowRepository}
          options={repositoriesOptions}
          optionsActives={repositories}
      />
      <div className="pdt-2">
        <RaisedButton
            label={"Previous Step"}
            onTouchTap={()=>setActiveStep(0)}
            primary
            style={style}
        />
        <RaisedButton
            label={"Next Step"}
            onTouchTap={()=>setActiveStep(2)}
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
  setShowRepositories: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default Repositories;
