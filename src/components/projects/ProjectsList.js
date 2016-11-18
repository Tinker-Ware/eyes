import {Card} from "material-ui/Card";
import {Link} from "react-router";
import {List, ListItem} from "material-ui/List";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
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
      <AppBar
          iconElementLeft={
            <IconButton>
              <FontIcon className="icon icon-home"/>
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
            <FontIcon className="icon icon-box"/>
            <ToolbarTitle
                style={style.toolbarTitle}
                text="Projects"
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <ToolbarSeparator />
            <RaisedButton
                href="/"
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
                <FontIcon className="icon icon-html-five"/>
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
      </Card>
    </div>
  );
};

export default ProjectsList;
