const express = require('express')
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express()

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

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.get('/search', (req, res) => {
    res.render('search');
});
app.post('/search', (req, res) => {
    console.log(req.body)
    res.send('');
});
const port = 3000
app.listen(port)