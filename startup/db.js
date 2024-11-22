const mongoose = require('mongoose');
const config = require('config')

module.exports = function () {
    const db = process.env.MONGODB_URL
    mongoose.connect(db)
        .then(() => console.log(`connected to ${db}`));
}