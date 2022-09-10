'use strict';
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.engine(
    'hds',
    handlebars.engine({
        extname: '.hds',
    })
);
app.set('view engine', 'hds');
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
