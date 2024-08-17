'use strict';

/**
 * free-spin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-spin.free-spin');
