'use strict';

var logsignApp = angular.module('logsignApp', ['ngRoute', 'ui.bootstrap'])
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/home.html',
      controller: 'homeCtrl'
    })
    .when('/login'{
      templateUrl:'/templates/login.html',
      controller: 'loginCtrl'
    })
    .when('/signup',{
      templateUrl: '/templates/signup.html',
      controller:'signupCtrl'
    })
    .otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }])

logsignApp.controller('signupCtrl', ['$scope', '$rootScope', 'signupService', function($scope, $rootScope, signupService) {
  $scope.formData = {};
  $scope.user = [];

  signupService.getUsers().then(function(response) {
    console.log(response);
    $scope.todos = response;
  })

  $scope.addUser = function() {
    console.log($scope.formData);
    signupService.addUser($scope.formData).then(function(response) {
      console.log(response);
      $scope.users.push($scope.formData)
      $scope.formData = {};
    })
  }

}])
