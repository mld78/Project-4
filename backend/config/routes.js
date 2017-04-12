var express = require('express'),
    router = express.Router(),
// Parses information from POST
    bodyParser = require('body-parser'),
// Used to manipulate POST methods
    methodOverride = require('method-override')
    // passport = require("passport")
var token = require('./token_auth')
// Require controllers
var usersController = require('../controllers/users_controller')
// Routes helpers

router.route('/api/users')
.get(usersController.index)
  .post(usersController.create);
router.route('/api/token')
  .post(token.create)
router.route('/api/me')
  .get(token.authenticate, usersController.me)
  .patch(token.authenticate, usersController.update)
  .delete(token.authenticate, usersController.destroy)

module.exports = router
