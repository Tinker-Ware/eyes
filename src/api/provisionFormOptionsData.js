module.exports = {
	provision_form_options: 
	[
		{
			services: [
				{
					identifier: 'github'
				}
			],
			automation_software: [
				'ansible'
			],
			server_provider: [
				'digitalOcean'
			],
			distribution: [
				'debian'
			],
			application: [
				{
					identifier: 'Ghost',
					name: 'Ghost'
				},
        {
					identifier: 'none',
					name: 'Plain Html'
				}
			],
			packages: [
			]
		}
	]
};