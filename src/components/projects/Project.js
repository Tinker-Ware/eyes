import {fromJS} from "immutable";
import {Link} from "react-router";
import {List, ListItem} from "material-ui/List";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import Dialog from "material-ui/Dialog";
import Divider from "material-ui/Divider";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React, {PropTypes} from "react";

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

const Project = ({deployProject, projectsAppState, requestProjectDeployServers, setShowProjectServers, userAppState}) => {
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
  const handleShowProjectsDeployServers = () => {
    setShowProjectServers(
      fromJS({
        show_project_servers: !projectsAppState.get("show_project_servers")
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
  const actions = [
      <FlatButton
          icon={<FontIcon className="icon icon-cancel" />}
          key={1}
          label={"Close"}
          onTouchTap={handleShowProjectsDeployServers}
          secondary
      />
    ];
  const servers = () => {
    return projectsAppState.get("project_servers")?projectsAppState.get("project_servers").toJS().map((server,index)=>
      <ListItem
          key={index}
          leftIcon={<FontIcon className="icon icon-deploy"/>}
          primaryText={"ID: "+server.id}
          rightIcon={<FontIcon className="icon icon-check"/>}
          // onChange={handleGetDeployServers(server.id)}
          secondaryText={"IP: "+server.networks.v4[0].ip_address}
      />
    ):"";
  };
  const serverRows = () => {
    return projectsAppState.get("project_servers")?projectsAppState.get("project_servers").toJS().map((server,index)=>
    <TableRow key={index}>
      <TableRowColumn>

      </TableRowColumn>
      <TableRowColumn>
        {value.project_name}
      </TableRowColumn>
      <TableRowColumn>
        <FontIcon className="icon icon-check"/>
      </TableRowColumn>
      <TableRowColumn>
        <Link href={"/project/"+server.id}>
          <FontIcon className="icon icon-edit"/>
        </Link>
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
              style={styles.button}
          />
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
          title="Servers"
      >
        {servers()}
      </Dialog>
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
          <Table
            onCellClick={handleGetDeployServers}
          >
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>{""}</TableHeaderColumn>
                <TableHeaderColumn>{"ID"}</TableHeaderColumn>
                <TableHeaderColumn>{"Deployed At"}</TableHeaderColumn>
                <TableHeaderColumn>{"Status"}</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {projectsAppState.get("project_deploys")?projectsAppState.get("project_deploys").toJS().map((deploy,index)=>
                <TableRow key={deploy.id}>
                  <TableRowColumn>
                    <FontIcon className="icon icon-deploy"/>
                  </TableRowColumn>
                  <TableRowColumn>
                    {deploy.id}
                  </TableRowColumn>
                  <TableRowColumn>
                    {deploy.deployed_at}
                  </TableRowColumn>
                  <TableRowColumn>
                    {deploy.status}
                  </TableRowColumn>
                </TableRow>
              ):""}
            </TableBody>
          </Table>
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
                <div style={styles.container}>
                  <RefreshIndicator
                      left={0}
                      loadingColor={"#777"}
                      size={30}
                      status={"loading"}
                      style={styles.refresh}
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
  deployProject: PropTypes.func.isRequired,
  projectsAppState: PropTypes.object.isRequired,
  requestProjectDeployServers: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default Project;
