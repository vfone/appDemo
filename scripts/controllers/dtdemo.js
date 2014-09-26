'use strict';

angular.module('integrationApp')
    .controller('DTdemoCtrl', function ($scope, $famous, $http) {
        $scope.getUA = function(){
            var ua='iPhone';
            if(navigator.userAgent.match(/iPhone/i)){
                ua = "iPhone";
            }
            else if(navigator.userAgent.match(/iPad/i)){
                ua = "iPad";
            }
            else if(navigator.userAgent.match(/iPad/i)){
                ua = "android";
            }
            return ua;
        };

        $scope.getCountryCode=function(){
            //getting country code from third party geoIP service
            var cc = geoip_country_code();
            //alert(cc);
            return cc;
        };

        var EventHandler = $famous['famous/core/EventHandler'];
        $scope.eventHandler = new EventHandler();
        $scope.apiURL = "http://api.test.xyo.net/v2/search/";
        $scope.UA = $scope.getUA();
        $scope.CountryCode = $scope.getCountryCode();
        $scope.Params="/apps/book"+"?country="+$scope.CountryCode;

        $http({method: 'GET', url: 'crossover.php?url='+$scope.apiURL+$scope.UA+$scope.Params,
                format:'json'
            }).
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(data);

            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("status" + status);
            });

        $scope.list = [
            {
                    "htmlCode":"HERO I AM",
                    "bgcolor": "#ffffff",
                    "height": 200,
                    "class": "heroCard",
                    "template": "templates/heroCard.html"
            },
            {
                    "htmlCode":"",
                    "bgcolor": "#ea2751",
                    "height": 180,
                    "class": "narrowCard",
                    "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                        "bgcolor": "#ea27d1",
                        "height":140,
                        "class": "wideCard",
                        "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                        "bgcolor": "#6c27ea",
                        "height": 180,
                        "class": "indexCard",
                        "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                        "bgcolor": "#2755ea",
                        "height": 180,
                        "class": "narrowCard",
                        "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                        "bgcolor": "#27d5ea",
                        "height": 180,
                        "class": "listCard",
                        "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                        "bgcolor": "#27ea48",
                        "height": 180,
                        "class": "narrowCard",
                        "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                        "bgcolor": "#baea27",
                        "height": 180,
                        "class": "narrowCard",
                        "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                        "bgcolor": "#eaa827",
                        "height": 180,
                        "class": "listCard",
                        "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                        "bgcolor": "#ea3127",
                        "height": 120,
                        "class": "narrowCard",
                        "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },{
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ffffff",
                "height": 156,
                "class": "heroCard",
                "template": "templates/heroCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea2751",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea27d1",
                "height":140,
                "class": "wideCard",
                "template": "templates/wideCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#6c27ea",
                "height": 180,
                "class": "indexCard",
                "template": "templates/indexCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#2755ea",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27d5ea",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#27ea48",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#baea27",
                "height": 180,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#eaa827",
                "height": 180,
                "class": "listCard",
                "template": "templates/listCard.html"
            },
            {
                "htmlCode":"",
                "bgcolor": "#ea3127",
                "height": 120,
                "class": "narrowCard",
                "template": "templates/narrowCard.html"
            }

        ];

        //$scope.trustedExample = $sce.trustAsHtml($scope.list.htmlCode);

        console.log($scope.list[0].height);
        //$scope.list1 = [{content: "box 1"}, {content: "angular"}, {content: "rocks!"}];

        $scope.options = {
            scrollViewOuter: {
                direction: 0,
                paginated: false
            },
            scrollViewInner :{
                direction: 1
            }
        };

    });
