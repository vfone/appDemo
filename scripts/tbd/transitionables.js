'use strict';
//adapted from @continuata's code at https://github.com/Famous/famous-angular/issues/72 
angular.module('integrationApp')
  .controller('TransitionablesCtrl', function ($scope, $famous) {
  var Transitionable = $famous['famous/transitions/Transitionable']
  $scope.number = 6;
  $scope.offset = 100;
  $scope.text = "TEXT";
  $scope.boxes = [];
  $scope.selected = 0;

  $scope.$watch('number', function (num) {
    var arr = [];
    for (var i = 0; i < $scope.number; i++) {
      var trans = new Transitionable([$scope.offset, 50 * i, 1]);
      arr.push({bg_color: '#333', color: '#ccc', trans: trans, index: i});
    }
    $scope.boxes = arr;
  });

  $scope.click = function (box) {
    box.trans.set([$scope.offset - 100, 50 * box.index, 1], {duration: 1000, curve: 'easeOut'})
    console.log('clicked', box.index, 'deselect', $scope.selected);
    $scope.selected = box.index;
  };

});
