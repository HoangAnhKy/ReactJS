const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        img: { type: String, maxLength: 255 },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Course', Course);
