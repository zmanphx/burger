// Set up MySQL connection.

var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){

connection = mysql.createConnection(process.env.JAWSDB_URL);

}
else
{  
  connection = mysql.createConnection({
    host: 'e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'zcj54hkmxoijljfz',
    password: 'o63l6hadxsx5c0ow',
    database: 'p9erj8k82cpb1sqr'



});

};

 

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
