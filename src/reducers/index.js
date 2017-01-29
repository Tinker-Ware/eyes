import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import applicationAppState from "./application";
import cloudProviderAppState from "./cloudProvider";
import projectNameAppState from "./projectName";
import repositoryAppState from "./repository";
import userAppState from "./user";
import userProjectAppState from "./userProject";
import baseAppState from "./roles/base";
import ghostAppState from "./roles/ghost";
import mysqlAppState from "./roles/mysql";
import nginxAppState from "./roles/nginx";
import plainHtmlAppState from "./roles/plainHtml";
import yiiAppState from "./roles/yii";

const rootReducer = combineReducers({
  applicationAppState,
  cloudProviderAppState,
  projectNameAppState,
  repositoryAppState,
  userAppState,
  userProjectAppState,
  baseAppState,
  ghostAppState,
  mysqlAppState,
  nginxAppState,
  plainHtmlAppState,
  yiiAppState,
  routing: routerReducer
});

export default rootReducer;
