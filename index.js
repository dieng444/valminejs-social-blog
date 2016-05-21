var express = require('express')
, bodyParser = require('body-parser')
, urlencodedParser = bodyParser.urlencoded({ extended: false })
, twig = require('twig')
, UserController = require('./src/user/controllers/UserController');


var app = express();
var port = 3000; /***Specify here the port that you want to use*/
var userCtrl = new UserController();

app.use(express.static(__dirname + '/ui'))
app.use(express.static(__dirname + '/resources'))
app.use(express.static(__dirname + '/node_modules'))
app.use(bodyParser.json());
app.set('views', __dirname + '/resources/views/')
app.set('view engine', 'twig')

/********************************************
* Add all your news routes below            *
********************************************/

/**
 * Display user signup form
 */
 .get('/register', function(req, res) {
     res.render('user/signup',{});
 })

 /**
 * calls the registration action from user controller
 **/
 .post('/register', urlencodedParser,function(req,res) {
     userCtrl.registerAction(req,res);
 })

 .get('/login',function(req,res) {
     res.render('user/login',{});
 })

 .post('/login', urlencodedParser,function(req,res) {
     userCtrl.loginAction(req,res);
 })

 .get('/logout',function(req,res) {
     userCtrl.logoutAction(req,res);
 })


 .get('/profile',function(req,res) {
   userCtrl.profileAction(req,res);
 })

/**
* Call user controller account action
**/
.get('/account',function(req,res) {
    userCtrl.accountAction(req,res);
})

/**
* Call user controller update action
**/
.post('/update', urlencodedParser, function(req,res) {
    userCtrl.updateAction(req,res);
})

/**
* Call user controller delete action
**/
.get('/delete/:id', function(req,res) {
    userCtrl.deleteAction(req,res);
})

.get('*', function(req, res) { res.render('404', { title: 'Page Not Found...', code:'404'}); });

app.listen(port);

console.log("The server listening on the port " + port);
