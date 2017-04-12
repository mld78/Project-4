(function() {
  "use strict";

  angular
    .module("LolStats")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "authService", "userService", "$state"];

  function SignInController($log, authService, userService, $state) {
    var self = this;

    // BINDINGS
    self.signUp = {
      email:    "",
      name:     "",
      password: "",
      passwordConfirmation: ""
    };
    self.submitSignUp = submitSignUp;
    self.logIn = {
      email:    "",
      password: ""
    };
    self.submitLogIn = submitLogIn;
    self.conflict = false;

    // FUNCTIONS
    function submitSignUp() {
      userService
        .create(self.signUp)
        .then(function(res) {
          return authService.logIn(self.signUp);
        })
        .then(
          // on success
          function(decodedToken) {
            $log.info('Logged in!', decodedToken);
            $state.go('index');
          },
          // on error
          function(err) {
            if (err.status === 409) self.conflict = true;
            $log.info('Error Claire-r:', err);
          }
        );
    }

    function submitLogIn() {
      authService
        .logIn(self.logIn)
        .then(
          // on success
          function(decodedToken) {
            $log.info('Logged in!', decodedToken);
            $state.go('index');
          },
          // on error
          function(err) {
            $log.info('Error:', err);
          }
        );
    }

    $log.info("SignInController loaded!");
  }
})();
