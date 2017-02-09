import {Link} from "react-router";
import {List, ListItem} from "material-ui/List";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React, {PropTypes} from "react";

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
      projectsAppState.get("user_projects").toJS().map((value, index) =>
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
            <Link href="/project/1">
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
                href="/"
                icon={<FontIcon className="icon icon-project" />}
                label="Create Project"
                primary
            />
          </ToolbarGroup>
        </Toolbar>
        <List>
          <ListItem
              disabled
              primaryText={"Projects Created"}
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
      </div>
  );
};

ProjectsList.propTypes = {
  projectsAppState: PropTypes.object.isRequired
};

export default ProjectsList;
