const fetch = require('node-fetch');
class HomeControler {
    index(req, res) {
        fetch('http://localhost:3000/courses')
            .then(function (res) {
                return res.json();
            })
            .then((data) => res.render('home', { data: data }));
    }
    create(req, res) {
        res.render('course/create');
    }
    edit(req, res) {
        const id = req.params.id;
        fetch('http://localhost:3000/courses')
            .then(function (res) {
                return res.json();
            })
            .then((data) => {
                const newData = data.find((obj) => obj.id == id);
                res.render('course/edit', { data: newData });
            });
    }
    add(req, res) {
        const course = req.body;
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        };
        fetch('http://localhost:3000/courses', option)
            .then(function (res) {
                return res.json();
            })
            .then((data) => res.redirect('/'));
    }
    update(req, res) {
        const id = req.params.id;
        const course = req.body;
        const option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        };
        fetch(`http://localhost:3000/courses/${id}`, option)
            .then(function (res) {
                return res.json();
            })
            .then((data) => res.redirect('/'));
    }
    delete(req, res) {
        const id = req.params.id;
        const option = {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        };
        fetch(`http://localhost:3000/courses/${id}`, option)
            .then(function (res) {
                return res.json();
            })
            .then((data) => res.redirect('/'));
    }
}

module.exports = new HomeControler();
