
	angular.module("LoLStats")
		     .controller("RunesController", RunesController)

  RunesController.$inject = ["RuneFactory"]

	function RunesController(RuneFactory){
		var self = this
    console.log("Runes controller accessed...")
		// self.all = []

    RuneFactory.show()
    .success(function(data) {
			self.runeList = []
      for(rune in data.data) {
        self.runeList.push(data.data[rune])
      }
      console.log(self.runeList)
      console.log("Testing 123")

		})

  }
