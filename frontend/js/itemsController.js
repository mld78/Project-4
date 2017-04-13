
	angular.module("LoLStats")
		.controller("ItemsController", ItemsController)

  ItemsController.$inject = ["ItemFactory", "authService"]

	function ItemsController(ItemFactory, authService){
		var self = this

		self.authService = authService

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
