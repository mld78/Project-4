
	angular.module("LoLStats")
		     .controller("RunesController", RunesController)

  RunesController.$inject = ["RuneFactory"]

	function RunesController(RuneFactory){
		var self = this

    self.isCollapsed1 = false
    self.isCollapsed2 = false

    
    console.log("Runes controller accessed...")
		// self.all = []
    self.runeList = []

    RuneFactory.show()
    .success(function(data) {
      for(rune in data.data) {
        self.runeList.push(data.data[rune])
      }
      console.log(self.runeList)
      console.log("Testing 123")

		})

    //functions that lists runes by tiers
    // function selectTier(){
    //   if (self.runeList.rune.tier == 1){
    //     return self.runeList.rune.filter(function(x){ x.tier == 1})
    //   } else if(self.runeList.rune.tier == 2){
    //     return self.runeList.rune.filter(function(x){ x.tier == 2})
    //   } else {
    //     return self.runeList.rune.filter(function(x){x.tier == 3})
    //   }
    // }


    //function that groups runes by type



    //function that adds the attributes of the runes

  }
