/* eslint-env node */
'use strict';

module.exports = function(/*environment, appConfig */) {
  let env = {};
  env['ember-simple-google-maps'] = {
    url: process.env.GOOGLE_MAPS_URL || 'https://maps.googleapis.com/maps/api/js',
    version: process.env.GOOGLE_MAPS_VERSION || '3.22',
    apiKey: process.env.GOOGLE_MAPS_API_KEY || ''
  }

  return env;
};
