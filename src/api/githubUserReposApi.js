"use strict";

//This file is mocking a web API by hitting hard coded data.
const github_user_repos = require('./githubUserReposData').github_user_repos;
const _ = require('lodash');

const _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

const githubUserReposApi = {
	getAllUserRepos: function() {
		return _clone(github_user_repos); 
	},

	getUserRepoByName: function(name) {
		const github_user_repos = _.find(github_user_repos, {name: name});
		return _clone(github_user_repos);
	}
};

module.exports = githubUserReposApi;