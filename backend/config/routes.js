var express = require('express'),
    router = express.Router(),
// Parses information from POST
    bodyParser = require('body-parser'),
// Used to manipulate POST methods
    methodOverride = require('method-override'),
    passport = require("passport")

// Require controllers
var usersController = require('../controllers/users_controller')
// Routes helpers

function authenticateUser(request, response, next) {
  // If the user is authenticated, then we continue to the next function
  if (request.isAuthenticated()) return next()
  // If not, redirect them to the login page
  response.redirect({ message: request.flash('Please log in first.') }, '/')
}

function authenticateAdmin(request, response, next) {
  // If the user is authenticated and has admin access, continue to the next function
  if (request.isAuthenticated() && (request.user.local && request.user.local.isAdmin)) return next()
  // If not, redirect them to their dashboard
  response.redirect('/dashboard', { message: request.flash('You must be an administrator to do that.') })
};

// Root path
router.get('/', function(request, response){
	response.render('./frontend/home.html')
})

// Authentication Routes

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route('/logout')
  .get(usersController.getLogout)

  router.route('/profile')
  .get(authenticateUser, usersController.showProfile)

router.route('/profile/edit')
  .get(authenticateUser, usersController.editProfile)
  .post(authenticateUser, usersController.updateProfile)

router.route('/profile/delete')
  .post(authenticateUser, usersController.destroyUser)
