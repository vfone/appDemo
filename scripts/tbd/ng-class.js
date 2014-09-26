'use strict';

angular.module('integrationApp')
  .controller('NgClassCtrl', function ($scope, $famous) {
    $scope.counter = 1;
    $scope.classed = function(i){
      return !!(($scope.counter % 8) & i);
    }
    $scope.shift = function(){
      $scope.counter++;
      console.log('shifting counter', $scope.counter)
    }

  });
