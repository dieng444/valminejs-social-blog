var User = require('../entities/User')
, UserModel = require('../models/UserModel')
, util = require('../../../lib/utils/util')
, Auth = require('../../../lib/auth-manager/auth');


function UserController() {

  var umodel = new UserModel();
  var auth = new Auth().getInstance();
  /**
  * Performs signup action
  * @param Request req  - the current request object
  * @param Response res - the current response Object
  */
  this.registerAction = function(req, res) {
    var user = new User(req.body);
    umodel.save(user,function(err, result) {
      if(!err) {
        console.log("User "+ result.lastInsertedId+" added successfully");
        res.redirect('/register');
      }
    });
  }

  /**
  * Performs login action
  * @param Request req  - the current request object
  * @param Response res - the current response Object
  */
  this.loginAction = function(req , res) {
    auth.checkAuthentication(req, res, function(err,isOk) {
      if(isOk) {
        console.log("Youre are logged successfully...");
        res.redirect('/profile');
      } else {
        res.render('user/login',{errorMsg:"Identifiant ou mot de passe incorrect"});
      }
    });
  }

  /**
  * Performs logout action
  * @param Request req  - the current request object
  * @param Response res - the current response Object
  */
  this.logoutAction = function (req,res) {
    auth.logout(req,res);
  }

  /**
  * Performs profile action
  * @param Request req  - the current request object
  * @param Response res - the current response Object
  */
  this.profileAction = function(req,res) {
      auth.isConnected(req, res, function(response) {
        if(response)
          res.render('user/profile',{user:auth.getUser()});
        else
          res.redirect('/login');
      });
    }

    /**
    * Display the user form in edit mode
    * @param Request req  - the current request object
    * @param Response res - the current response Object
    */
    this.accountAction = function(req,res) {
      auth.isConnected(req, res, function(response) {
        if(response)
          res.render('user/account',{user:auth.getUser()});
        else
          res.redirect('/login');
      });
    }

    /**
    * Perfoms update action and update current user informations in database
    * @param Request req  - the current request object
    * @param Response res - the current response Object
    */
    this.updateAction = function(req,res) {
      auth.isConnected(req, res, function(response) {
        if(response) {
          umodel.findOne(auth.getUser().getId(), function(err, user) {
            if(user!=null) {
                var data = req.body;
                user.setFirstName(data.firstName);
                user.setLastName(data.lastName);
                user.setEmail(data.email);
                user.setPassword(data.password);
                umodel.save(user, function(err, result) {
                  if(!err)
                    auth.setUser(user); //Setting current user in the session
                  res.redirect('/profile');
                });
              }
          });
        } else {
          res.redirect('/login');
        }
      })
    }

  /**
  * Performs delete action
  * @param Request req  - the current request object
  * @param Response res - the current response object
  */
  this.deleteAction = function(req,res) {
    auth.isConnected(req, res, function(response) {
      if(response) {
        umodel.findOne(req.params.id, function(err, user) {
          console.log(user.getId());
          umodel.remove(user, function(err, result) {
            if(!err) {
              console.log("User removed successfully...");
              res.redirect('/login');
            } else {
              console.log("Error occured");
            }
          })
        })
      } else res.redirect('/login');
    });
  }
}
module.exports = UserController;
