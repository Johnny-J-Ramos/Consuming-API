const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', (req, res) => {
  try {
      const data = await axios('https://jsonplaceholder.typicode.com/posts')
  
      return res.json(data)
  } catch (error) {
    console.error('error')
  
  }
})

app.listen('3000')