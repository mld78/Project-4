angular.module('LoLStats', ['ui.router'])
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
