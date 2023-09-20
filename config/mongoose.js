const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/webdevloper-community-db')
.then(() => console.log('Connected!')).catch((error) => console.log("Connection failed"))
const db = mongoose.connection;
module.exports = db;