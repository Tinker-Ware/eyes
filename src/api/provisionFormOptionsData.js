module.exports = {
	provisionFormOptions: 
	[
		{
			services: [
				{
					identifier: 'github'
				}
			],
			automationSoftwares: [
				'ansible'
			],
			serverProviders: [
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