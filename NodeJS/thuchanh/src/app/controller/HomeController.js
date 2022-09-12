class HomeController {
    index(req, res) {
        res.render('home');
    }
    content(req, res) {
        res.render('content', { data: req.body });
    }
}

module.exports = new HomeController();
