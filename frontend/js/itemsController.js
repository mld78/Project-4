
	angular.module("LoLStats")
		.controller("ItemsController", ItemsController)

  ItemsController.$inject = ["ItemFactory"]

	function ItemsController(ItemFactory){
		var self = this

		ItemFactory.show()
    .success(function(data) {
			self.itemList = []
      for(item in data.data) {
        self.itemList.push(data.data[item])
      }
      console.log(self.itemList)
      console.log("Testing 123")

		})


  }
