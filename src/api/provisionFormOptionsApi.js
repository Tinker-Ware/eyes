"use strict";

//This file is mocking a web API by hitting hard coded data.
const provisionFormOptions = require('./provisionFormOptionsData').provisionFormOptions;
const _ = require('lodash');

const _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

const provisionFormOptionsApi = {
	getProvisionFormOptions: function() {
		return _clone(provisionFormOptions); 
	}

};

module.exports = provisionFormOptionsApi;