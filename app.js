const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Xamxam Institute of Technology @ Google Cloud 2017')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
