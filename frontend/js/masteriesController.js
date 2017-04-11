
	angular.module("LoLStats")
		.controller("MasteriesController", MasteriesController)

  MasteriesController.$inject = ["MasteryFactory"]

	function MasteriesController(MasteryFactory){
		var self = this

		MasteryFactory.show()
    .success(function(data) {
			self.masteryList = []
      for(mastery in data.data) {
        self.masteryList.push(data.data[mastery])
      }
      console.log(self.masteryList)
      console.log("Testing 123")

		})

  }
