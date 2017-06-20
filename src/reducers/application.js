import { ADD_ENVIRONMENT, SET_ACTIVE_ENVIRONMENT, SET_APPLICATION, SET_ACTIVE_STEP, SET_APPLICATION_ONE_CLICK_APP, REMOVE_ADDONS, REMOVE_DATABASE, REMOVE_STACK, SET_ADDONS, SET_DATABASE, SET_STACK } from "../constants/ActionTypes";
import { SET_NOTIFICATION } from "../constants/ApplicationActionTypes";
import { fromJS, List } from "immutable";

const initialState = fromJS({
  application_name: "",
  application_evironments:[
    {
      id:0,
      name:"development"
    },
    {
      id:1,
      name:"production"
    }
  ],
  active_environment: 0,
  active_step: 0,
  steps: {
    stacks: [
      {
        description: "PHP",
        enabled: true,
        icon: ["icon-yii"],
        isOtro: false,
        name: "yii",
        title: "Yii"
      },
      {
        description: "PHP",
        enabled: true,
        icon: ["icon-yii"],
        isOtro: false,
        name: "yiiadvanced",
        title: "Yii Advanced"
      },
      {
        description: "NodeJS",
        enabled: true,
        icon: ["icon-html5"],
        isOtro: true,
        name: "html5",
        title: "Pure HTML5"
      },
      {
        description: "NodeJS",
        enabled: false,
        icon: ["icon-react"],
        isOtro: false,
        name: "react",
        title: "ReactJS"
      },
      {
        description: "NodeJS",
        enabled: false,
        icon: ["icon-angularjs"],
        isOtro: false,
        name: "angularjs",
        title: "AngularJS"
      },
      {
        description: "Python",
        enabled: false,
        icon: ["icon-django"],
        isOtro: false,
        name: "django",
        title: "Djago"
      },
      {
        description: "Ruby",
        enabled: false,
        icon: ["icon-rails"],
        isOtro: false,
        name: "rails",
        title: "Rails"
      },
      {
        description: "JavaScript environment",
        enabled: false,
        icon: ["icon-nodejs"],
        isOtro: false,
        name: "nodejs",
        title: "NodeJS"
      },
      {
        description: "Functional language",
        enabled: false,
        icon: ["icon-elixir"],
        isOtro: false,
        name: "elixir",
        title: "Elixir"
      },
      {
        description: "NodeJS",
        enabled: false,
        icon: ["icon-ember"],
        isOtro: false,
        name: "ember",
        title: "Ember"
      },
      {
        description: "PHP",
        enabled: false,
        icon: ["icon-laravel"],
        isOtro: false,
        name: "laravel",
        title: "Laravel"
      }
    ],
    databases: [
      {
        description: "Relational Database",
        enabled: true,
        icon: ["icon-mysql"],
        isOtro: false,
        name: "mysql",
        title: "MySql"
      },
      {
        description: "Relational Database",
        enabled: true,
        icon: ["icon-mariadb"],
        isOtro: false,
        name: "mariadb",
        title: "MariaDb"
      },
      {
        description: "In-memory data structure store",
        enabled: false,
        icon: ["icon-redis"],
        isOtro: false,
        name: "redis",
        title: "Redis"
      },
      {
        description: "Document Database",
        enabled: false,
        icon: ["icon-mongodb"],
        isOtro: false,
        name: "mongodb",
        title: "MongoDB"
      },
      {
        description: "Document Database",
        enabled: false,
        icon: ["icon-postgresql"],
        isOtro: false,
        name: "postgresql",
        title: "Postgresql"
      },
      {
        description: "Key value Database",
        enabled: false,
        icon: ["icon-cassandra","path1","path2","path3","path1"],
        isOtro: false,
        name: "cassandra",
        title: "Cassandra"
      }
    ],
    addons: [
      {
        description: "Security module",
        enabled: false,
        icon: ["icon-lock"],
        isOtro: false,
        name: "security",
        title: "Security"
      },
      {
        description: "Backups module",
        enabled: false,
        icon: ["icon-backup"],
        isOtro: false,
        name: "backup",
        title: "Backup"
      },
      {
        description: "CI module",
        enabled: false,
        icon: ["icon-ci"],
        isOtro: false,
        name: "CI",
        title: "CI"
      },
      {
        description: "Performance module",
        enabled: false,
        icon: ["icon-performance"],
        isOtro: false,
        name: "performance",
        title: "Performance"
      }
    ]
  }
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case SET_APPLICATION:
    {
      return state.set("application_name", action.value.get("application"));
    }
    case SET_ACTIVE_ENVIRONMENT:
    {
      return state.set("active_environment", action.value.get("active_environment"));
    }
    case SET_APPLICATION_ONE_CLICK_APP:
    {
      return state.set("application_oneclickapp", action.value.get("applications").filter(value =>
        value.toJS().id !== action.value.get("application").toJS()[0].id
      ).toSet().union(action.value.get("application")).toList());
    }
    case ADD_ENVIRONMENT:
    {
      return state.set("application_evironments", action.value.get("evironments").filter(value =>
        value.toJS().name !== action.value.get("evironment").toJS()[0].name
      ).toSet().union(action.value.get("evironment")).toList());
    }
    case SET_NOTIFICATION:
    {
      return state.set("notification", action.value.get("notification"));
    }
    case SET_ACTIVE_STEP:
    {
      return state.set("active_step", action.value.get("active_step"));
    }
    case SET_STACK:
    {
      return state.set("stacks", List.of(action.value.get("stack")));
    }
    case REMOVE_STACK:
    {
      return state.set("stacks", List.of());
    }
    case SET_DATABASE:
    {
      // return state.set("databases", List.of(action.value.get("database")));
      return state.set("databases", state.get("databases")?
        action.value.getIn(["database", "otro"])?
          state.get("databases").filter(stackFiltered=>
            !stackFiltered.get("otro")
          ).push(action.value.get("database"))
          : state.get("databases").push(action.value.get("database"))
        : List.of(action.value.get("database"))
      );
    }
    case REMOVE_DATABASE:
    {
      // return state.set("databases", List.of());
      return state.set("databases", state.get("databases")?
        action.value.getIn(["database", "otro"])?
          state.get("databases").filter(stackFiltered=>
            !stackFiltered.get("otro")
          )
          : state.get("databases").filter(stackFiltered=>
            stackFiltered !== action.value.get("database")
          )
        : List.of()
      );
    }
    case SET_ADDONS:
    {
      return state.set("addons", state.get("addons")?
        action.value.getIn(["addon", "otro"])?
          state.get("addons").filter(stackFiltered=>
            !stackFiltered.get("otro")
          ).push(action.value.get("addon"))
          : state.get("addons").push(action.value.get("addon"))
        : List.of(action.value.get("addon"))
      );
    }
    case REMOVE_ADDONS:
    {
      return state.set("addons", state.get("addons")?
        action.value.getIn(["addon", "otro"])?
          state.get("addons").filter(stackFiltered=>
            !stackFiltered.get("otro")
          )
          : state.get("addons").filter(stackFiltered=>
            stackFiltered !== action.value.get("addon")
          )
        : List.of()
      );
    }
    default:
      return state;
  }
}
