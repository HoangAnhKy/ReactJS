const groupRouteWeb = require('./groupRouteWeb');
const groupRouteSite = require('./groupRouteSite');
function route(app) {
    app.use('/', groupRouteWeb);
    app.use('/db', groupRouteSite);
}

module.exports = route;
