'use strict';

angular.module('integrationApp')
  .controller('FlexibleLayoutCtrl', function ($scope, $famous) {
    $scope.flexibleLayoutOptions = {
      ratios: [.1, .3, .6],
      direction: 1 //FlexibleLayout.DIRECTION_Y
    }
  });
