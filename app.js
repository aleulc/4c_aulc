const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!, Alejandro Uriel Lopez Cruz')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})