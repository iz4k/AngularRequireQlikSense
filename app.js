//top-level application to be used
define([
  "angular",
  "angular-route",
  "controller-index"
], function (angular) {
  "use strict";
  return angular.module("app", ["ngRoute", "home"]);
});