'use strict';

angular.module('integrationApp')
  .controller('PhysicsCtrl', function ($scope, $famous) {
    var PhysicsEngine = $famous['famous/physics/PhysicsEngine'];
    var Circle = $famous['famous/physics/bodies/Circle'];
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Wall = $famous['famous/physics/constraints/Wall'];
    var Walls = $famous['famous/physics/constraints/Walls'];
    var Collision = $famous['famous/physics/constraints/Collision'];
    var Repulsion = $famous['famous/physics/forces/Repulsion'];

    var CIRCLES = 25;
    var RADIUS = 25;
    var WIDTH = 320;
    var HEIGHT = 568;
    var COLORS = ["#b58900","#cb4b16","#dc322f","#d33682","#6c71c4","#268bd2","#2aa198","#859900"]


    $scope.colorMap = {};

    var physicsEngine = new PhysicsEngine();

    //Expose BODIES on the scope
    //Don't attach surfaces to them
    $scope.circles = _.map(_.range(CIRCLES), function(i){
      var circ = new Circle({
        radius: RADIUS,
        position: [Math.random() * WIDTH, Math.random() * HEIGHT]
      });
      physicsEngine.addBody(circ);
      circ.show = true;
      circ.opacity = new Transitionable(1);
      circ._id = Math.random();
      $scope.colorMap[circ._id] = _.sample(COLORS);
      return circ;
    });

    $scope.handleExit = function(circle, $done){
      console.log('exit')
      circle.opacity.set(0, {duration: 400, curve: 'linear'}, $done);
    };

    $scope.handleClick = function(circle){
      circle.show = false;
    };

    console.log($scope.colorMap);

    //set up center attraction
    var centerAttraction = new Repulsion({
      strength: -.3,
      anchor: [WIDTH / 2, HEIGHT / 2],
      cap: .2
    });
    physicsEngine.attach(centerAttraction, $scope.circles);

    //set up collisions
    var collision = new Collision({
      restitution: .9,
    });
    _.each($scope.circles, function(circ){
      physicsEngine.attach(collision, $scope.circles, circ);
    });

    //set up walls
    var leftWall    = new Wall({normal : [1,0,0],  distance : 0, restitution : 0.5});
    var rightWall   = new Wall({normal : [-1,0,0], distance : WIDTH, restitution : 0.5});
    var topWall     = new Wall({normal : [0,1,0],  distance : 0, restitution : 0.5});
    var bottomWall  = new Wall({normal : [0,-1,0], distance : HEIGHT, restitution : 0.5});

    var walls = [topWall, rightWall, bottomWall, leftWall];
    physicsEngine.attach(walls, $scope.circles);
  });
