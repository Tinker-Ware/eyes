import { fromJS } from "immutable";
import { List } from "material-ui/List";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import ActionStarts from "material-ui/svg-icons/action/stars";
import UnCheckedIcon from "material-ui/svg-icons/toggle/check-box-outline-blank";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import React from "react";
import RefreshIndicator from "material-ui/RefreshIndicator";
import Subheader from "material-ui/Subheader";

const styles = {
  body: {
    padding: "1em"
  },
  button: {
    padding: 12,
  },
  labelStyle: {
    color: "#536a70"
  },
  radioButton: {
    marginBottom: 16,
    marginLeft: 16
  },
  refresh: {
    display: "inline-block",
    position: "relative",
  },
  title: {
    color: "#536a70"
  },
};

const GithubService = ( {enable, handleClose, repositoryAppState, setRepository, requestUserRepositories, userAppState} ) => {
  if(repositoryAppState.get("integration")){
    repositoryAppState.get("integration") && !repositoryAppState.get("repositories") ?
      requestUserRepositories(fromJS({
        "userName": repositoryAppState.get("integration").toJS().username,
        "authorization": userAppState.get("user_session").toJS().token})):"";
  }
  const handleGithubRepos = (repository) => {
    setRepository(fromJS({
      repository: {
        provider: "github",
        name: repository.full_name,
        ssh_url: repository.ssh_url
      }
    }));
  };
  const actions = [
      <FlatButton
          icon={<FontIcon className="icon icon-cancel" />}
          key={1}
          label={"Close"}
          onTouchTap={(e)=>handleClose(e, true)}
          primary
      />
    ];
  const repositoryList =
    repositoryAppState.get("integration") && repositoryAppState.get("repositories") ?
      (
        <RadioButtonGroup
            defaultSelected={repositoryAppState.get("repository")?repositoryAppState.get("repository").toJS().name:""}
            name="repositories"
        >
          {repositoryAppState.get("repositories").toJS().map((value, index)=>
            <RadioButton
                checkedIcon={<ActionStarts style={{color: "#2fa9b6"}} />}
                key={index}
                label={value.full_name}
                labelStyle={styles.labelStyle}
                onClick={()=>handleGithubRepos(value)}
                style={styles.radioButton}
                uncheckedIcon={<UnCheckedIcon style={{fill: "#536a70"}} />}
                value={value.full_name}
            />
          )}
        </RadioButtonGroup>
      ):(
        <RefreshIndicator
            left={10}
            size={40}
            status="loading"
            style={styles.refresh}
            top={0}
        />
      );
  return (
    <Dialog
        actions={actions}
        actionsContainerStyle={styles.button}
        autoScrollBodyContent
        modal={false}
        onRequestClose={(e)=>handleClose(e, true)}
        open={enable}
        title="Repositories"
        titleStyle={styles.title}
    >
      <div className="row repository-list">
        <List>
          <Subheader>{"Select a repository"}</Subheader>
        </List>
        {repositoryList}
      </div>
    </Dialog>
  );
};

GithubService.propTypes = {
  enable: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  repositoryAppState: PropTypes.object.isRequired,
  requestUserRepositories: PropTypes.func.isRequired,
  setRepository: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default GithubService;
