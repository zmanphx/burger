// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}



// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var sqlQuery = "SELECT * FROM  burgers" ;
    connection.query(sqlQuery, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(objburger, cb) {
       

    connection.query( "INSERT INTO  burgers SET ?", objburger, function(err, result) {
      if (err) {
        throw err;
      }
        console.log("Post" + result);
      cb(result);
    });
  },

  update: function(id, column, value, cb) {
    
    var sqlQuery="";
    if (id >0){
     sqlQuery = "UPDATE  burgers" ;

    sqlQuery += " SET ";
    sqlQuery += column +"="+value;
    sqlQuery += " WHERE ";
    sqlQuery += " id="+id;
    }
    
    else
    { sqlQuery = "UPDATE  burgers" ;

    sqlQuery += " SET ";
    sqlQuery += column +"="+value;
    
    }

    console.log(sqlQuery);
    connection.query(sqlQuery, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var sqlQuery = "DELETE FROM " + table;
    sqlQuery += " WHERE ";
    sqlQuery += condition;

    connection.query(sqlQuery, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
