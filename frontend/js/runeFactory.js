angular.module('LoLStats')
       .factory('RuneFactory', RuneFactory)

RuneFactory.$inject = ['$http']


function RuneFactory($http){
  var apiUrl = 'https://na1.api.riotgames.com/lol/static-data/v3/runes/?api_key=RGAPI-a781ddac-73e4-4d26-8796-be13fa8833cc'


function show(){
  console.log("Running show method from rune factory")
  return $http.get(apiUrl)
}



  return {
    show: show
  }
}
