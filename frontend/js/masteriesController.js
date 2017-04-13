
	angular.module("LoLStats")
		.controller("MasteriesController", MasteriesController)

  MasteriesController.$inject = ["MasteryFactory", "authService"]

	function MasteriesController(MasteryFactory, authService){
		var self = this

		self.authService = authService

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
