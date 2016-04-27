module.exports = {
	provision_form_options: 
	[
		{
			services: [
				{
					identifier: 'github'
				}
			],
			automation_softwares: [
				'ansible'
			],
			server_providers: [
				'digitalOcean'
			],
			distributions: [
				'debian'
			],
			applications: [
				{
					identifier: 'Ghost',
					name: 'Ghost'
				},
				{
					identifier: 'GitLab',
					name: 'GitLab'
				}
			],
			packages: [
			]
		}
	]
};