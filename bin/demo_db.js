const express = require('express');
const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "pr_user",
    password: "lab",
    database: "parallel_robot_db"
});


app.get('/', (req, res)=> {
    var sql_command = "SELECT * FROM trajectories";
    con.query(sql_command, function(err, result) {
        if (err) throw err;
        console.log("Result: ", result);
        res.send(result);
    });
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected to db!");
});