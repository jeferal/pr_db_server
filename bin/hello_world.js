const express = require('express')
const app = express()
const port = 8000

app.get('/hello', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ "name":"Jesús", "age":30, "car":null })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})