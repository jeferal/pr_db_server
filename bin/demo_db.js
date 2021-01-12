'use strict';

const express = require('express');
const app = express();

app.use(express.static('.'));

app.listen(8000);
console.log('Example app listening on port 8000!');



var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "pr_user",
    password: "lab",
    database: "parallel_robot_db"
});


con.connect(function(err){
    if (err) throw err;
    console.log("Connected to db!");
});



app.get('/', (req, res)=> {
    var sql_command = "SELECT * FROM trajectories";
    con.query(sql_command, function(err, result) {
        if (err) throw err;
        console.log("Result: ", result);
        //res.send(result);
        res.send(result);
    });
});