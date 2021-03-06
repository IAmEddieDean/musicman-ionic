angular.module('starter')

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $window) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.$on('hello', function(){
    console.log('howdy');
    $scope.$emit('burp');
  });

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ListCtrl', function($scope) {
  $scope.playlists = [
    { title: 'wing', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ShowCtrl', function($scope, $stateParams) {
})
.controller('ProfileCtrl', function($scope, $stateParams) {
});
