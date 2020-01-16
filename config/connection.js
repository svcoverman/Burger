let mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL):
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burger_db"
});
};

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;