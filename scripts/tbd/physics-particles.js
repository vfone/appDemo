'use strict';

angular.module('integrationApp')
  .controller('PhysicsParticlesCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var PhysicsEngine = $famous['famous/physics/PhysicsEngine'];
    var Circle = $famous['famous/physics/bodies/Circle'];
    var Particle = $famous['famous/physics/bodies/Particle'];
    var Wall = $famous['famous/physics/constraints/Wall'];
    var Walls = $famous['famous/physics/constraints/Walls'];
    var Collision = $famous['famous/physics/constraints/Collision'];
    var Snap = $famous['famous/physics/constraints/Snap'];
    var Repulsion = $famous['famous/physics/forces/Repulsion'];
    var Force = $famous['famous/physics/forces/Force'];
    var EventHandler = $famous['famous/core/EventHandler'];

    var RADIUS = .01;
    var WIDTH = 320;
    var HEIGHT = 568;
    var MARGIN = 3;
    var COLORS = ["#b58900","#cb4b16","#dc322f","#d33682","#6c71c4","#268bd2","#2aa198","#859900"]

    $scope.gridDimensions = [4, 7]
    var CIRCLES = $scope.gridDimensions[0] * $scope.gridDimensions[1];

    $scope.getRadius = function(){
      return Math.min(WIDTH / $scope.gridDimensions[0], HEIGHT / $scope.gridDimensions[1]) - MARGIN;
    }

    var _rotate = new Transitionable(0);
    $scope.getRotate = function(){
      return _rotate.get();
    }
    _rotate.set(6 * Math.PI, {duration: 5000, curve: 'linear'});

    $scope.colorMap = {};

    var physicsEngine = new PhysicsEngine();

    //Expose BODIES on the scope
    //Don't attach surfaces to them
    $scope.circles = _.map(_.range(CIRCLES), function(i){
      var circ = new Circle({
        radius: RADIUS,
        position: [0, 0, (1 + i) * (2 * Math.PI / CIRCLES)]
      });
      physicsEngine.addBody(circ);
      circ._id = i;
      $scope.colorMap[circ._id] = _.sample(COLORS);
      return circ;
    });

    $scope.handler = new EventHandler();

    $scope.mouse = function(circ){
      for(var i = 0; i < CIRCLES; i++){
        var delta = circ._id - i;
        $scope.circles[i].setPosition([0, 0, delta * Math.PI * 3 / (CIRCLES)])
      }
    };

    //set up gravity
    var ground = new Particle({position: [0, 0, 0]})
    physicsEngine.addBody(ground);
    var gravity = new Repulsion({
      strength: -.0000001
    });
    physicsEngine.attach(gravity, $scope.circles, ground);

    //set up snap
    var snap = new Snap({anchor: [0, 0, 0]});
    physicsEngine.attach(snap, $scope.circles);

    
  });
