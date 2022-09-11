'use strict';
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/content', (req, res) => {
    res.render('content');
});
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}/`);
});
