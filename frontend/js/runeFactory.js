angular.module('LoLStats')
       .factory('RuneFactory', RuneFactory)

RuneFactory.$inject = ['$http']


function RuneFactory($http){
  var apiUrl = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/rune.json'


function show(){
  console.log("Running show method from rune factory")
  return $http.get(apiUrl)
}



  return {
    show: show
  }
}
