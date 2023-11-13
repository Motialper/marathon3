const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())


app.post('/uplode_img', function (req, res) {
  res.send('Hello moti alp')
})

app.listen(5000)