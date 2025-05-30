const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const router = require('./routers');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routers')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

router(app);
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}/`);
});
