const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const { engine } = require('express-handlebars');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

module.exports = app;



app.use(express.static(path.join(__dirname, "Static")))
app.use('/', require(path.join(__dirname, 'Routes/Blog')))


app.listen(port, () => {
  console.log(`Blog app listening on http://localhost:${port}`)
})

