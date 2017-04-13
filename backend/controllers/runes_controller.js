var express = require('express'),
    http = require('request')


function RuneFactory(http){
      http("'https://na1.api.riotgames.com/lol/static-data/v3/runes?runeListData=all&api_key=' + process.env.API_KEY", function(err, res, data){
        if (err) throw err


        
      }


)
  }
