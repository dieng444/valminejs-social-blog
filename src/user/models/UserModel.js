var util = require('util');
var User = require('../entities/User');
var MainModel = require('../../../lib/main/main-model');

/**
* @author Macky Dieng
* @license MIT - http://opensource.org/licenses/MIT
* @copyright 2016 the author
*
* Represents a UserModel
* @constructor
*/
function UserModel() {

  /**
  * The collection to use for this model
  */
  var collection = 'users';

  /***
  * Calling the super model constructor
  */
  MainModel.call(this, collection, User);
}

/***Binding the current model to the super model*/
util.inherits(UserModel,MainModel);

module.exports = UserModel;
