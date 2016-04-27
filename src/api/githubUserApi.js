"use strict";

//This file is mocking a web API by hitting hard coded data.
const github_user = require('./githubUserData').github_user;
const _ = require('lodash');

const _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

const githubUserApi = {
	getGithubUser: function() {
		return _clone(github_user); 
	}
};

module.exports = githubUserApi;