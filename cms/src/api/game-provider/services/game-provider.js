'use strict';

/**
 * game-provider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-provider.game-provider');
