const groupRouteWeb = require('./groupRouteWeb');
function route(app) {
    app.use('/', groupRouteWeb);
}

module.exports = route;
