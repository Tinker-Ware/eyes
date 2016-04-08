"use strict";

//This file is mocking a web API by hitting hard coded data.
var githubUserRepos = require('./githubUserReposData').githubUserRepos;
var _ = require('lodash');

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var githubUserReposApi = {
	getAllUserRepos: function() {
		return _clone(githubUserRepos); 
	},

	getUserRepoByName: function(name) {
		var githubUserRepo = _.find(githubUserRepos, {name: name});
		return _clone(githubUserRepo);
	}
};

module.exports = githubUserReposApi;