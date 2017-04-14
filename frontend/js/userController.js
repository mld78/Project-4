angular.module("LoLStats")
        .controller("UserController", UserController)


UserController.$inject = ["$http", "$state", "authService", "tokenService"]

function UserController($http, $state, authService){
  var selfUser = this

  self.authService = authService

  selfUser.getUser = getUser
  selfUser.deleteUser = deleteUser
  selfUser.editUser = editUser
  selfUser.setUser = setUser
  selfUser.currentUser = {}
  selfUser.authService = authService




  function getUser(user){
    $http

    .get('/api/me')
    .then(function(response){
      selfUser.currentUser = response.data.user
    })
  }
  getUser()

function setUser(user){
  selfUser.currentUser = user
  console.log('please')
}


  function editUser(user){
    console.log(selfUser.currentUser)
    $http
      .patch('/api/me', selfUser.currentUser)
      .then(function(response){
        getUser()
        $state.go('profile')
      })
      selfUser.currentUser = {}
  }

  function deleteUser(user){
    $http
      .delete("/api/me" )
      .then(function(response){
        // getUser()
        selfUser.authService.logOut()

      })
  }



}
