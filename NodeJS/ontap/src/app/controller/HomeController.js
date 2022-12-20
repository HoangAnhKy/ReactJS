const Course = require('../models/Course');
class HomeController {
    index(req, res, next) {
        Course.find({})
            .then((course) => {
                const Course = course.map((cs) => cs.toObject());
                res.render('Home', { Course });
            })
            .catch((error) => next(error));
    }
    create(req, res, next) {
        res.render('create');
    }
    store(req, res, next) {
        const formData = req.body;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => next(error));
    }
}

module.exports = new HomeController();
