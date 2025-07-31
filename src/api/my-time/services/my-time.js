'use strict';

/**
 * my-time service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-time.my-time');
