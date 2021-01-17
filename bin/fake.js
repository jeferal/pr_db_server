const express = require('express');
const app = express();

app.listen(8000);
console.log('Example app listening on port 8000!');

const response = [
    { file_name: 'foo_0' },
    { file_name: 'foo_1' },
    { file_name: 'foo_2' },
    { file_name: 'foo_3' },
    { file_name: 'foo_4' },
    { file_name: 'foo_5' },
];

app.get('/references', (req, res)=> {
    console.log(req);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(response);
});