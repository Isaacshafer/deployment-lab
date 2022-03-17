const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, './public')))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'dbf039b4fa694e8ebc66a4249e32955d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const port = process.env.PORT || 5500
app.listen(port, ()=> console.log(`server running on ${port}`))