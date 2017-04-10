
	angular.module("LoLStats")
		.controller("MasteriesController", MasteriesController)

  MasteriesController.$inject = ["MasteryFactory"]

	function MasteriesController(MasteryFactory){
		var rune = this
		rune.all = []


  }
