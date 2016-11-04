import React  from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import FontIcon from "material-ui/FontIcon";

const ProjectsList = () => {
  return (
    <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>{"Status"}</TableHeaderColumn>
            <TableHeaderColumn>{"Name"}</TableHeaderColumn>
            <TableHeaderColumn>{"Status"}</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>
            <FontIcon className="fa fa-home">home</FontIcon>
            </TableRowColumn>
            <TableRowColumn>{"Ghost-blog"}</TableRowColumn>
            <TableRowColumn>{"Employed"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>{"Landingapage"}</TableRowColumn>
            <TableRowColumn>{"Unemployed"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>{"Oauth service"}</TableRowColumn>
            <TableRowColumn>{"Employed"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>{"Users service"}</TableRowColumn>
            <TableRowColumn>{"Employed"}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
  );
};

export default ProjectsList;
