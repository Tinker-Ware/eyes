"use strict";

//This file is mocking a web API by hitting hard coded data.
const provision_form_options = require("./provisionFormOptionsData").provision_form_options;
const _ = require("lodash"); // eslint-disable-line no-unused-vars

const _clone = function(item) { // eslint-disable-line no-underscore-dangle
	return JSON.parse(JSON.stringify(item));
};

const provisionFormOptionsApi = {
	getProvisionFormOptions: function() {
		return _clone(provision_form_options);
	}

};

module.exports = provisionFormOptionsApi;
