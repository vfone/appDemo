'use strict';

angular.module('integrationApp')
  .controller('ContainerSurfaceCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];

    var _trans = [0, 0, 0];
    var _tick = 0;

    var _amplitude = 368;
    var _offset = -484;

    $scope.getTranslate = function(){
      return _trans;
    }


    Timer.every(function(){
      _tick+= .01;
      _trans[0] = Math.sin(_tick) * _amplitude + _offset;
      _trans[1] = Math.cos(_tick) * _amplitude + _offset;
    }, 1)

  });
