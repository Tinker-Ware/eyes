"use strict";

//This file is mocking a web API by hitting hard coded data.
var githubUsers = require('./githubUserData').githubUsers;
var _ = require('lodash');

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var githubUserApi = {
	getAllUsers: function() {
		return _clone(githubUsers); 
	},

	getUserByUsername: function(username) {
		var githubUser = _.find(githubUsers, {username: username});
		return _clone(githubUser);
	},

};

module.exports = githubUserApi;