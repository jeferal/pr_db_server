const express = require('express');
const bodyParser = require('body-parser');
const app = express();

<<<<<<< HEAD
app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

=======
>>>>>>> 0d4a8df82a8bce11884acf3d8610a7128fb87b26
app.listen(8000);
console.log('Example app listening on port 8000!');


<<<<<<< HEAD
/*
var mysql = require('mysql');
=======

const mysql = require('mysql');
>>>>>>> 0d4a8df82a8bce11884acf3d8610a7128fb87b26

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

<<<<<<< HEAD
app.post('/references', (req, res)=> {
    /*
=======
app.get('/references', (req, res)=> {
>>>>>>> 0d4a8df82a8bce11884acf3d8610a7128fb87b26
    var sql_command = "SELECT * FROM trajectories";
    con.query(sql_command, function(err, result) {
        if (err) throw err;
        console.log("Result: ", result);
        res.header("Access-Control-Allow-Origin", "*");
        res.json(result);
    });
    */
   res.send({ "name":"Jesús", "age":30, "car":null });
});