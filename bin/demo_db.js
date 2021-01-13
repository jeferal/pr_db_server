'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(8000);
console.log('Example app listening on port 8000!');


/*
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
*/


app.get('/references', (req, res)=> {
    /*
    var sql_command = "SELECT * FROM trajectories";
    con.query(sql_command, function(err, result) {
        if (err) throw err;
        console.log("Result: ", result);
        //res.send(result);
        res.send(result);
    });
    */
   res.send({ "name":"John", "age":30, "car":null });
});

app.post('/references', (req, res)=> {
    /*
    var sql_command = "SELECT * FROM trajectories";
    con.query(sql_command, function(err, result) {
        if (err) throw err;
        console.log("Result: ", result);
        //res.send(result);
        res.send(result);
    });
    */
   res.send({ "name":"Jesús", "age":30, "car":null });
});