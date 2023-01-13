const path = require('path');
const express = require('express');
const hdb = require('express-handlebars');
const app = express();
const port = 3000;

app.engine(
    'lmht',
    hdb.engine({
        extname: '.lmht', // đổi tên đuôi
    })
);
app.set('view engine', 'lmht'); // sử dụng nội dung đã khai báo
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
    // res.send('Welcome to the Google');
    res.render('home');
});

app.listen(port, () => {
    console.log(`listening on localhost:${port}`);
});
