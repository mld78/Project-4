
	angular.module("LoLStats")
		.controller("ItemsController", ItemsController)

  ItemsController.$inject = ["ItemFactory"]

	function ItemsController(ItemFactory){
		var rune = this
		rune.all = []


  }
