angular.module('integrationApp',['famous.angular', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/dtdemo");
    $stateProvider
      .state("dtdemo", {
            url: "/dtdemo",
            templateUrl: "views/dtdemo.html",
            controller: "DTdemoCtrl"
      })
      /*
      .state("lock-screen", {
        url: "/lock-screen",
        templateUrl: "views/lock-screen.html"
      })
      .state("animate", {
        url: "/animate",
        templateUrl: "views/animate.html",
        controller: "AnimateCtrl"
      })
      .state("animations", {
        url: "/animations",
        templateUrl: "views/animations.html",
        controller: "AnimationsCtrl"
      })
      .state("container-surface", {
        url: "/container-surface",
        templateUrl: "views/container-surface.html",
        controller: "ContainerSurfaceCtrl"
      })
      .state("cuboid", {
        url: "/cuboid",
        templateUrl: "views/cuboid.html",
        controller: "CuboidCtrl"
      })
      .state("cuboid-field", {
        url: "/cuboid-field",
        templateUrl: "views/cuboid-field.html",
        controller: "CuboidFieldCtrl"
      })
      .state("draggable", {
        url: "/draggable",
        templateUrl: "views/draggable.html",
        controller: "DraggableCtrl"
      })
      .state("transitionables", {
        url: "/transitionables",
        templateUrl: "views/transitionables.html",
        controller: "TransitionablesCtrl"
      })
      .state("demo", {
        url: "/demo",
        templateUrl: "views/demo.html"
      })
      .state("physics", {
        controller: "PhysicsCtrl",
        url: "/physics",
        templateUrl: "views/physics.html"
      })
      .state("physics-particles", {
        controller: "PhysicsParticlesCtrl",
        url: "/physics-particles",
        templateUrl: "views/physics-particles.html"
      })
      .state("ng-class", {
        url: "/ng-class",
        templateUrl: "views/ng-class.html",
        controller: "NgClassCtrl"
      }) 
      .state("render-node", {
        url: "/render-node",
        templateUrl: "views/render-node.html",
        controller: "RenderNodeCtrl"
      }) 
      .state("header-footer-layout", {
        url: "/header-footer-layout",
        templateUrl: "views/header-footer-layout.html",
        controller: "HeaderFooterLayoutCtrl"
      })
      .state("grid-layout", {
        url: "/grid-layout",
        templateUrl: "views/grid-layout.html",
        controller: "GridLayoutCtrl"
      })
      .state("nested-scroll-view", {
        url: "/nested-scroll-view",
        templateUrl: "views/nested-scroll-view.html",
        controller: "NestedScrollViewCtrl"
      }) 
      .state("perspective", {
        url: "/perspective",
        templateUrl: "views/perspective.html",
        controller: "PerspectiveCtrl"
      }) 
      .state("flexible-layout", {
        url: "/flexible-layout",
        templateUrl: "views/flexible-layout.html",
        controller: "FlexibleLayoutCtrl"
      }) 
      .state("flipper", {
        url: "/flipper",
        templateUrl: "views/flipper.html",
        controller: "FlipperCtrl"
      })
      */;
    });