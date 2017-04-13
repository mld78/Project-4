var express = require('express'),
  http = require('request')


function getRunes(req, res) {
  http('https://na1.api.riotgames.com/lol/static-data/v3/runes?runeListData=all&api_key=' + process.env.API_KEY, function(err, response, data) {
      if (err) throw err

      console.log(data)
      res.json(data)

    }


  )
}

module.exports = { getRunes: getRunes }
