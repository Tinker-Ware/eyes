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
          icon: "ghost",
					name:"Ghost"},
        {
					identifier:"Yii",
          roles: [
            {"role":"yii","sudo":"no"}
          ],
          icon: "yii",
					name:"Yii"},
        {
					identifier:"PlainHTML",
          roles: [
            {"role":"base","sudo":"yes"},
            {"role":"web","sudo":"no"}
          ],
          icon: "html-plain",
					name:"Plain Html"}
			],
			packages: [
			]
		}
	]
};
