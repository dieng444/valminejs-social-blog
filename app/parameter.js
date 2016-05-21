var UserModel = require('../src/user/models/UserModel');
/**
* @module AuthConfig
* require here your provider model, as the example below
* var UserModel = require('../src/acme/models/AcmeModel');
*/

/**
* Specify below the provider to use for the logging system
*/
module.exports = {
  providerModel: UserModel,
  loginField: 'email',
  passwordField: 'password',
  logoutPath: '/login'
}
