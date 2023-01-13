const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/School'); //'mongodb://localhost/my_database'
        console.log('success');
    } catch (err) {
        console.log('error');
    }
}

module.exports = { connect };
