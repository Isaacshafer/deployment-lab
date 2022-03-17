const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, './public')))

const port = process.env.PORT || 5500
app.listen(port, ()=> console.log(`server running on ${port}`))