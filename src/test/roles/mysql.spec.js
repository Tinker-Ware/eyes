import {Map, fromJS} from "immutable";
import {expect} from "chai";
import mysql from "../../reducers/roles/mysql";

describe("reducer", () => {
  it("handles SET_MYSQL_ROOT_PASSWORD", () => {
    const initialState = Map();
    const action = {type:"SET_MYSQL_ROOT_PASSWORD", value: fromJS({
        mysql_root_passwords:
          [{
            id: 1,
            environment: 1,
            password: "username"
          }],
        mysql_root_password: [{
          environment: 2,
          password: "username"
        }]
      })};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_root_password:[{
        id: 1,
        environment: 1,
        password: "username"
      },
      {
        id: 2,
        environment: 2,
        password: "username"
      }]
    }));
  });
  it("handles update SET_MYSQL_ROOT_PASSWORD", () => {
    const initialState = Map();
    const action = {type:"SET_MYSQL_ROOT_PASSWORD", value: fromJS({
        mysql_root_passwords:
          [{
            id: 1,
            environment: 1,
            password: "username"
          }],
        mysql_root_password: [{
          id: 1,
          environment: 2,
          password: "username"
        }]
      })};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_root_password:[{
        id: 1,
        environment: 2,
        password: "username"
      }]
    }));
  });
  it("handles SET_MYSQL_USERS", () => {
    const initialState = Map();
    const action = {
      type:"SET_MYSQL_USERS",
      value: fromJS({
        mysql_users:
          [{
            id: 1,
            environment: 1,
            name: "username",
            host: "localhost",
            password: "password",
            priv: "ti_database.*:ALL"
          }],
        mysql_user: [{
          environment: 2,
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
        id: 1,
        environment: 1,
        name: "username",
        host: "localhost",
        password: "password",
        priv: "ti_database.*:ALL"
      },{
        id: 2,
        environment: 2,
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
            id: 1,
            name: "database_name",
            encoding: "utf8",
            collation: "utf8_general_ci",
            mariaDB: "false"
          }],
        mysql_database: [{
          name: "database_name2",
          encoding: "utf8",
          collation: "utf8_general_ci",
          mariaDB: "true"
        }]
      })
    };
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_databases: [{
        id: 1,
        name: "database_name",
        encoding: "utf8",
        collation: "utf8_general_ci",
        mariaDB: "false"
      },{
        id: 2,
        name: "database_name2",
        encoding: "utf8",
        collation: "utf8_general_ci",
        mariaDB: "true"
      }]
    }));
  });
  it("handles SET_MYSQL_DATABASE_INDEX", () => {
    const initialState = Map();
    const action = {type:"SET_MYSQL_DATABASE_INDEX", value: fromJS({
      mysql_database_index:"1"})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_database_index:"1"}));
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
  it("handles SET_SHOW_MYSQL_USER", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_MYSQL_USER", value: fromJS({
      show_mysql_user:true})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_mysql_user:true}));
  });
  it("handles SET_SHOW_MYSQL_DATABASE", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_MYSQL_DATABASE", value: fromJS({
      show_mysql_database:true})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_mysql_database:true}));
  });
  it("handles SET_REQUEST_ACTIVE_MYSQL", () => {
    const initialState = Map();
    const action = {type:"SET_REQUEST_ACTIVE_MYSQL", value: fromJS({
      request_active_mysql:true})};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      request_active_mysql:true}));
  });
  it("handles REMOVE_MYSQL_USER", () => {
    const initialState = Map();
    const action = {
      type:"REMOVE_MYSQL_USER",
      value: fromJS({
        mysql_users:
          [{
            id: 1,
            environment: "development",
            name: "username",
            host: "localhost",
            password: "password",
            priv: "ti_database.*:ALL"
          }],
        mysql_user: {
          id: 1,
          environment: "development",
          name: "username2",
          host: "localhost2",
          password: "password",
          priv: "ti_database.*:ALL"
        }
      })
    };
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_users: []
    }));
  });
  it("handles UPDATE_MYSQL_USERS", () => {
    const initialState = Map();
    const action = {
      type:"UPDATE_MYSQL_USERS",
      value: fromJS({
        mysql_users:
          [{
            id: 1,
            environment: "development",
            name: "username",
            host: "localhost",
            password: "password",
            priv: "ti_database.*:ALL"
          }],
        mysql_user: {
          id: 1,
          environment: "development",
          name: "username2",
          host: "localhost2",
          password: "password",
          priv: "ti_database.*:ALL"
        }
      })
    };
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
      mysql_users: [{
        id: 1,
        environment: "development",
        name: "username2",
        host: "localhost2",
        password: "password",
        priv: "ti_database.*:ALL"
      }]
    }));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = mysql(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
