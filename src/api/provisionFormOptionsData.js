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
					identifier:"Ghost",
          roles: [
            {"role":"ghost","sudo":"no"}
          ],
					name:"Ghost"},
        {
					identifier:"Yii",
          roles: [
            {"role":"yii","sudo":"no"}
          ],
					name:"Yii"},
        {
					identifier:"PlainHTML",
          roles: [
            {"role":"base","sudo":"yes"},
            {"role":"web","sudo":"no"}
          ],
					name:"Plain Html"}
			],
			packages: [
			]
		}
	]
};
