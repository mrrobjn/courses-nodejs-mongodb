const express = require('express')
const { engine } = require('express-handlebars');
const app = express()

const route = require('./routes/index')
const db = require('./config/db')

// connect db
db.connect()

app.use(express.static(`${__dirname}\\public`))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set("views", `${__dirname}\\resources\\views`);

// Routes init
route(app)

const port = 3000
app.listen(port)