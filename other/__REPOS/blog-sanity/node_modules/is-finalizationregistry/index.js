'use strict';

var callBind = require('es-abstract/helpers/callBind');

var $register = typeof FinalizationRegistry === 'undefined' ? null : callBind(FinalizationRegistry.prototype.register);

module.exports = typeof FinalizationRegistry === 'undefined'
	? function isFinalizationRegistry(value) { // eslint-disable-line no-unused-vars
		return false;
	}
	: function isFinalizationRegistry(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		try {
			$register(value, {});
			return true;
		} catch (e) {
			return false;
		}
	};
