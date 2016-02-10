require.config({
  //how to set up dependecies paths
  paths: {
    "angular": "bower_components/angular/angular",
    "angular-route": "bower_components/angular-route/angular-route",
    "domReady": "bower_components/requirejs-domready/domReady"
  },
  //scripts that are not using AMD (not made with define()) need to be "shimmed"
  shim: {
    "angular": {
      exports: "angular"
    }
    ,
   "angular-route": {
     deps: ["angular"]
   }
  },
  //run these dependencies
  deps: ["application-starter"]
})