var express = require('express'),
	  app = express(),
	  logger = require('morgan'),
	  favicon = require('serve-favicon'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    path = require('path'),
		cookieParser = require('cookie-parser'),
		port        = process.env.PORT || 3000,
		frontend = process.env.PWD + '/frontend/'

  var mongoose = require('./config/database')



  var routes = require('./config/routes')

app.use(cors())

// mongoose.connect('mongodb://localhost/LolStats')




app.use(logger('dev'))
app.use(express.static(frontend))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

app.get('/', function(){
	console.log("something")
})


// // set up view engine and path
// app.set('view engine', 'html')
// // app.use(htmlLayouts)
// app.set("views","../frontend")

// configure passport
app.use(session({ secret: 'LolStats' }))
app.use(passport.initialize())
// session implementaion
app.use(passport.session())
app.use(flash())

// This middleware will allow us to use the current user in the layout
require('./config/passport')(passport)
app.use(function (req, res, next) {
  global.user = req.user
  next()
})





app.listen(3000, function(err) {
	if(err) return console.log(err)
	console.log("Wizard code happening on port", port)
})
