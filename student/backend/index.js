// server say hello world
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, resp) => {
  resp.send('Hello  Jigs students K S L!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})