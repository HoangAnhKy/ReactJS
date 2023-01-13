const path = require('path');
const express = require('express');
const methodOverride = require('method-override');

const handlebars = require('express-handlebars');
const db = require('./config/db');

const router = require('./routers');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

router(app);
db.connect();
app.use(methodOverride('X-HTTP-Method-Override'));

app.listen(port, () => console.log(`Server listening on port http://localhost:${port}/`));
