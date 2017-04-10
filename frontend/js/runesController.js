
	angular.module("LoLStats")
		.controller("RunesController", RunesController)

  RunesController.$inject = ["RuneFactory"]

	function RunesController(RuneFactory){
		var rune = this
		rune.all = []


  }
