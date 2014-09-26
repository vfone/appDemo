'use strict';

angular.module('integrationApp')
  .controller('DraggableCtrl', function ($scope, $famous) {
    var EventHandler = $famous['famous/core/EventHandler'];
    $scope.handler = new EventHandler();
  });
