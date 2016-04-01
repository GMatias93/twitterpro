angular.module('db.factory', [])

.factory('dbFactory', ['$http', 'Server', function($http, Server) {
  var factory = {};

  // crud functionality for all models

  // use '/all/true' to get all models
  factory.getModel = function(type, searchTerms, callback) {
    console.log('getting models');
    console.log('type: ', type);
    $http.get(Server.url + type + searchTerms).then(function(results) {
      console.log('successs in getting models', results.data);
      callback(results.data);
    });
  };

  factory.deleteModel = function(type, searchTerms, callback) {
    console.log('deleting models');
    console.log('type: ', type);
    $http.delete(Server.url + type + searchTerms).then(function(results) {
      console.log('success in deleting model');
      callback(results.data);
    });
  };

  factory.updateModel = function(type, payload, callback) {
    console.log('updating model');
    console.log('type: ', type);
    $http.put(Server.url + type, payload).then(function(results) {
      console.log('success in updating model');
      callback(results.data);
    });
  };

  factory.createModel = function(type, payload, callback) {
    console.log('creating model');
    console.log('type', type);
    $http.post(Server.url + type, payload).then(function(results) {
      console.log('success in creating model');
      callback(results.data);
    });
  };


  return factory;
}, ]);
