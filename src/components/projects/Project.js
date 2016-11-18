import {Card} from "material-ui/Card";
import {List, ListItem} from "material-ui/List";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import Divider from "material-ui/Divider";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import RaisedButton from "material-ui/RaisedButton";
import React  from "react";
import RefreshIndicator from "material-ui/RefreshIndicator";

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

const Project = () => {
  return (
    <div className="card">
      <AppBar
          iconElementLeft={
            <IconButton href="/projects">
              <FontIcon className="icon icon-arrow-back"/>
            </IconButton>
          }
          iconElementRight={
            <IconMenu
                anchorOrigin={{
                  horizontal: "right",
                  vertical: "top"
                }}
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{
                  horizontal: "right",
                  vertical: "top"
                }}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
          title="My DevOp"
      />
      <Card>
        <Toolbar style={style.toolbar}>
          <ToolbarGroup firstChild>
            <FontIcon className="icon icon-project"/>
            <ToolbarTitle
                style={style.toolbarTitle}
                text="Project - React"
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <ToolbarSeparator />
            <RaisedButton
                href={"#"}
                icon={<FontIcon className="icon icon-edit" />}
                label={"Edit"}
                primary
                style={style.button}
            />
            <RaisedButton
                href={"#"}
                icon={<FontIcon className="icon icon-deploy" />}
                label={"Deploy"}
                primary
                style={style.button}
            />
            <RaisedButton
                href={"#"}
                icon={<FontIcon className="icon icon-cloud-download" />}
                label={"Download"}
                primary
                style={style.button}
            />
          </ToolbarGroup>
        </Toolbar>
        <div className="small-12 medium-6 large-6 columns">
          <img
              className="project-example"
              src={require("../../img/project-example.png")}
          />
        </div>
        <div className="small-12 medium-6 large-6 columns">
          <List>
            <ListItem
                disabled
                primaryText={"Deploy History"}
                secondaryText={"Check the status of each deploy"}
            />
          </List>
          <Divider />
          <List>
            <ListItem
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
            />
          </List>
        </div>
        <div className="align-left">
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
        </div>
        <div className="align-right">
          <Chip
              style={style.chip}
          >
            <Avatar icon={<FontIcon className="icon icon-cpu" />} />
            {"CPU: 80 %"}
          </Chip>
          <Chip
              style={style.chip}
          >
            <Avatar icon={<FontIcon className="icon icon-memory-ram" />} />
            {"RAM: 559 MB"}
          </Chip>
        </div>
      </Card>
    </div>
  );
};

export default Project;
