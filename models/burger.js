// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(objburger, cb) {
    orm.create(objburger, function(res) {
      cb(res);
    });
  },
  update: function(id, column, value, cb) {
    orm.update(id, column, value, function(res) {
      cb(res);
    });
  }/* ,
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  } */
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
