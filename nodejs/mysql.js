var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : '111111', /* 이건 폼이 아니라 진짜 연결에 쓰이는 것. 이 암호 맞음. */
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
        console.log(error);
  }  
   console.log(results);
});
 
connection.end();

/* just note */