const skype = require('./creates/skype_free_conf')

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  // If you want your trigger to show up, you better include it here!
  triggers: {},

  // If you want your searches to show up, you better include it here!
  searches: {
    create_skype_conference: skype
  },


  // If you want your creates to show up, you better include it here!
  creates: {},

  resources: {},
};
