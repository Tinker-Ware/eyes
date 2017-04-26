import { fromJS } from "immutable";
import { grey400 } from "material-ui/styles/colors";
import { List, ListItem } from "material-ui/List";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import Dialog from "material-ui/Dialog";
import Divider from "material-ui/Divider";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";

const styles = {
  body: {
    padding: 0
  },
  button: {
    margin: 12,
  },
  dialogButton: {
    padding: 12
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

const Project = ({deployProject, requestRedeployProjectServer, deleteProjectServer, projectsAppState, requestProjectDeployServers, setShowProjectDeployServerError, setShowProjectServers, setProjectDeployError, userAppState}) => {
  const handlOpenURL = (url) => {
    window.open(url, "_blank");
  };
  const handleGetDeployServers = (e) => {
    if(projectsAppState.get("project_deploys")){
      requestProjectDeployServers(fromJS({
        "authorization": userAppState.get("user_session").toJS().token,
        "deploy_id": projectsAppState.get("project_deploys").toJS()[e].id,
        "project_id": projectsAppState.getIn(["user_project","id"])
      }));
      handleShowProjectsDeployServers();
    }
  };
  const handleDeleteDeployServers = (deployID, serverID) => {
    if(projectsAppState.get("project_deploys")){
      deleteProjectServer(fromJS({
        "authorization": userAppState.get("user_session").toJS().token,
        "project_id": projectsAppState.getIn(["user_project","id"]),
        "deploy_id": deployID,
        "server_id": serverID
      }));
    }
  };
  const handleSetProjectsDeployServerError = (e, error) => {
    e.stopPropagation();
    setProjectDeployError(
      fromJS({
        project_deploy_server_error: error
      })
    );
    handleShowProjectsDeployServerError();
  };
  const handleShowProjectsDeployServers = () => {
    setShowProjectServers(
      fromJS({
        show_project_servers: !projectsAppState.get("show_project_servers")
      })
    );
  };
  const handleShowProjectsDeployServerError = () => {
    setShowProjectDeployServerError(
      fromJS({
        show_project_server_error: !projectsAppState.get("show_project_server_error")
      })
    );
  };
  const handleProjectDeploy = () => {
    deployProject(
      fromJS({
        "authorization": userAppState.get("user_session").toJS().token,
        "project_id": projectsAppState.getIn(["user_project","id"]),
        "user_id": projectsAppState.getIn(["user_project","user_id"])
      })
    );
  };
  const handleProjectRedeploy = (deployId) => {
    requestRedeployProjectServer(
      fromJS({
        "authorization": userAppState.get("user_session").toJS().token,
        "project_id": projectsAppState.getIn(["user_project","id"]),
        "deploy_id": deployId,
        "user_id": projectsAppState.getIn(["user_project","user_id"])
      })
    );
  };
  const actions = [
    <FlatButton
        icon={<FontIcon className="icon icon-cancel" />}
        key={1}
        label={"Close"}
        onTouchTap={handleShowProjectsDeployServers}
        secondary
    />
  ];
  const errorActions = [
    <FlatButton
        icon={<FontIcon className="icon icon-cancel" />}
        key={1}
        label={"Close"}
        onTouchTap={handleShowProjectsDeployServerError}
        secondary
    />
  ];
  const servers = () => {
    return projectsAppState.get("project_servers")?projectsAppState.get("project_servers").toJS().map((server,index)=>
      <ListItem
          key={index}
          leftIcon={
            <FontIcon className="icon icon-check"/>
          }
          primaryText={"IP: "+server.networks.v4[0].ip_address}
          rightIconButton={
            <IconMenu iconButtonElement={
                <IconButton
                    tooltipPosition="bottom-left"
                    touch
                >
                  <MoreVertIcon color={grey400} />
                </IconButton>
              }
            >
              <MenuItem onClick={() => handleProjectRedeploy(server.deploy_id)}>{"Redeploy server"}</MenuItem>
              <MenuItem onClick={() => handlOpenURL("http://"+server.networks.v4[0].ip_address)}>{"Show Server"}</MenuItem>
              <MenuItem onClick={() => handleDeleteDeployServers(server.deploy_id, server.id)}>{"Delete"}</MenuItem>
            </IconMenu>
          }
          secondaryText={"Provider: "+server.provider}
      />
    ):"";
  };
  const deploys = () => {
    return projectsAppState.get("project_deploys")?projectsAppState.get("project_deploys").toJS().map((deploy,index)=>
        <TableRow key={index}>
          <TableRowColumn>
            <FontIcon className="icon icon-deploy"/>
          </TableRowColumn>
          <TableRowColumn>
            {index+1}
          </TableRowColumn>
          <TableRowColumn>
            {new Date(deploy.deployed_at).toLocaleDateString()}
          </TableRowColumn>
          <TableRowColumn>
            {deploy.status}
          </TableRowColumn>
          <TableRowColumn>
            {(deploy.status == "Failed")?
              <FontIcon
                  className="icon icon-cancel"
                  onClick={(event) => handleSetProjectsDeployServerError(event, deploy.note? deploy.note:"")}
              />
            :""}
          </TableRowColumn>
        </TableRow>
      ):"";
  };
  return (
    <div className="card">
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup firstChild>
          <FontIcon className="icon icon-project"/>
          <ToolbarTitle
              style={styles.toolbarTitle}
              text="Project Information"
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton
              href={projectsAppState.get("user_project")?"/projects/":"#"}
              icon={<FontIcon className="icon icon-box" />}
              label={"Show Projects"}
              primary
              style={styles.button}
          />
          <ToolbarSeparator />
          {/* <RaisedButton
              href={projectsAppState.get("user_project")?"/project/edit/"+projectsAppState.get("user_project").toJS().id:"#"}
              icon={<FontIcon className="icon icon-edit" />}
              label={"Edit"}
              primary
              style={styles.button}
          /> */}
          <RaisedButton
              href={"#"}
              icon={<FontIcon className="icon icon-deploy" />}
              label={"Deploy"}
              onClick={handleProjectDeploy}
              primary
              style={styles.button}
          />
          <RaisedButton
              href={projectsAppState.get("user_project_dev_environment")?projectsAppState.get("user_project_dev_environment").toJS()[0].path:"#"}
              icon={<FontIcon className="icon icon-cloud-download" />}
              label={"Download"}
              primary
              style={styles.button}
          />
        </ToolbarGroup>
      </Toolbar>
      <Dialog
          actions={actions}
          actionsContainerStyle={styles.dialogButton}
          autoScrollBodyContent
          bodyStyle={styles.body}
          modal={false}
          onRequestClose={handleShowProjectsDeployServers}
          open={projectsAppState.get("show_project_servers")?true:false}
          title="Your Deployed Servers"
      >
        {servers()}
      </Dialog>
      <Dialog
          actions={errorActions}
          actionsContainerStyle={styles.dialogButton}
          autoScrollBodyContent
          modal={false}
          onRequestClose={handleShowProjectsDeployServerError}
          open={projectsAppState.get("show_project_server_error")?true:false}
          title="Deployed Server Error"
      >
        <p>{projectsAppState.get("project_deploy_server_error")?projectsAppState.get("project_deploy_server_error"):"No error registered!"}</p>
      </Dialog>
      <List>
        <ListItem
            disabled
            primaryText={projectsAppState.get("user_project")?projectsAppState.get("user_project").toJS().project_name:""}
            secondaryText={"Modify each project as you need"}
        />
      </List>
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
          <Table
              onCellClick={handleGetDeployServers}
          >
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>{"Deploy"}</TableHeaderColumn>
                <TableHeaderColumn>{"#"}</TableHeaderColumn>
                <TableHeaderColumn>{"Deployed At"}</TableHeaderColumn>
                <TableHeaderColumn>{"Status"}</TableHeaderColumn>
                <TableHeaderColumn>{"Error"}</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {deploys()}
            </TableBody>
          </Table>
        </List>
        <RaisedButton
            icon={<FontIcon className="icon icon-download" />}
            label={"Download Linux CLI"}
            onClick={() => handlOpenURL("https://s3-us-west-1.amazonaws.com/tw-test123/tinker/0.2.1/linux/tinker")}
            primary
            style={styles.button}
        />
      </div>
      {/* <div className="align-left">
        <RaisedButton
            href="/environment"
            icon={<FontIcon className="icon icon-trigger" />}
            label="Add Trigger"
            primary
            style={styles.button}
        />
        <RaisedButton
            href="/users"
            icon={<FontIcon className="icon icon-person-add" />}
            label="Modify Users"
            primary
            style={styles.button}
        />
      </div> */}
      <div className="align-right">
        <Chip
            style={styles.chip}
        >
          <Avatar icon={<FontIcon className="icon icon-cpu" />} />
          {"CPU: 60 %"}
        </Chip>
        <Chip
            style={styles.chip}
        >
          <Avatar icon={<FontIcon className="icon icon-memory-ram" />} />
          {"RAM: 1024 MB"}
        </Chip>
      </div>
    </div>
  );
};

Project.propTypes = {
  deleteProjectServer: PropTypes.func.isRequired,
  deployProject: PropTypes.func.isRequired,
  projectsAppState: PropTypes.object.isRequired,
  requestProjectDeployServers: PropTypes.func.isRequired,
  requestRedeployProjectServer: PropTypes.func.isRequired,
  setProjectDeployError: PropTypes.func.isRequired,
  setShowProjectDeployServerError: PropTypes.func.isRequired,
  setShowProjectServers: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default Project;
