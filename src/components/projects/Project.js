import {fromJS} from "immutable";
import {List, ListItem} from "material-ui/List";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import Divider from "material-ui/Divider";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React, {PropTypes} from "react";

const style = {
  button: {
    margin: 12,
  },
  chip: {
    margin: 4,
  },
  container: {
    position: "fixed",
  },
  refresh: {
    display: "inline-block",
    position: "relative",
  },
  toolbar: {
    margin: "-1em -1em 3em -1em",
  },
  toolbarTitle: {
    marginLeft: "1em"
  }
};

const Project = ({deployProject, projectsAppState, userAppState}) => {
  const handleProjectDeploy = () => {
    deployProject(
      fromJS({
        "authorization": userAppState.get("user_session").toJS().token,
        "project_id": projectsAppState.getIn("project","id"),
        "user_id": projectsAppState.getIn("project","user_id")
      })
    );
  };
  return (
    <div className="card">
      <Toolbar style={style.toolbar}>
        <ToolbarGroup firstChild>
          <FontIcon className="icon icon-project"/>
          <ToolbarTitle
              style={style.toolbarTitle}
              text="Project"
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <RaisedButton
              href={projectsAppState.get("user_project")?"/project/edit/"+projectsAppState.get("user_project").toJS().id:"#"}
              icon={<FontIcon className="icon icon-edit" />}
              label={"Edit"}
              primary
              style={style.button}
          />
          <RaisedButton
              href={"#"}
              icon={<FontIcon className="icon icon-deploy" />}
              label={"Deploy"}
              onClick={handleProjectDeploy}
              primary
              style={style.button}
          />
          <RaisedButton
              href={projectsAppState.get("user_project_dev_environment")?projectsAppState.get("user_project_dev_environment").toJS()[0].path:"#"}
              icon={<FontIcon className="icon icon-cloud-download" />}
              label={"Download"}
              primary
              style={style.button}
          />
        </ToolbarGroup>
      </Toolbar>
      <List>
        <ListItem
            disabled
            primaryText={projectsAppState.get("user_project")?projectsAppState.get("user_project").toJS().project_name:""}
            secondaryText={"Modify each project as you need"}
        />
      </List>
      {/* <div className="small-12 medium-6 large-6 columns">
        <img
            className="project-example"
            src={require("../../img/project-example.png")}
        />
      </div> */}
      <div className="small-12 medium-12 large-12 columns">
        <List>
          <ListItem
              disabled
              primaryText={"Deploy History"}
              secondaryText={"Check the status of each deploy"}
          />
        </List>
        <Divider />
        <List>
          {/* <ListItem
              leftIcon={<FontIcon className="icon icon-deploy"/>}
              primaryText={"ID: 11923"}
              rightIcon={<FontIcon className="icon icon-check"/>}
              secondaryText={"USER: Alfonso"}
          />
          <ListItem
              leftIcon={<FontIcon className="icon icon-deploy"/>}
              primaryText={"ID: 12923"}
              rightIcon={<FontIcon className="icon icon-warning"/>}
              secondaryText={"USER: Antonio"}
          />
          <ListItem
              leftIcon={<FontIcon className="icon icon-deploy"/>}
              primaryText={"ID: 13923"}
              rightIcon={
                <div style={style.container}>
                  <RefreshIndicator
                      left={0}
                      loadingColor={"#777"}
                      size={30}
                      status={"loading"}
                      style={style.refresh}
                      top={0}
                  />
                </div>
              }
              secondaryText={"USER: Alfonso"}
          />
          <ListItem
              leftIcon={<FontIcon className="icon icon-deploy"/>}
              primaryText={"ID: 15923"}
              rightIcon={<FontIcon className="icon icon-check"/>}
              secondaryText={"USER: Javier"}
          /> */}
        </List>
      </div>
      {/* <div className="align-left">
        <RaisedButton
            href="/environment"
            icon={<FontIcon className="icon icon-trigger" />}
            label="Add Trigger"
            primary
            style={style.button}
        />
        <RaisedButton
            href="/users"
            icon={<FontIcon className="icon icon-person-add" />}
            label="Modify Users"
            primary
            style={style.button}
        />
      </div> */}
      <div className="align-right">
        <Chip
            style={style.chip}
        >
          <Avatar icon={<FontIcon className="icon icon-cpu" />} />
          {"CPU: 60 %"}
        </Chip>
        <Chip
            style={style.chip}
        >
          <Avatar icon={<FontIcon className="icon icon-memory-ram" />} />
          {"RAM: 1024 MB"}
        </Chip>
      </div>
    </div>
  );
};

Project.propTypes = {
  deployProject: PropTypes.func.isRequired,
  projectsAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default Project;
