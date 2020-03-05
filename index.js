const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird')

const port = 3000
// ttp://localhost:3000/static/images/kitten.jpg
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.send('hi Dass')
    var db = new sqlite3.Database('abcd.db');
db.all("SELECT id, dt FROM user", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id, row.dt);
        })
	});	
db.close();


    // var db = new sqlite3.Database('abcd.db');

    // db.serialize(function() {
    //   db.run("CREATE TABLE user (id INT, dt TEXT)");
    
    //   var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
    //   for (var i = 0; i < 10; i++) {
      
    //   var d = new Date();
    //   var n = d.toLocaleTimeString();
    //   stmt.run(i, n);
    //   }
    //   stmt.finalize();
    
    //   db.each("SELECT id, dt FROM user", function(err, row) {
    //       console.log("User id : "+row.id, row.dt);
    //   });
    // });
    
    // db.close();

})

app.post('/', function (req, res) {
    res.send('Got a POST request')
  })


  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => console.log(`server is running on port ${port}`))
