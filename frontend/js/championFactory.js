angular.module('LoLStats')
       .factory('ChampionFactory', ChampionFactory)

ChampionFactory.$inject = ['$http']


function ChampionFactory($http){
  var apiUrl = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?champData=all&api_key=RGAPI-00d8f010-e6d8-47bb-96e6-f683cbbb45e6'


function show(){
  return $http.get(apiUrl)
}


  return {
    show: show
  }
}
