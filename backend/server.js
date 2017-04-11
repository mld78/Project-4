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
// app.use(favicon(__dirname + '/public/img/favicon.ico'))
app.get('/', function(){
	console.log("something")
})






app.listen(3000, function(err) {
	if(err) return console.log(err)
	console.log("Wizard code happening on port", port)
})
