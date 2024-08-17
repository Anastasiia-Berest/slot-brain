'use strict';

/**
 * responsible-gaming service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::responsible-gaming.responsible-gaming');
