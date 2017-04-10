angular.module('LoLStats', ['ui.router'])
       .config(ViewRouter)
       .controller('MasteryController', MasteryController)
       .controller('RuneController', RuneController)
       .controller('ChampionController', ChampionController)
       .controller('ItemController', ItemController)
//Mastery Controller
MasteryController.$inject = ['MasteryFactory']

function MasteryController(MasteryFactory){
var mastery = this

}


//Rune Controller
RuneController.$inject = ['RuneFactory']

function RuneController(RuneFactory){
  var rune = this

}



//Champion Controller
ChampionController.$inject = ['ChampionFactory']

function ChampionController(ChampionFactory){
  var champion = this

}



//Item Controller
ItemController.$inject = ['ItemFactory']

function ItemController(ItemFactory){
  var item = this
}











//States for the show pages
function ViewRouter($stateProvider, $urlRouterProvider){

         $urlRouterProvider.otherwise("/");

         $stateProvider
         .state('index', {
           url: '/',
           templateUrl: 'home.html'
         })
         .state('mastery', {
           url: '/mastery',
           templateUrl: 'mastery.html'
         })
         .state('rune', {
           url: '/rune',
           templateUrl: 'rune.html'
         })
         .state('champion', {
           url: '/champion',
           templateUrl: 'champion.html'
         })
         .state('item', {
           url: '/item',
           templateUrl: 'item.html'
         })
         .state('home', {
           url: '/home',
           templateUrl: 'home.html'
         })
}
