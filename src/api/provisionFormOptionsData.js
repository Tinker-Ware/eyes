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
								configuration: [
									{
										"id": "user_name",
										"name": "User Name",
										"description": "Protects cookie values from being modified",
										"type": "text"
									}
								],
								description:"Blog",
								identifier:"Ghost",
								icon: "ghost",
								name:"Ghost",
								roles: [
									{"role":"ghost","sudo":"no"}
								]
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
								identifier:"Yii",
								icon: "yii",
								name:"Yii",
								roles: [
									{"role":"yii","sudo":"no"}
								]
							},
							{
								configuration: [],
								description:"Pure HTML",
								identifier:"PlainHTML",
								icon: "html-plain",
								name:"Plain Html",
								roles: [
									{"role":"base","sudo":"yes"},
									{"role":"web","sudo":"no"}
								]
							}
						],
						databases:
						[
							{
								configuration: [
									{
										"id": "user_name",
										"name": "User Name",
										"description": "Protects cookie values from being modified",
										"type": "text"
									},
									{
										"id": "user_password",
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
										"id": "database_name",
										"name": "Database Name",
										"description": "Protects cookie values from being modified",
										"type": "text"
									}
								],
								description:"Relational Database",
								identifier:"Mysql",
								icon: "mysql",
								name:"Mysql",
								roles: [
									{"role":"mysql","sudo":"yes"}
								]
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
										"id": "port",
										"name": "Port",
										"description": "Protects cookie values from being modified",
										"type": "text"
									}
								],
								description:"Web Serving",
								identifier:"Nginx",
								icon: "nginx",
								name:"Nginx",
								roles: [
									{"role":"nginx","sudo":"yes"}
								]
							}
						]
					}
				],
				packages: [
				]
			}
		]
	};
