define(["app"], function (app) {
  "use strict";
  return app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/home/home.html",
        controller: "homeCtrl"
      })
      //      .when("/asd", {
      //        templateUrl: "partials/asd/asd.html",
      //        controller: "asdCrtl"
      //      })
      .otherwise({
        redirectTo: "/"
      });
  }]);
});