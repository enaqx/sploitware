/**
 * Web server
 */

var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server('localhost', 8000);

/* Start server and log to console */
server.pack.register({
  plugin: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args:[{ log: '*', request: '*' }]
    }]
  }
}, function (err) {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  });

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
});
