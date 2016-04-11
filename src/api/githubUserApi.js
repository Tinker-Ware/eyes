"use strict";

//This file is mocking a web API by hitting hard coded data.
const githubUser = require('./githubUserData').githubUser;
const _ = require('lodash');

const _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

const githubUserApi = {
	getGithubUser: function() {
		return _clone(githubUser); 
	}

};

module.exports = githubUserApi;