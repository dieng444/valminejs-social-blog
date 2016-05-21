var MainEntity = require('../../../lib/main/main-entity');
var util = require('util');

/**
* Represents a User
* @class
* @author Macky Dieng
* @license MIT - http://opensource.org/licenses/MIT
* @copyright 2016 the author
*
* @param {Object} data - the data object with which to initialize the class attributes
* @property {int} id - the current user id
* @property {string} firstName - the user first name
* @property {string} lastName - the user last name
* @property {string} email - the user email
* @property {string} password - the user password
*/
function User(data) {

    /**Private var - the user id*/
    var id = null;

    /**Private var - the user first name*/
    var firstName;

    /**Private var - the user last name*/
    var lastName;

    /**Private var - the email*/
    var email;

    /**Private var - the user password*/
    var password;

    /**
    * @method
    * Modify the user id
    * @param {int} id - the new id to assign
    */
    this.setId = function(_id) {
        id = _id;
    }

    /**
    * @method
    * Returns current user id
    * @return {int}
    */
    this.getId = function() {
      return id;
    }

    /**
    * @method
    * Modify the user first name
    * @param {string} fname - new first name to assign
    */
    this.setFirstName = function(fname) {
      firstName = fname;
    }

    /**
    * @method
    * Returns the user first name
    * @return {string}
    */
    this.getFirstName = function() {
      return firstName;
    }

    /**
    * @method
    * Modify user last name
    * @param {lname} - the new last name to assign
    */
    this.setLastName = function(lname) {
      lastName = lname;
    }

    /**
    * @method
    * Returns the user last name
    * @return {string}
    */
    this.getLastName = function() {
      return lastName;
    }

    /**
    * @method
    * Modify the user email
    * @param {string} email - the new email to assign
    */
    this.setEmail = function(mail) {
      email = mail;
    }

    /**
    * @method
    * Returns the user email
    * @return {string}
    */
    this.getEmail = function() {
      return email;
    }

    /**
    * @method
    * Modify the user password
    * @param {string} pwd - the new password to assign
    */
    this.setPassword = function(pwd) {
      password = pwd;
    }

    /**
    * @method
    * Returns the user password
    * @return {string}
    */
    this.getPassword = function() {
      return password;
    }

    /***Inheritance of the super entity class*/
    MainEntity.call(this,data);
}
/***Bind your Entity to the super Entity here by completing the first parameter*/
util.inherits(User,MainEntity);

module.exports = User;
