import * as types from "../constants/Roles";

export function setCookieValidationKey(value) {
  return { type: types.SET_COOKIE_VALIDATION_KEY, value };
}

export function setYiiGitRepo(value) {
  return { type: types.SET_YII_GIT_REPO, value };
}

export function setMysqlRootPassword(value) {
  return { type: types.SET_MYSQL_ROOT_PASSWORD, value };
}

export function setMysqlUser(value) {
  return { type: types.SET_MYSQL_USERS, value };
}

export function setMysqlPackages(value) {
  return { type: types.SET_MYSQL_PACKAGES, value };
}

export function setMysqlDatabases(value) {
  return { type: types.SET_MYSQL_DATABASES, value };
}

export function setNginxRemoveDefaultVhost(value) {
  return { type: types.SET_NGINX_REMOVE_DEFAULT_VHOST, value };
}

export function setNginxVhosts(value) {
  return { type: types.SET_NGINX_VHOSTS, value };
}

export function setServerName(value) {
  return { type: types.SET_SERVER_NAME, value };
}

export function setRepoPath(value) {
  return { type: types.SET_REPO_PATH, value };
}

export function setGithubRepo(value) {
  return { type: types.SET_GITHUB_REPO, value };
}

export function setUser(value) {
  return { type: types.SET_USER, value };
}

export function setSsh(value) {
  return { type: types.SET_SSH, value };
}

export function setSshKeyPath(value) {
  return { type: types.SET_SSH_KEY_PATH, value };
}

export function setUserEmail(value) {
  return { type: types.SET_USER_EMAIL, value };
}

export function setUserName(value) {
  return { type: types.SET_USER_NAME, value };
}

export function setServerUser(value) {
  return { type: types.SET_SERVER_USER, value };
}

export function setServerGroup(value) {
  return { type: types.SET_SERVER_GROUP, value };
}

export function setUsers(value) {
  return { type: types.SET_USERS, value };
}

export function setCronjobs(value) {
  return { type: types.SET_CRONJOBS, value };
}

export function setPrivateKey(value) {
  return { type: types.SET_PRIVATE_KEY, value };
}

export function setPrivateKeyName(value) {
  return { type: types.SET_PRIVATE_KEY_NAME, value };
}

export function setNodejsVersion(value) {
  return { type: types.SET_NODEJS_VERSION, value };
}

export function setGhostNodejsEnabled(value) {
  return { type: types.SET_GHOST_NODEJS_ENABLED, value };
}

export function setGhostNginxEnabled(value) {
  return { type: types.SET_GHOST_NGINX_ENABLED, value };
}

export function setGhostInstallDir(value) {
  return { type: types.SET_GHOST_INSTALL_DIR, value };
}

export function setGhostUserName(value) {
  return { type: types.SET_GHOST_USER_NAME, value };
}

export function setGhostUserGroup(value) {
  return { type: types.SET_GHOST_USER_GROUP, value };
}

export function setGhostRepo(value) {
  return { type: types.SET_GHOST_REPO, value };
}

export function setGhostConfigUrl(value) {
  return { type: types.SET_GHOST_CONFIG_URL, value };
}

export function setGhostConfigDatabase(value) {
  return { type: types.SET_GHOST_CONFIG_DATABASE, value };
}

export function setShowBase(value) {
  return { type: types.SET_SHOW_BASE, value };
}

export function setEnableBase(value) {
  return { type: types.SET_ENABLE_BASE, value };
}

export function setRequestActiveBase(value) {
  return { type: types.SET_REQUEST_ACTIVE_BASE, value };
}

export function setShowGhost(value) {
  return { type: types.SET_SHOW_GHOST, value };
}

export function setEnableGhost(value) {
  return { type: types.SET_ENABLE_GHOST, value };
}

export function setRequestActiveGhost(value) {
  return { type: types.SET_REQUEST_ACTIVE_GHOST, value };
}

export function setShowMysql(value) {
  return { type: types.SET_SHOW_MYSQL, value };
}

export function setShowMysqlUser(value) {
  return { type: types.SET_SHOW_MYSQL_USER, value };
}

export function setShowMysqlDatabase(value) {
  return { type: types.SET_SHOW_MYSQL_DATABASE, value };
}

export function setEnableMysql(value) {
  return { type: types.SET_ENABLE_MYSQL, value };
}

export function setRequestActiveMysql(value) {
  return { type: types.SET_REQUEST_ACTIVE_MYSQL, value };
}

export function setShowNginx(value) {
  return { type: types.SET_SHOW_NGINX, value };
}

export function setEnableNginx(value) {
  return { type: types.SET_ENABLE_NGINX, value };
}

export function setRequestActiveNginx(value) {
  return { type: types.SET_REQUEST_ACTIVE_NGINX, value };
}

export function setShowPlainhtml(value) {
  return { type: types.SET_SHOW_PLAINHTML, value };
}

export function setEnablePlainhtml(value) {
  return { type: types.SET_ENABLE_PLAINHTML, value };
}

export function setRequestActivePlainhtml(value) {
  return { type: types.SET_REQUEST_ACTIVE_PLAINHTML, value };
}

export function setShowYii(value) {
  return { type: types.SET_SHOW_YII, value };
}

export function setEnableYii(value) {
  return { type: types.SET_ENABLE_YII, value };
}

export function setRequestActiveYii(value) {
  return { type: types.SET_REQUEST_ACTIVE_YII, value };
}

export function removeMysqlDatabase(value) {
  return { type: types.REMOVE_MYSQL_DATABASE, value };
}

export function removeMysqlUser(value) {
  return { type: types.REMOVE_MYSQL_USER, value };
}
