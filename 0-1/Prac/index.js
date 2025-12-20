const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const Path = require('path')

// const rishiMiddleware = (req, res, next) => {
//   console.log(req)
//   next()
// }
app.use(express.static(path.join(__dirname, "Public")))
// app.use(rishiMiddleware)


app.get('/home/:name', (req, res) => {
  res.send(`Hello ${req.params.name}!`)
})

app.get('/about', (req, res) => {
  res.sendFile(Path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})


