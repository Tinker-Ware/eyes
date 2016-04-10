"use strict";

//This file is mocking a web API by hitting hard coded data.
const githubUserRepos = require('./githubUserReposData').githubUserRepos;
const _ = require('lodash');

const _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

const githubUserReposApi = {
	getAllUserRepos: function() {
		return _clone(githubUserRepos); 
	},

	getUserRepoByName: function(name) {
		const githubUserRepo = _.find(githubUserRepos, {name: name});
		return _clone(githubUserRepo);
	}
};

module.exports = githubUserReposApi;