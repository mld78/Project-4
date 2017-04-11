angular.module('LoLStats', ['ui.router', 'ui.bootstrap'])
       .config(ViewRouter)





//States for the show pages
function ViewRouter($stateProvider, $urlRouterProvider){

         $urlRouterProvider.otherwise("/");

         $stateProvider
         .state('index', {
           url: '/',
           templateUrl: 'index.html'
         })
         .state('mastery', {
           url: '/mastery',
           templateUrl: 'mastery.html',
           controller: 'MasteriesController as masteries'
         })
         .state('rune', {
           url: '/rune',
           templateUrl: 'rune.html',
           controller: 'RunesController as runes'
         })
         .state('champion', {
           url: '/champion',
           templateUrl: 'champion.html',
           controller: 'ChampionsController as champions'
         })
         .state('item', {
           url: '/item',
           templateUrl: 'item.html',
           controller: 'ItemsController as items'
         })
         .state('home', {
           url: '/home',
           templateUrl: 'home.html'
         })
}
