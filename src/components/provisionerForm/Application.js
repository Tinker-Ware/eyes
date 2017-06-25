import { Card, CardText, CardHeader } from "material-ui/Card";
import BuildbotRole from "./roles/BuildbotRole";
import FontIcon from "material-ui/FontIcon";
import MysqlRole from "./roles/MysqlRole";
import PropTypes from "prop-types";
import React from "react";
import YiiRole from "./roles/YiiRole";

const Application = ( {applicationAppState, buildbotAppState, rolesActions, yiiAppState, mysqlAppState, setActiveEnvironment} ) => {
  const styles = {
    card: {
      backgroundColor: "#cccccc",
    },
  };
  return (
    <div className="small-12 medium-12 large-12">
      <div className="row">
        <h2>{"Choose an Add-ons"}</h2>
        <YiiRole
            enable={yiiAppState.get("enable_yii")?true:false}
            end
            setEnableYii={rolesActions.setEnableYii}
            setEnableYiiAdvanced={rolesActions.setEnableYiiAdvanced}
            type={"Yii"}
        />
        <YiiRole
            enable={yiiAppState.get("enable_yii_advanced")?true:false}
            end
            setEnableYii={rolesActions.setEnableYii}
            setEnableYiiAdvanced={rolesActions.setEnableYiiAdvanced}
            type={"YiiAdvanced"}
        />
        <BuildbotRole
            buildbotAppState={buildbotAppState}
            end
            setEnableBuildbot={rolesActions.setEnableBuildbot}
        />
        <div className={"small-6 medium-3 large-3 columns one-click-app"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-react"}/>}
                subtitle={"NodeJS"}
                title={"ReactJS"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
        <div className={"small-6 medium-3 large-3 columns one-click-app"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-go"}/>}
                subtitle={"Language"}
                title={"Golang"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
        <div className={"small-6 medium-3 large-3 columns one-click-app"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-nodejs"}/>}
                subtitle={"Language"}
                title={"NodeJS"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
        <div className={"small-6 medium-3 large-3 columns one-click-app"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-phoenix"}/>}
                subtitle={"Language"}
                title={"Phoenix"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
        <div className={"small-6 medium-3 large-3 columns one-click-app"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-wordpress"}/>}
                subtitle={"PHP CMS"}
                title={"Wordpress"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
        <div className={"small-6 medium-3 large-3 columns one-click-app"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-ghost"}/>}
                subtitle={"NodeJS CMS"}
                title={"Ghost"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
        <div className={"small-6 medium-3 large-3 columns one-click-app"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-laravel"}/>}
                subtitle={"PHP Framework"}
                title={"Laravel"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
        <div className={"small-6 medium-3 large-3 columns one-click-app end"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-python"}/>}
                subtitle={"Language"}
                title={"Python"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
      </div>
      <div className="row">
        <h2>{"Choose a Database"}</h2>
        <MysqlRole
            applicationAppState={applicationAppState}
            enable={mysqlAppState.get("enable_mysql")?true:false}
            end
            environments={applicationAppState.get("application_evironments")?applicationAppState.get("application_evironments"):[]}
            mysqlAppState={mysqlAppState}
            rolesActions={rolesActions}
            type={"MySQL"}
        />
        <MysqlRole
            applicationAppState={applicationAppState}
            enable={mysqlAppState.get("enable_mariadb")?true:false}
            end
            environments={applicationAppState.get("application_evironments")?applicationAppState.get("application_evironments"):[]}
            mysqlAppState={mysqlAppState}
            removeMysqlDatabase={rolesActions.removeMysqlDatabase}
            removeMysqlDatabases={rolesActions.removeMysqlDatabases}
            removeMysqlPackages={rolesActions.removeMysqlPackages}
            removeMysqlUser={rolesActions.removeMysqlUser}
            removeMysqlUsers={rolesActions.removeMysqlUsers}
            setActiveEnvironment={setActiveEnvironment}
            setEnableMariadb={rolesActions.setEnableMariadb}
            setEnableMysql={rolesActions.setEnableMysql}
            setMysqlDatabases={rolesActions.setMysqlDatabases}
            setMysqlRootPassword={rolesActions.setMysqlRootPassword}
            setMysqlUser={rolesActions.setMysqlUser}
            setShowMysql={rolesActions.setShowMysql}
            setShowMysqlDatabase={rolesActions.setShowMysqlDatabase}
            setShowMysqlUser={rolesActions.setShowMysqlUser}
            type={"MariaDB"}
            updateMysqlUser={rolesActions.updateMysqlUser}
        />
        <div className={"small-6 medium-3 large-3 columns one-click-app end"}>
          <Card style={styles.card}>
            <CardHeader
                avatar={<FontIcon className={"icon icon-redis"}/>}
                subtitle={"In-memory DB"}
                title={"Redis"}
            />
            <CardText>
              {"Coming soon"}
            </CardText>
          </Card>
        </div>
      </div>
      {/* <div className="row">
        <h2>{"Choose a Web Serving Software"}</h2>
      </div> */}
    </div>
  );
};

Application.propTypes = {
  applicationAppState: PropTypes.object.isRequired,
  buildbotAppState: PropTypes.object.isRequired,
  mysqlAppState: PropTypes.object.isRequired,
  rolesActions: PropTypes.object.isRequired,
  setActiveEnvironment: PropTypes.func.isRequired,
  yiiAppState: PropTypes.object.isRequired
};

export default Application;
