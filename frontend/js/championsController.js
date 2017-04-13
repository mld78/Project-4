
	angular.module("LoLStats")
		.controller("ChampionsController", ChampionsController)

  ChampionsController.$inject = ["ChampionFactory", "authService"]

	function ChampionsController(ChampionFactory, authService){
		var self = this

		self.authService = authService

		ChampionFactory.show()
    .success(function(data) {
			self.championList = []
      for(champion in data.data) {
        self.championList.push(data.data[champion])
      }
      console.log(self.championList)
      console.log("Testing 123")

		})


  }
