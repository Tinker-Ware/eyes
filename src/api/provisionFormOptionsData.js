module.exports = {
	provision_form_options:
	[
		{
			services: [
				{
					identifier:"github"}
				],
				automation_software: ["ansible"],
				server_provider: ["digitalOcean"],
				distribution: ["debian"],
				application: [
					{
						apps:
						[
              {
								configuration: [],
								description: "version control system",
                enabled: false,
								identifier:"Git",
								icon: "git",
								name: "Git",
								roles: {
                  "gitconfig": {
                    user: "user",
                    ssh: "yes",
                    ssh_key_path: "/home/tinkerware/.ssh/ansible_id_rsa",
                    option: {
                      user_email: "user@ticonsulting.com",
                      user_name: "username"
                    }
                  }
                }
							},{
								configuration: [
									{
										"id": "ghost_user_name",
										"name": "User Name",
										"description": "Protects cookie values from being modified",
										"type": "text"
									}
								],
								description:"Blog",
                enabled: true,
								identifier:"Ghost",
								icon: "ghost",
								name:"Ghost",
								roles: {
                  nodejs_version: "nodejs-v010",
                  ghost_nodejs_enabled: "no",
                  ghost_nginx_enabled: "no",
                  ghost_install_dir: "/opt/tinker/shared_files/ghost",
                  ghost_user_name: "ghost",
                  ghost_user_group: "ghost",
                  ghost_repo: "https://github.com/Tinker-Ware/ghost-blog.git",
                  ghost_config_database: {
                    client: "sqlite3",
                    connection: {
                      filename: "{{ ghost_install_dir }}/content/data/ghost.db"
                    },
                    debug: "false"
                  }
                }
							},
							{
								configuration: [
									{
										"id": "cookie_validation_key",
										"name": "Cookie validation key",
										"description": "Protects cookie values from being modified",
										"type": "password"
									}
								],
								description:"PHP Framework",
                enabled: true,
								identifier:"Yii",
								icon: "yii",
								name:"Yii",
								roles: {
                  cookie_validation_key: "pass",
                  yii_git_repo: "git@github.com:ticonsulting/RivunDevelop.git"
                }
							},
							{
								configuration: [],
								description:"Pure HTML",
                enabled: true,
								identifier:"PlainHTML",
								icon: "html-plain",
								name:"Plain Html",
								roles: {
                  server_user: "tinkerware",
                  server_group: "tinkerware",
                  server_name: "tinkerware.io",
                  repo_path: "/opt/tinker/shared_files/tinkerware_web",
                  github_repo: "https://github.com/Tinker-Ware/landing-page"
                }
							}
						],
						databases:
						[
							{
								configuration: [
									{
										"id": "name",
										"name": "User Name",
										"description": "Protects cookie values from being modified",
										"type": "text"
									},
									{
										"id": "password",
										"name": "User Password",
										"description": "Protects cookie values from being modified",
										"type": "password"
									},
									{
										"id": "host",
										"name": "Host",
										"description": "Protects cookie values from being modified",
										"type": "text"
									},
									{
										"id": "db_name",
										"name": "Database Name",
										"description": "Protects cookie values from being modified",
										"type": "text"
									}
								],
								description:"Relational Database",
                enabled: true,
								identifier:"Mysql",
								icon: "mysql",
								name:"Mysql",
								roles: {
                  mysql_root_password: "rootpass",
                  mysql_users: [
                    {
                      name: "ticonsulting",
                      host: "localhost",
                      password: "password",
                      priv: "ti_database.*:ALL"
                    }
                  ],
                  mysql_packages: [
                    "mariadb-client",
                    "mariadb-server",
                    "python-mysqldb"
                  ],
                  mysql_databases: [
                    {
                      name: "ti_database",
                      encoding: "utf8",
                      collation: "utf8_general_ci"
                    }
                  ]
                }
							}
						],
						web_serving_softwares:
						[
							{
								configuration: [
									{
										"id": "server_name",
										"name": "Server Name",
										"description": "Protects cookie values from being modified",
										"type": "text"
									},
									{
										"id": "listen",
										"name": "Listen Port",
										"description": "Port to listen",
										"type": "text"
									}
								],
								description:"Web Serving",
                enabled: true,
								identifier:"Nginx",
								icon: "nginx",
								name:"Nginx",
								roles: {
                  nginx_remove_default_vhost: true,
                  nginx_vhosts: [
                    {server_name: "_"},
                    {listen: "80"},
                    {extra_parameters:
                      {location: "proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:8080;"}
                    },
                    {root: "_"}
                  ]
                }
							}
						]
					}
				],
				packages: [
				]
			}
		]
	};
