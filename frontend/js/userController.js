angular.module("LoLStats")
        .controller("UserController", UserController)


UserController.$inject = ["$http"]

function UserController($http){
  var selfUser = this


  selfUser.getUser = getUser
  selfUser.deleteUser = deleteUser
  selfUser.editUser = editUser
  selfUser.setUser = setUser
  selfUser.currentUser = {}




  function getUser(user){
    $http

    .get('/api/me')
    .then(function(response){
      selfUser.currentUser = response.data.user
      console.log(selfUser.currentUser)
    })
  }
  getUser()

function setUser(user){
  selfUser.currentUser = user
  console.log('please')
}


  function editUser(user){
    $http
      .patch('/api/me', self.currentUser)
      .then(function(response){
        getUser()
      })
      selfUser.currentUser = {}
  }

  function deleteUser(user){
    $http
      .delete("/api/me" )
      .then(function(response){
        getUser()
      })
  }



}
