const group_route_home = require('./groups_Router_Home');
function routers(app) {
    app.use('/', group_route_home);
}

module.exports = routers;
