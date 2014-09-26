'use strict';

angular.module('integrationApp')
  .controller('CuboidFieldCtrl', function ($scope, $famous) {
    var Timer = $famous['famous/utilities/Timer'];



    var SPEED = [.03, -.03, .01];
    var _rotate = [Math.PI / 4,0,0];
    Timer.every(function(){
      _rotate[0] += SPEED[0];
      _rotate[1] += SPEED[1];
      _rotate[2] += SPEED[2];
    });

    $scope.getRotate = function(){
      return _rotate;
    }

  });
