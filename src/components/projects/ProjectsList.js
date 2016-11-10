import React  from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import FontIcon from "material-ui/FontIcon";
import { Card } from "material-ui/Card";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

const ProjectsList = () => {
  return (
    <div className="card">
      <Card>
        <h2 className="align-center">
          {"Projects"}
        </h2>
        <div className="align-right">
          <FloatingActionButton
              mini
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <Table>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>{"Type"}</TableHeaderColumn>
              <TableHeaderColumn>{"Name"}</TableHeaderColumn>
              <TableHeaderColumn>{"Status"}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>
                <FontIcon className="icon icon-go"/>
              </TableRowColumn>
              <TableRowColumn>{"Ghost-blog"}</TableRowColumn>
              <TableRowColumn>
              <TableRowColumn>
                <FontIcon className="icon icon-check"/>
              </TableRowColumn>
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
            </TableRow>
            <TableRow>
            <TableRowColumn>
              <FontIcon className="icon icon-react"/>
            </TableRowColumn>
              <TableRowColumn>{"Oauth service"}</TableRowColumn>
              <TableRowColumn>
                <FontIcon className="icon icon-check"/>
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
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ProjectsList;
