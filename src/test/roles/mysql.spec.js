import {Map, fromJS} from "immutable";
import {expect} from "chai";
import mysql from "../../reducers/roles/mysql";

describe("reducer", () => {
  it("handles SET_MYSQL_ROOT_PASSWORD", () => {
    const initialState = Map();
    const action = {type:"SET_MYSQL_ROOT_PASSWORD", value: fromJS({
      mysql_root_password:"rootpass"})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_root_password:"rootpass"}));
  });
  it("handles SET_MYSQL_USERS", () => {
    const initialState = Map();
    const action = {
      type:"SET_MYSQL_USERS",
      value: fromJS({
        mysql_users:
          [{
            name: "username",
            host: "localhost",
            password: "password",
            priv: "ti_database.*:ALL"
          }],
        mysql_user: [{
          name: "username2",
          host: "localhost2",
          password: "password",
          priv: "ti_database.*:ALL"
        }]
      })
    };
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_users: [{
        name: "username",
        host: "localhost",
        password: "password",
        priv: "ti_database.*:ALL"
      },{
        name: "username2",
        host: "localhost2",
        password: "password",
        priv: "ti_database.*:ALL"
      }]
    }));
  });
  it("handles SET_MYSQL_PACKAGES", () => {
    const initialState = Map();
    const action = {type:"SET_MYSQL_PACKAGES", value: fromJS({
      mysql_packages:[
        "mariadb-client",
        "mariadb-server",
        "python-mysqldb"
      ]})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_packages:[
        "mariadb-client",
        "mariadb-server",
        "python-mysqldb"
      ]}));
  });
  it("handles SET_MYSQL_DATABASES", () => {
    const initialState = Map();
    const action = {
      type:"SET_MYSQL_DATABASES",
      value: fromJS({
        mysql_databases:
          [{
            name: "database_name",
            encoding: "utf8",
            collation: "utf8_general_ci"
          }],
        mysql_database: [{
          name: "database_name2",
          encoding: "utf8",
          collation: "utf8_general_ci"
        }]
      })
    };
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_databases: [{
        name: "database_name",
        encoding: "utf8",
        collation: "utf8_general_ci"
      },{
        name: "database_name2",
        encoding: "utf8",
        collation: "utf8_general_ci"
      }]
    }));
  });
  it("handles SET_ENABLE_MYSQL", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_MYSQL", value: fromJS({
      enable_mysql:true})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_mysql:true}));
  });
  it("handles SET_SHOW_MYSQL", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_MYSQL", value: fromJS({
      show_mysql:true})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_mysql:true}));
  });
  it("handles SET_REQUEST_ACTIVE_MYSQL", () => {
    const initialState = Map();
    const action = {type:"SET_REQUEST_ACTIVE_MYSQL", value: fromJS({
      request_active_mysql:true})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      request_active_mysql:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
