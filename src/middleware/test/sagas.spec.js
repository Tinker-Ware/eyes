import "babel-polyfill";
import { expect } from "chai";
import { call, put } from "redux-saga/effects";
import { fromJS } from "immutable";
import * as actions from "../actions/MiddlewareActions";
import { delay, deleteProjectServer, deployProject, doRequestDeleteProjectServer, doRequestDeployProject, doRequestGetCloudProviderAccess, doRequestGetCloudProviderKeys, doRequestGetProjectDeploys, doRequestGetProjectServers, doRequestGetRefreshSession, doRequestGetRepositories, doRequestGetRepositoryAccess, doRequestGetUserSesion, doRequestPostCloudProviderKey, doRequestPostUser, doRequestPostUserProject, getCloudProviderAccess, getCloudProviderKeys, getProjectDeploys, getProjectDeployServers, getRepositoryAccess, getUserRepositories, getUserSesion, postCloudProviderKey, postUser, postUserProject, refreshSession, refreshUserSesion } from "../sagas";

describe("sagas middleware", () => {
  it("handles DELETE_PROJECT_SERVERS", () => {
    const data = {
      "authorization": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf",
      "user_id": 1,
      "project_id": 1,
      "deploy_id": 1,
      "server_id": "58d0463ece40ef189f"
    };
    const generator = deleteProjectServer(
      {"value":
        fromJS({
          "authorization": data.authorization,
          "project_id": data.project_id,
          "deploy_id": data.deploy_id,
          "user_id": data.user_id,
          "server_id": data.server_id
        })
      });
    const err = new ReferenceError("404");
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestDeleteProjectServer, fromJS({
        "authorization": data.authorization,
        "project_id": data.project_id,
        "deploy_id": data.deploy_id,
        "user_id": data.user_id,
        "server_id": data.server_id
      }))
    );
  });
  it("handles DEPLOY_PROJECT", () => {
    const data = {
      "authorization": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf",
      "user_id": 1,
      "project_id": 1
    };
    const generator = deployProject(
      {"value":
        fromJS({
          "authorization": data.authorization,
          "project_id": data.project_id,
          "user_id": data.user_id
        })
      });
    const err = new ReferenceError("404");
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestDeployProject, fromJS({
        "authorization": data.authorization,
        "project_id": data.project_id,
        "user_id": data.user_id
      }))
    );
    expect(generator.next().value).to.deep.equal(
      call(getProjectDeploys, {"value":
        fromJS({
          "authorization": data.authorization,
          "project_id": data.project_id,
          "user_id": data.user_id
        })
      })
    );
    expect(generator.next().value).to.deep.equal(
      put(actions.setShowProjectServers(fromJS({
        show_project_servers: true
      })))
    );
    // expect(generator.next(deploy).value).to.deep.equal(
    //   call(getProjectDeployServers, {"value":
    //     fromJS({
    //       "authorization": data.authorization,
    //       "project_id": data.project_id,
    //       "user_id": data.user_id,
    //       "deploy_id": deploy.id
    //     })
    //   })
    // );
  });
  it("handles REQUEST_PROJECT_DEPLOYS", () => {
    const data = {
      "authorization": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf",
      "deploy_id": 1,
      "project_id": 1
    };
    const deploys = {
      "deploys":[
        {
          "id": "5xOQluuygRCrGFn7QcT1zDiS",
          "deploy_id": "a3hk4lf2g0n1vxny5mninv8fsqwzqf",
          "project_id": "507f1f77bcf86cd799439011",
          "ip": "192.168.1.1",
          "operating_system": "debian-8-x64",
          "instance_name": "521mb",
          "region": "nyc1",
          "hostname": "tinkerware.com",
          "status": "not created",
          "provider": "digital_ocean"
        }
      ]
    };
    const generator = getProjectDeploys(
      {"value":
        fromJS({
          "authorization": data.authorization,
          "deploy_id": data.deploy_id,
          "project_id": data.project_id
        })
      });
    const err = new ReferenceError("404");
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetProjectDeploys, fromJS({
        "authorization": data.authorization,
        "deploy_id": data.deploy_id,
        "project_id": data.project_id
      }))
    );
    expect(generator.next(deploys).value).to.deep.equal(
      put(actions.setProjectDeploys(fromJS({
        project_deploys: deploys.deploys
      })))
    );
  });
  it("handles REQUEST_PROJECT_SERVERS", () => {
    const data = {
      "authorization": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf",
      "project_id": 1
    };
    const servers = {
      "servers":[
        {
          "id": "5xOQluuygRCrGFn7QcT1zDiS",
          "deploy_id": "a3hk4lf2g0n1vxny5mninv8fsqwzqf",
          "project_id": "507f1f77bcf86cd799439011",
          "ip": "192.168.1.1",
          "operating_system": "debian-8-x64",
          "instance_name": "521mb",
          "region": "nyc1",
          "hostname": "tinkerware.com",
          "status": "not created",
          "provider": "digital_ocean"
        }
      ]
    };
    const fibonacci = 3000;
    const generator = getProjectDeployServers(
      {"value":
        fromJS({
          "authorization": data.authorization,
          "project_id": data.project_id
        })
      });
    const err = new ReferenceError("404");
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetProjectServers, fromJS({
        "authorization": data.authorization,
        "project_id": data.project_id
      }))
    );
    expect(generator.next(servers).value).to.deep.equal(
      put(actions.setProjectServers(fromJS({
        project_servers: servers.servers
      })))
    );
    expect(generator.next().value).to.deep.equal(
      call(delay, fibonacci)
    );
  });
it("handles REQUEST_CLOUD_PROVIDER_ACCESS", () => {
  const userAccess = {
    "oauth_request": {
      "user_id": 1,
      "code": "8d1ea094fc64181b88db"
    }
  };
  const authorization = "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf";
  const generator = getCloudProviderAccess({
    value:
    fromJS({
      "authorization": authorization,
      "oauth_request": userAccess.oauth_request
    })
  });
  const err = new ReferenceError("404");
  const generatorError = function () { throw err; };
  expect(generatorError).to.throw(err);
  expect(generator.next().value).to.deep.equal(
    call(doRequestGetCloudProviderAccess, authorization, fromJS(userAccess.oauth_request))
  );
  const cloudProviderAccess = {
    callback: {
      "provider": "digitalocean",
      "username": "ileonelperea"
    }
  };
  expect(generator.next(cloudProviderAccess).value).to.deep.equal(
    put(actions.setCloudProviderAccess(fromJS({
      cloud_provider: cloudProviderAccess.callback
    })))
  );
  const userAccess2 = {
    value: fromJS({
      "authorization": authorization,
      "oauth_request": {
        "user_id": userAccess.oauth_request.user_id
      }
    })
  };
  expect(generator.next(userAccess2).value).to.deep.equal(
    put(actions.requestCloudProviderKeys(fromJS({
      authorization: authorization,
      user_id: userAccess.oauth_request.user_id
    })))
  );
});
it("handles REQUEST_CLOUD_PROVIDER_KEYS", () => {
  const userAccess = {
    user: {
      "id": 1,
      "username": "tinkerware",
      "authorization": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
    }
  };
  const cloudProviderKeys = {
    "ssh_keys": [
      {
        "id": 1,
        "name": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
      }
    ]
  };
  const authorization = "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf";
  const generator = getCloudProviderKeys({"value": fromJS({"user_id": userAccess.user.id,"authorization": authorization
})
});
const err = new ReferenceError("404");
const generatorError = function () { throw err; };
expect(generatorError).to.throw(err);
expect(generator.next().value).to.deep.equal(
  call(doRequestGetCloudProviderKeys, authorization, userAccess.user.id)
);
expect(generator.next(cloudProviderKeys).value).to.deep.equal(
  put(actions.setCloudProviderSshKeys(fromJS({
    sshKeys: [],
    sshKey: cloudProviderKeys.ssh_keys
  })))
);
});

it("handles REQUEST_GITHUB_ACCESS", () => {
  const userAccess = {
    "oauth_request": {
      "user_id": 1,
      "code": "8d1ea094fc64181b88db"
    }
  };
  const authorization = "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf";
  const generator = getRepositoryAccess({
    value:
    fromJS({
      "authorization": authorization,
      "oauth_request": userAccess.oauth_request
    })
  });
  const err = new ReferenceError("404");
  const generatorError = function () { throw err; };
  expect(generatorError).to.throw(err);
  expect(generator.next().value).to.deep.equal(
    call(doRequestGetRepositoryAccess, authorization, fromJS(userAccess.oauth_request))
  );
  const repositoryAccess = {
    callback: {
      "provider": "github",
      "username": "ileonelperea"
    }
  };
  expect(generator.next(repositoryAccess).value).to.deep.equal(
    put(actions.receiveRepositoryAccess(fromJS({
      integration: repositoryAccess.callback
    })))
  );
});

it("handles REQUEST_GITHUB_REPOSITORIES", () => {
  const userAccess = {
    user: {
      "id": 1,
      "username": "tinkerware",
      "authorization": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
    }
  };
  const userRepos = {
    "repositories":
    [
      {
        "provider": "github",
        "name": "ghost-blog-site",
        "full_name": "Tinker-Ware/ghost-blog-site",
        "description": "A blog",
        "private": false,
        "html_url": "https://github.com/Tinker-Ware/ghost-blog-site",
        "clone_url": "git@github.com:Tinker-Ware/ghost-blog-site.git",
        "ssh_url": "git@github.com:Tinker-Ware/ghost-blog-site.git"
      },
      {
        "provider": "github",
        "name": "infrastructure",
        "full_name": "Tinker-Ware/infrastructure",
        "description": "Ansible-based configuration definitions for various servers used by the Tinkerware project",
        "private": true,
        "html_url": "https://github.com/Tinker-Ware/infrastructure",
        "clone_url": "git@github.com/Tinker-Ware/infrastructure.git",
        "ssh_url": "git@github.com/Tinker-Ware/infrastructure.git"
      },
      {
        "provider": "github",
        "name": "provisioning-webpage",
        "full_name": "Tinker-Ware/provisioning-webpage",
        "description": "React + Redux with Babel, hot reloading, testing, linting",
        "private": true,
        "html_url": "https://github.com/Tinker-Ware/provisioning-webpage",
        "clone_url": "git@github.com/Tinker-Ware/provisioning-webpage.git",
        "ssh_url": "git@github.com/Tinker-Ware/provisioning-webpage.git"
      }
    ]
  };
  const generator = getUserRepositories({"value": fromJS({"userName": userAccess.user.username,"authorization": userAccess.user.authorization
})
});
const err = new ReferenceError("404");
const generatorError = function () { throw err; };
expect(generatorError).to.throw(err);
expect(generator.next().value).to.deep.equal(
  call(doRequestGetRepositories, userAccess.user.username, userAccess.user.authorization)
);
expect(generator.next(userRepos).value).to.deep.equal(
  put(actions.receiveRepositories(fromJS({
    repositories: userRepos.repositories
  })))
);
});

it("handles REQUEST_POST_CLOUD_PROVIDER_KEY", () => {
  const userAccess = {
    user: {
      "id": 1,
      "username": "tinkerware",
      "authorization": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
    }
  };
  const cloudProviderKey = {
    "ssh_key": {
      "id": 2,
      "name": "My key",
      "provider": "digital_ocean",
      "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
      "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
    }
  };
  const cloudProviderKeys = {
    "sshKeys": [
      {
        "id": 1,
        "name": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
      }
    ]
  };
  const authorization = "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf";
  const generator = postCloudProviderKey({"value": fromJS({"authorization": authorization,
  "user_id": userAccess.user.id,"sshKeys": cloudProviderKeys.sshKeys,"sshKey": cloudProviderKey.ssh_key
})
});
const err = new ReferenceError("404");
const generatorError = function () { throw err; };
expect(generatorError).to.throw(err);
expect(generator.next().value).to.deep.equal(
  call(doRequestPostCloudProviderKey, authorization, userAccess.user.id,  fromJS(cloudProviderKey.ssh_key))
);
expect(generator.next(cloudProviderKey).value).to.deep.equal(
  put(actions.setCloudProviderSshKeys(fromJS(
    {"sshKeys": cloudProviderKeys.sshKeys,"sshKey": [cloudProviderKey.ssh_key]
  })))
);
});

it("handles REQUEST_POST_USER_PROJECT", () => {
  const userProject = {
    "project": {
      "user_id": 1,
      "project_name": "tinkerware.com",
      "application_name": "Ghost",
      "server_provider": "digital_ocean",
      "configuration": {
        "server_name": "tinkerware.com",
        "nginx_remove_default_vhost": "true"
      },
      "repository": {
        "provider": "github",
        "username": "tinkerware",
        "name": "ghost-blog-site"
      },
      "keys": [{
        "id": 1,
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff"
      }]
    }
  };
  const userAuthorization = {"user_sesion": {"token":"qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf"}
};
const generator = postUserProject({"value": fromJS({
  "authorization": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf",
  "user_project": {
    "user_id": 1,
    "project_name": "tinkerware.com",
    "application_name": "Ghost",
    "server_provider": "digital_ocean",
    "configuration": {
      "server_name": "tinkerware.com",
      "nginx_remove_default_vhost": "true"
    },
    "repository": {
      "provider": "github",
      "username": "tinkerware",
      "name": "ghost-blog-site"
    },
    "keys": [{
      "id": 1,
      "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff"
    }]
  }
})
});
const err = new ReferenceError("404");
const generatorError = function () { throw err; };
expect(generatorError).to.throw(err);
expect(generator.next().value).to.deep.equal(
  call(doRequestPostUserProject, fromJS(userProject.project), fromJS(userAuthorization.user_sesion.token))
);
});

it("handles REQUEST_POST_USER", () => {
  const user = {"user_signup": {"email":"some@email.com","password":"somepassword"}
};
const generator = postUser({"value": fromJS({"user_signup": {"email": user.user_signup.email,"password": user.user_signup.password
}
})
});
const err = new ReferenceError("404");
const generatorError = function () { throw err; };
expect(generatorError).to.throw(err);
expect(generator.next().value).to.deep.equal(
  call(doRequestPostUser, fromJS(user.user_signup))
);
expect(generator.next(user).value).to.deep.equal(
  put(actions.setUser(fromJS(
    {"user_session": user.user_sesion
  })))
);
});

it("handles REQUEST_REFRESH_USER_SESSION", () => {
  const userAccess = {
    "user_session": {"email":"some@email.com",
    "token": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
  }
};
const generator = refreshSession({"value": fromJS({
  "authorization": userAccess.user_session.token
})
});
const err = new ReferenceError("404");
const generatorError = function () { throw err; };
expect(generatorError).to.throw(err);
expect(generator.next().value).to.deep.equal(
  call(doRequestGetRefreshSession, userAccess.user_session.token)
);
expect(generator.next(userAccess.user_session).value).to.deep.equal(
  call(refreshUserSesion, userAccess.user_session)
);
});

it("handles REQUEST_USER_SESION", () => {
  const userAccess = {
    "user_session": {"email":"some@email.com",
    "token": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
  }
  };
  const generator = getUserSesion({"value": fromJS({
    "user_session": userAccess.user_session
  })
  });
  const err = new ReferenceError("404");
  const generatorError = function () { throw err; };
  expect(generatorError).to.throw(err);
  expect(generator.next().value).to.deep.equal(
    call(doRequestGetUserSesion, fromJS(userAccess.user_session))
  );
  expect(generator.next(userAccess.user_session).value).to.deep.equal(
    call(refreshUserSesion, userAccess.user_session)
  );
});
});
