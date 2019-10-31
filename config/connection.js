var mysql = require("mysql");

var connection;


connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "TDen!se31"
    database: "burgers_db"

});
}

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
//MySqlConnection Exported
  module.exports = connection;
