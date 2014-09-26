'use strict';

angular.module('integrationApp')
  .controller('GridLayoutCtrl', function ($scope, $famous) {
    var Engine = $famous['famous/core/Engine'];
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.enginePipe = new EventHandler();
    Engine.pipe($scope.enginePipe);

    $scope.gridElements = [
      {backgroundColor: '#F00', index: 1},
      {backgroundColor: '#FF0', index: 2},
      {backgroundColor: '#0F0', index: 3},
      {backgroundColor: '#0FF', index: 4},
      {backgroundColor: '#00F', index: 5},
      {backgroundColor: '#F0F', index: 6},
      {backgroundColor: '#F00', index: 7},
      {backgroundColor: '#FF0', index: 8},
      {backgroundColor: '#0F0', index: 9},
      {backgroundColor: '#0FF', index: 10},
      {backgroundColor: '#00F', index: 11},
      {backgroundColor: '#F0F', index: 12}
    ]

    $scope.enginePipe.on('click', function(){
      $scope.changeDimensions();
      $scope.gridElements.splice(0, 1);

      if(!$scope.$$phase) $scope.$apply();
    })

    $scope.gridLayoutOptions = {
      dimensions: [1, 3]
    }

    $scope.changeDimensions = function(){
      console.log('changing dimensions')
      $scope.gridLayoutOptions.dimensions[0]++;
    }

  });
