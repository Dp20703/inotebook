require('dotenv').config();
const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
var cors = require('cors')

const port = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(cors())

//Availabel Routes
app.get('/', (req, res) => {
  res.send("helllo World")
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
}) 