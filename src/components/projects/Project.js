import React  from "react";
import FontIcon from "material-ui/FontIcon";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import RefreshIndicator from "material-ui/RefreshIndicator";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";

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
};

const Project = () => {
  return (
    <div className="card">
      <Card>
        <h2 className="align-center">
          {"Project"}
        </h2>
        <p className="align-center">
          {"React"}
        </p>
        <div className="align-right">
          <RaisedButton
              href="#"
              icon={<FontIcon className="icon icon-edit" />}
              label="Edit Project"
              primary
              style={style.button}
          />
          <RaisedButton
              href="#"
              icon={<FontIcon className="icon icon-person-add" />}
              label="Modify Users"
              primary
              style={style.button}
          />
        </div>
        <div className="small-12 medium-6 large-6 columns">
          <img
              className="project-example"
              src="../img/project-example.png"
          />
        </div>
        <div className="small-12 medium-6 large-6 columns">
          <List>
            <Subheader>{"Deploys"}</Subheader>
            <ListItem
                primaryText={"List of Deploys"}
                secondaryText={"Check the status of each deploy"}
            />
          </List>
          <Divider />
          <List>
            <ListItem
                leftIcon={<FontIcon className="icon icon-deploy"/>}
                primaryText={"ID: 11923"}
                rightIcon={<FontIcon className="icon icon-check"/>}
                secondaryText={"IP: 192.168.10.11"}
            />
            <ListItem
                leftIcon={<FontIcon className="icon icon-deploy"/>}
                primaryText={"ID: 12923"}
                rightIcon={<FontIcon className="icon icon-warning"/>}
                secondaryText={"IP: 192.168.10.18"}
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
                secondaryText={"IP: 192.168.10.21"}
            />
            <ListItem
                leftIcon={<FontIcon className="icon icon-deploy"/>}
                primaryText={"ID: 15923"}
                rightIcon={<FontIcon className="icon icon-check"/>}
                secondaryText={"IP: 192.168.10.31"}
            />
          </List>
        </div>
        <div className="align-left">
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
