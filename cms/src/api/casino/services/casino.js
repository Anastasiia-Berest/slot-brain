'use strict';

/**
 * casino service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::casino.casino');
