var express = require('express'),
	  app = express(),
	  logger = require('morgan'),
	  favicon = require('serve-favicon'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    path = require('path')

  var mongoose = require('mongoose')


  var routes = require('./config/routes')

app.use(cors())






app.use(logger('dev'))
app.use(express.static('frontend'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(favicon(__dirname + '/public/img/favicon.ico'))
app.use(routes)






app.listen(3000, function(err) {
	if(err) return console.log(err)
	console.log("Wizard code happening on 3000")
})
