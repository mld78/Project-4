
	angular.module("LoLStats")
		.controller("ChampionsController", ChampionsController)

  ChampionsController.$inject = ["ChampionFactory"]

	function ChampionsController(ChampionFactory){
		var rune = this
		rune.all = []


  }
