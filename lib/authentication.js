/**
 * Users authentication
 */

var Bcrypt = require('bcrypt');

/* Get users */
var users = {
  john: {
    username: 'john',
    password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',
    name: 'John Doe',
    id: '2133d32a'
  }
};

/* Authenticate user */
var authenticate = function (username, password, callback) {
  var user = users[username];
  if (!user) {
    return callback(null, false);
  }
  Bcrypt.compare(password, user.password, function (err, isValid) {
    callback(err, isValid, { id: user.id, name: user.name });
  });
};

module.exports = authenticate;
