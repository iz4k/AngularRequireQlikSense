//define dependencies that are needed to start the app.
//bootsrap the application ("app") to document (window.document)
define([
  "require",
  "angular",
  "app",
  "routes"
], function (require, ng) {
  "use strict";
  require(["domReady!"], function (document) {
    ng.bootstrap(document, ["app"]);
  });
});