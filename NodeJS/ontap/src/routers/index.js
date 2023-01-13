const groupHome = require('./groupRouterHome');
const router = (app) => {
    app.use('/', groupHome);
};

module.exports = router;
