angular.module('LoLStats')
       .factory('RuneFactory', RuneFactory)

RuneFactory.$inject = ['$http']


function RuneFactory($http){
  var apiUrl = "https://na1.api.riotgames.com/lol/static-data/v3/runes?runeListData=all&api_key=RGAPI-00d8f010-e6d8-47bb-96e6-f683cbbb45e6"


function show(){
  console.log("Running show method from rune factory")
  return $http.get(apiUrl)
}



  return {
    show: show
  }
}
