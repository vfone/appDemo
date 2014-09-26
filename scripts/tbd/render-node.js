'use strict';

angular.module('integrationApp')
  .controller('RenderNodeCtrl', function ($scope, $famous) {
    var View = $famous['famous/core/View'];
    var Modifier = $famous['famous/core/Modifier'];
    var Surface = $famous['famous/core/Surface'];
    var Transform = $famous['famous/core/Transform'];

    $scope.masterView = new View();

    var _surf = new Surface({properties: {backgroundColor: 'red'}});
    _surf.setContent("I'm a surface");

    var _mod = new Modifier();

    var _width = 320;
    var _height = 568;
    _mod.transformFrom(function(){
      return Transform.translate(Math.random() * _width, 0, 1);
    });

    $scope.masterView.add(_mod).add(_surf);

  });
