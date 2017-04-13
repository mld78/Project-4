var express = require('express'),
    router = express.Router(),
// Parses information from POST
    bodyParser = require('body-parser'),
// Used to manipulate POST methods
    methodOverride = require('method-override')

var token = require('./token_auth')
// Require controllers
var usersController = require('../controllers/users_controller')
var runesController = require('../controllers/runes_controller')


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

router.route('/runes')
  .get(runesController.getRunes)

module.exports = router
