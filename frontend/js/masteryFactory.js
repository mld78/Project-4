angular.module('LoLStats')
       .factory('MasteryFactory', MasteryFactory)

MasteryFactory.$inject = ['$http']


function MasteryFactory($http){
  var apiUrl = 'https://na1.api.riotgames.com/lol/static-data/v3/masteries/?masteryData=all&api_key=RGAPI-a781ddac-73e4-4d26-8796-be13fa8833cc'


function show(){
  return $http.get(apiUrl)
}


  return {
    show: show
  }
}
