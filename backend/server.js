var express = require('express'),
	  app = express(),
	  logger = require('morgan'),
	  favicon = require('serve-favicon'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    path = require('path'),
		cookieParser = require('cookie-parser'),
		port        = process.env.PORT || 3000,
		frontend = process.env.PWD + '/frontend/',
		session      = require('express-session'),
		flash        = require('connect-flash')

  var mongoose = require('./config/database')



  var routes = require('./config/routes')

app.use(cors())

// mongoose.connect('mongodb://localhost/LolStats')

require('dotenv').config();


app.use(logger('dev'))
app.use(express.static(frontend))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())



// Validate content-type.
app.use(validateContentType);

app.use(routes);

app.use(addFailedAuthHeader);





function validateContentType(req, res, next) {
  var methods = ['PUT', 'PATCH', 'POST'];
  if (                                    // If the request is
    methods.indexOf(req.method) !== -1 && // one of PUT, PATCH or POST, and
    Object.keys(req.body).length !== 0 && // has a body that is not empty, and
    !req.is('json')                       // does not have an application/json
  ) {                                     // Content-Type header, then …
    var message = 'Content-Type header must be application/json.';
    res.status(400).json(message);
  } else {
    next();
  }
}

// When there is a 401 Unauthorized, the repsonse shall include a header
// WWW-Authenticate that tells the client how they must authenticate
// their requests.
function addFailedAuthHeader(err, req, res, next) {
  var header = {'WWW-Authenticate': 'Bearer'};
  if (err.status === 401) {
    if (err.realm) header['WWW-Authenticate'] += ` realm="${err.realm}"`;
    res.set(header);
  }
  next(err);
}





app.listen(3000, function(err) {
	if(err) return console.log(err)
	console.log("Wizard code happening on port", port)
})
