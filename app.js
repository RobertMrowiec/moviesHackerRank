const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/movies', require('./routes/route'))

console.log(`Server is running on port: ${process.env.PORT || 8001}`);
app.listen(process.env.PORT || 8001)