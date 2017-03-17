import {Map, fromJS} from "immutable";
import {expect} from "chai";
import ghost from "../../reducers/roles/ghost";

describe("ghost role", () => {
  it("handles SET_NODEJS_VERSION", () => {
    const initialState = Map();
    const action = {type:"SET_NODEJS_VERSION", value: fromJS({
      nodejs_version:"nodejs-v010"})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      nodejs_version:"nodejs-v010"}));
  });
  it("handles SET_GHOST_NODEJS_ENABLED", () => {
    const initialState = Map();
    const action = {type:"SET_GHOST_NODEJS_ENABLED", value: fromJS({
      ghost_nodejs_enabled:false})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      ghost_nodejs_enabled:false}));
  });
  it("handles SET_GHOST_NGINX_ENABLED", () => {
    const initialState = Map();
    const action = {type:"SET_GHOST_NGINX_ENABLED", value: fromJS({
      ghost_nginx_enabled:false})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      ghost_nginx_enabled:false}));
  });
  it("handles SET_GHOST_INSTALL_DIR", () => {
    const initialState = Map();
    const action = {type:"SET_GHOST_INSTALL_DIR", value: fromJS({
      ghost_install_dir:"/opt/tinker/shared_files/ghost"})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      ghost_install_dir:"/opt/tinker/shared_files/ghost"}));
  });
  it("handles SET_GHOST_USER_NAME", () => {
    const initialState = Map();
    const action = {type:"SET_GHOST_USER_NAME", value: fromJS({
      ghost_user_name:"username"})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      ghost_user_name:"username"}));
  });
  it("handles SET_GHOST_USER_GROUP", () => {
    const initialState = Map();
    const action = {type:"SET_GHOST_USER_GROUP", value: fromJS({
      ghost_user_group:"usergroup"})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      ghost_user_group:"usergroup"}));
  });
  it("handles SET_GHOST_REPO", () => {
    const initialState = Map();
    const action = {type:"SET_GHOST_REPO", value: fromJS({
      ghost_repo:"git@github.com:user/reponame.git"})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      ghost_repo:"git@github.com:user/reponame.git"}));
  });
  it("handles SET_GHOST_CONFIG_URL", () => {
    const initialState = Map();
    const action = {type:"SET_GHOST_CONFIG_URL", value: fromJS({
      ghost_config_url:"url"})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      ghost_config_url:"url"}));
  });
  it("handles SET_GHOST_CONFIG_DATABASE", () => {
    const initialState = Map();
    const action = {
      type:"SET_GHOST_CONFIG_DATABASE",
      value: fromJS({
        databases:
          [],
        database: [{
          client: "sqlite3",
          connection:{
            filename: "{{ ghost_install_dir }}/content/data/ghost.db"
          },
          debug: "false"
        }]
      })
    };
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      ghost_config_database: [{
        client: "sqlite3",
        connection:{
          filename: "{{ ghost_install_dir }}/content/data/ghost.db"
        },
        debug: "false"
      }]
    }));
  });
  it("handles SET_ENABLE_GHOST", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_GHOST", value: fromJS({
      enable_ghost:true})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_ghost:true}));
  });
  it("handles SET_SHOW_GHOST", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_GHOST", value: fromJS({
      show_ghost:true})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_ghost:true}));
  });
  it("handles SET_REQUEST_ACTIVE_GHOST", () => {
    const initialState = Map();
    const action = {type:"SET_REQUEST_ACTIVE_GHOST", value: fromJS({
      request_active_ghost:true})};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
      request_active_ghost:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = ghost(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
