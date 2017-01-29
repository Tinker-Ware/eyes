import {Map, fromJS} from "immutable";
import {expect} from "chai";
import nginx from "../../reducers/roles/nginx";

describe("reducer", () => {
  it("handles SET_NGINX_REMOVE_DEFAULT_VHOST", () => {
    const initialState = Map();
    const action = {type:"SET_NGINX_REMOVE_DEFAULT_VHOST", value: fromJS({
      nginx_remove_default_vhost:true})};
    const nextState = nginx(initialState, action);

    expect(nextState).to.equal(fromJS({
      nginx_remove_default_vhost:true}));
  });
  it("handles SET_NGINX_VHOSTS", () => {
    const initialState = Map();
    const action = {
      type:"SET_NGINX_VHOSTS",
      value: fromJS({
        nginx_vhosts:
          [{
            server_name: "_",
            listen: "80",
            extra_parameters:{
              location: "proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:80;"
            },
            root: "_"
          }],
        nginx_vhost: [{
          server_name: "_",
          listen: "8080",
          extra_parameters:{
            location: "proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:8080;"
          },
          root: "_"
        }]
      })
    };
    const nextState = nginx(initialState, action);

    expect(nextState).to.equal(fromJS({
      nginx_vhosts: [{
        server_name: "_",
        listen: "80",
        extra_parameters:{
          location: "proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:80;"
        },
        root: "_"
      },{
        server_name: "_",
        listen: "8080",
        extra_parameters:{
          location: "proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:8080;"
        },
        root: "_"
      }]
    }));
  });
  it("handles SET_SHOW_NGINX", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_NGINX", value: fromJS({
      show_nginx:true})};
    const nextState = nginx(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_nginx:true}));
  });
  it("handles SET_REQUEST_ACTIVE_NGINX", () => {
    const initialState = Map();
    const action = {type:"SET_REQUEST_ACTIVE_NGINX", value: fromJS({
      request_active_nginx:true})};
    const nextState = nginx(initialState, action);

    expect(nextState).to.equal(fromJS({
      request_active_nginx:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = nginx(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
