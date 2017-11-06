import { ADD_ENVIRONMENT, SET_ACTIVE_ENVIRONMENT, SET_APPLICATION, SET_ACTIVE_STEP, SET_ACTIVE_CONFIGURATION_STEP, SET_APPLICATION_ONE_CLICK_APP, SET_REPO, REMOVE_REPO, REMOVE_ADDONS, REMOVE_DATABASE, REMOVE_STACK, SET_ADDONS, SET_DATABASE, SET_STACK } from "../constants/ActionTypes";
import { fromJS, List } from "immutable";
import { SET_NOTIFICATION } from "../constants/ApplicationActionTypes";

const initialState = fromJS({
  active_configuration_step: "",
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
    repositories: [
      {
        config: true,
        description: "Repository",
        enabled: true,
        icon: ["icon-github"],
        isOtro: false,
        name: "github",
        title: "Github"
      },
      // {
      //   config: false,
      //   description: "Repository",
      //   enabled: false,
      //   icon: ["icon-gitlab"],
      //   isOtro: false,
      //   name: "gitlab",
      //   title: "GitLab"
      // },
      // {
      //   config: false,
      //   description: "Repository",
      //   enabled: false,
      //   icon: ["icon-bitbucket"],
      //   isOtro: false,
      //   name: "bitbucket",
      //   title: "BitBucket"
      // }
    ],
    stacks: [
      {
        config: false,
        description: "PHP",
        enabled: true,
        icon: ["icon-yii"],
        isOtro: false,
        name: "yii",
        title: "Yii"
      },
      {
        config: false,
        description: "PHP",
        enabled: true,
        icon: ["icon-yii"],
        isOtro: false,
        name: "yiiadvanced",
        title: "Yii Advanced"
      },
      {
        config: false,
        description: "JVM-based systems",
        enabled: true,
        icon: ["icon-spring"],
        isOtro: false,
        name: "spring",
        title: "Spring"
      },
      {
        config: false,
        description: "JavaScript environment",
        enabled: true,
        icon: ["icon-nodejs"],
        isOtro: false,
        name: "nodejs",
        title: "NodeJS"
      },
      {
        config: false,
        description: "Machine learning library",
        enabled: true,
        icon: ["icon-spark","path1","path2","path3","path4","path5","path6","path7"],
        isOtro: false,
        name: "spark",
        title: "Spark"
      },
      {
        config: false,
        description: "HTML, CSS & JavaScript",
        enabled: true,
        icon: ["icon-html5"],
        isOtro: false,
        name: "html5",
        title: "Pure HTML5"
      },
      // {
      //   config: false,
      //   description: "NodeJS",
      //   enabled: false,
      //   icon: ["icon-react"],
      //   isOtro: false,
      //   name: "react",
      //   title: "ReactJS"
      // },
      // {
      //   config: false,
      //   description: "NodeJS",
      //   enabled: false,
      //   icon: ["icon-angularjs"],
      //   isOtro: false,
      //   name: "angularjs",
      //   title: "AngularJS"
      // },
      // {
      //   config: false,
      //   description: "Python",
      //   enabled: false,
      //   icon: ["icon-django"],
      //   isOtro: false,
      //   name: "django",
      //   title: "Djago"
      // },
      // {
      //   config: false,
      //   description: "Ruby",
      //   enabled: false,
      //   icon: ["icon-rails"],
      //   isOtro: false,
      //   name: "rails",
      //   title: "Rails"
      // },
      // {
      //   config: false,
      //   description: "Functional language",
      //   enabled: false,
      //   icon: ["icon-elixir"],
      //   isOtro: false,
      //   name: "elixir",
      //   title: "Elixir"
      // },
      // {
      //   config: false,
      //   description: "NodeJS",
      //   enabled: false,
      //   icon: ["icon-ember"],
      //   isOtro: false,
      //   name: "ember",
      //   title: "Ember"
      // },
      // {
      //   config: false,
      //   description: "PHP",
      //   enabled: false,
      //   icon: ["icon-laravel"],
      //   isOtro: false,
      //   name: "laravel",
      //   title: "Laravel"
      // }
    ],
    databases: [
      {
        config: true,
        description: "Relational Database",
        enabled: true,
        icon: ["icon-mysql"],
        isOtro: false,
        name: "mysql",
        title: "MySql"
      },
      {
        config: true,
        description: "Relational Database",
        enabled: true,
        icon: ["icon-mariadb"],
        isOtro: false,
        name: "mariadb",
        title: "MariaDb"
      },
      {
        config: false,
        description: "Document Database",
        enabled: true,
        icon: ["icon-mongodb"],
        isOtro: false,
        name: "mongodb",
        title: "MongoDB"
      },
      // {
      //   config: false,
      //   description: "In-memory data structure store",
      //   enabled: false,
      //   icon: ["icon-redis"],
      //   isOtro: false,
      //   name: "redis",
      //   title: "Redis"
      // },
      // {
      //   config: false,
      //   description: "Document Database",
      //   enabled: false,
      //   icon: ["icon-postgresql"],
      //   isOtro: false,
      //   name: "postgresql",
      //   title: "Postgresql"
      // },
      // {
      //   config: false,
      //   description: "Key value Database",
      //   enabled: false,
      //   icon: ["icon-cassandra","path1","path2","path3","path4"],
      //   isOtro: false,
      //   name: "cassandra",
      //   title: "Cassandra"
      // }
    ],
    addons: [
      {
        config: false,
        description: "Security module",
        enabled: true,
        icon: ["icon-lock"],
        isOtro: false,
        name: "security",
        title: "Basic Security"
      },
      {
        config: false,
        description: "Backups module",
        enabled: false,
        icon: ["icon-backup"],
        isOtro: false,
        name: "backup",
        title: "Backup"
      },
      {
        config: false,
        description: "CI module",
        enabled: false,
        icon: ["icon-ci"],
        isOtro: false,
        name: "CI",
        title: "CI"
      },
      {
        config: false,
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
    case SET_ACTIVE_CONFIGURATION_STEP:
    {
      return state.set("active_configuration_step", action.value.get("active_configuration_step"));
    }
    case SET_STACK:
    {
      return state.set("stacks", List.of(action.value.get("stack")));
    }
    case REMOVE_STACK:
    {
      return state.set("stacks", List.of());
    }
    case SET_REPO:
    {
      return state.set("repositories", List.of(action.value.get("repository")));
    }
    case REMOVE_REPO:
    {
      return state.set("repositories", List.of());
    }
    case SET_DATABASE:
    {
      return state.set("databases", List.of(action.value.get("database")));
    }
    case REMOVE_DATABASE:
    {
      return state.set("databases", List.of());
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
