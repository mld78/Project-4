angular.module('LoLStats')
       .factory('RuneFactory', RuneFactory)

RuneFactory.$inject = ['$http']


function RuneFactory($http){
  var apiUrl = "/runes"


function show(){
  console.log("Running show method from rune factory")
  return $http.get(apiUrl)
}



  return {
    show: show
  }
}
