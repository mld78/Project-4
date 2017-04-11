
	angular.module("LoLStats")
		.controller("ChampionsController", ChampionsController)

  ChampionsController.$inject = ["ChampionFactory"]

	function ChampionsController(ChampionFactory){
		var self = this

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
