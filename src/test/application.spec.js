import Immutable, { Map, fromJS } from "immutable";
import { expect } from "chai";
import application from "../reducers/application";

describe("application", () => {
  it("handles SET_APPLICATION", () => {
    const initialState = Map();
    const action = {type:"SET_APPLICATION", value: fromJS({
        application:"ghost"})
    };
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
      application_name:"ghost"}));
  });
  it("handles SET_ACTIVE_STEP", () => {
    const initialState = Map();
    const action = {type:"SET_ACTIVE_STEP", value: fromJS({
        active_step: 2})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "active_step": 2}))
    ).to.be.true;
  });
  it("handles SET_ACTIVE_CONFIGURATION_STEP", () => {
    const initialState = Map();
    const action = {type:"SET_ACTIVE_CONFIGURATION_STEP", value: fromJS({
        active_configuration_step: "mysql"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "active_configuration_step": "mysql"}))
    ).to.be.true;
  });
  it("handles SET_REPO", () => {
    const initialState = Map();
    const action = {type:"SET_REPO", value: fromJS({
        repository: "Github"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "repositories": ["Github"]}))
    ).to.be.true;
  });
  it("handles REMOVE_REPO", () => {
    const initialState = fromJS({
      repositories: ["Github"]
    });
    const action = {type:"REMOVE_REPO", value: fromJS({
        repository: "Github"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "repositories": []}))
    ).to.be.true;
  });
  it("handles SET_STACK", () => {
    const initialState = Map();
    const action = {type:"SET_STACK", value: fromJS({
        stack: "Rails"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "stacks": ["Rails"]}))
    ).to.be.true;
  });
  it("handles REMOVE_STACK", () => {
    const initialState = fromJS({
      stacks: ["Rails"]
    });
    const action = {type:"REMOVE_STACK", value: fromJS({
        stack: "Rails"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "stacks": []}))
    ).to.be.true;
  });
  it("handles SET_DATABASE", () => {
    const initialState = Map();
    const action = {type:"SET_DATABASE", value: fromJS({
        database: "MariaDB"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "databases": ["MariaDB"]}))
    ).to.be.true;
  });
  it("handles REMOVE_DATABASE", () => {
    const initialState = fromJS({
      databases: ["MariaDB"]
    });
    const action = {type:"REMOVE_DATABASE", value: fromJS({
        database: "MariaDB"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "databases": []}))
    ).to.be.true;
  });
  it("handles SET_ADDONS", () => {
    const initialState = Map();
    const action = {type:"SET_ADDONS", value: fromJS({
        addon: "CI"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "addons": ["CI"]}))
    ).to.be.true;
  });
  it("handles REMOVE_ADDONS", () => {
    const initialState = fromJS({
      addons: ["CI"]
    });
    const action = {type:"REMOVE_ADDONS", value: fromJS({
        addon: "CI"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "addons": []}))
    ).to.be.true;
  });
  it("handles SET_ACTIVE_ENVIRONMENT", () => {
    const initialState = Map();
    const action = {type:"SET_ACTIVE_ENVIRONMENT", value: fromJS({
        active_environment:1})
    };
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
      active_environment:1}));
  });
  it("handles ADD_ENVIRONMENT", () => {
    const initialState = Map();
    const action = {
      type:"ADD_ENVIRONMENT",
      value: fromJS({
        evironments: [
          {name:"developmet"},
          {name:"production"}
        ],
        evironment: [{name:"stage"}]
      })
    };
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
      application_evironments: [
        {name:"developmet"},
        {name:"production"},
        {name:"stage"}]
    }));
  });
  it("handles SET_APPLICATION_ONE_CLICK_APP when exist SSHKeys", () => {
    const initialState = Map();
    const action = {
      type:"SET_APPLICATION_ONE_CLICK_APP",
      value: fromJS({
        applications: [{
          "id": 0,
          "title": "My little key",
          "provider": "digital_ocean",
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
          "key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
        },
        {
          "id": 1,
          "name": "My key",
          "provider": "digital_ocean",
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
          "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
        }],
        application: [{
          "id": 1,
          "name": "My little key",
          "provider": "digital_ocean",
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
          "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
        }]
      })
    };
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
      application_oneclickapp: [{
        "id": 0,
        "title": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
      },{
        "id": 1,
        "name": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
      }]
    }));
  });
  it("handles SET_APPLICATION_ONE_CLICK_APP when no exist SSHKeys", () => {
    const initialState = Map();
    const action = {
      type:"SET_APPLICATION_ONE_CLICK_APP",
      value: fromJS({
        applications: [],
        application: [{
          "id": 1,
          "name": "My little key",
          "provider": "digital_ocean",
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
          "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
        }]
      })
    };
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
      application_oneclickapp: [{
        "id": 1,
        "name": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
      }]
    }));
  });
  it("handles SET_NOTIFICATION", () => {
    const initialState = Map();
    const action = {type:"SET_NOTIFICATION", value: fromJS({
        notification:"bad credentials"})
    };
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
      notification:"bad credentials"}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
