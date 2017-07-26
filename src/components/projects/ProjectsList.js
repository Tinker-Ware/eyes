import { Link } from "react-router";
import { List, ListItem } from "material-ui/List";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

const style = {
  toolbar: {
    margin: "-1em -1em 3em -1em",
  },
  toolbarTitle: {
    marginLeft: "1em"
  }
};

const ProjectsList = ({projectsAppState}) => {
  const TableRows =
    projectsAppState.get("user_projects")?
      projectsAppState.get("user_projects").reverse().toJS().map((value, index) =>
        <TableRow key={index}>
          <TableRowColumn>
            {value.roles.map((value2, index) =>
              (value2.role != "base")?
                <FontIcon
                    className={"icon icon-"+value2.role}
                    key={index}
                />:""
            )}
          </TableRowColumn>
          <TableRowColumn>
            {value.project_name}
          </TableRowColumn>
          <TableRowColumn>
            <FontIcon className="icon icon-check"/>
          </TableRowColumn>
          <TableRowColumn>
            <Link href={"/project/"+value.id}>
              <FontIcon className="icon icon-edit"/>
            </Link>
          </TableRowColumn>
        </TableRow>
      ):"";
  return (
      <div className="card">
        <Toolbar style={style.toolbar}>
          <ToolbarGroup firstChild>
            <FontIcon className="icon icon-box"/>
            <ToolbarTitle
                style={style.toolbarTitle}
                text="Projects"
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarSeparator />
            <RaisedButton
                href="/project/new/"
                icon={<FontIcon className="icon icon-project" />}
                label="Create New Project"
                primary
            />
          </ToolbarGroup>
        </Toolbar>
        <List>
          <ListItem
              disabled
              primaryText={"Projects Createds"}
              secondaryText={"Modify each project as you need"}
          />
        </List>
        <Table>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>{"Type"}</TableHeaderColumn>
              <TableHeaderColumn>{"Name"}</TableHeaderColumn>
              <TableHeaderColumn>{"Status"}</TableHeaderColumn>
              <TableHeaderColumn>{"Edit"}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {TableRows}
          </TableBody>
        </Table>
        <Drawer
            open
            swipeAreaWidth={100}
        >
          <MenuItem>{"Menu Item"}</MenuItem>
          <MenuItem>{"Menu Item 2"}</MenuItem>
        </Drawer>
      </div>
  );
};

ProjectsList.propTypes = {
  projectsAppState: PropTypes.object.isRequired
};

export default ProjectsList;
