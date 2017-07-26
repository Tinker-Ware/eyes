import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import applicationAppState from "./application";
import baseAppState from "./roles/base";
import buildbotAppState from "./roles/buildbot";
import cloudProviderAppState from "./cloudProvider";
import ghostAppState from "./roles/ghost";
import mysqlAppState from "./roles/mysql";
import nginxAppState from "./roles/nginx";
import nodejsAppState from "./roles/nodejs";
import plainHtmlAppState from "./roles/plainHtml";
import projectNameAppState from "./projectName";
import projectsAppState from "./project/projects";
import repositoryAppState from "./repository";
import sparkAppState from "./roles/spark";
import springAppState from "./roles/spring";
import userAppState from "./user";
import userProjectAppState from "./userProject";
import yiiAppState from "./roles/yii";

const rootReducer = combineReducers({
  applicationAppState,
  baseAppState,
  buildbotAppState,
  cloudProviderAppState,
  ghostAppState,
  mysqlAppState,
  nginxAppState,
  nodejsAppState,
  plainHtmlAppState,
  projectNameAppState,
  projectsAppState,
  repositoryAppState,
  sparkAppState,
  springAppState,
  userAppState,
  userProjectAppState,
  yiiAppState,
  routing: routerReducer
});

export default rootReducer;
