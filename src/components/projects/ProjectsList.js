import {Card} from "material-ui/Card";
import {Link} from "react-router";
import {List, ListItem} from "material-ui/List";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import React  from "react";

const style = {
  toolbar: {
    margin: "-1em -1em 3em -1em",
  },
  toolbarTitle: {
    marginLeft: "1em"
  }
};

const ProjectsList = () => {
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
            <TableRow>
              <TableRowColumn>
                <FontIcon className="icon icon-go"/>
              </TableRowColumn>
              <TableRowColumn>
                {"Ghost-blog"}
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
            <TableRow>
              <TableRowColumn>
                <FontIcon className="icon icon-python"/>
              </TableRowColumn>
              <TableRowColumn>{"Landingapage"}</TableRowColumn>
              <TableRowColumn>
                <FontIcon className="icon icon-warning"/>
              </TableRowColumn>
              <TableRowColumn>
                <Link href="/project/2">
                  <FontIcon className="icon icon-edit"/>
                </Link>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <FontIcon className="icon icon-react"/>
              </TableRowColumn>
              <TableRowColumn>{"Oauth service"}</TableRowColumn>
              <TableRowColumn>
                <FontIcon className="icon icon-check"/>
              </TableRowColumn>
              <TableRowColumn>
                <Link href="/project/3">
                  <FontIcon className="icon icon-edit"/>
                </Link>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <FontIcon className="icon icon-html-plain"/>
              </TableRowColumn>
              <TableRowColumn>{"Users service"}</TableRowColumn>
              <TableRowColumn>
                <FontIcon className="icon icon-check"/>
              </TableRowColumn>
              <TableRowColumn>
                <Link href="/project/4">
                  <FontIcon className="icon icon-edit"/>
                </Link>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
  );
};

export default ProjectsList;
