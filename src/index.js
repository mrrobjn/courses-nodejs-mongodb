const express = require('express')
const { engine } = require('express-handlebars');
// const morgan = require('morgan');
const app = express()
const route = require('./routes/index')
app.use(express.static(`${__dirname}\\public`))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// HTTP logger
// app.use(morgan('combined'))

// template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set("views", `${__dirname}\\resources\\views`);
// Routes init
route(app)

const port = 3000
app.listen(port)