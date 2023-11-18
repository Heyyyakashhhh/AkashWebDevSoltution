const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB)
.then(() => console.log('Connected!')).catch((error) => console.log("Connection failed"))
const db = mongoose.connection;
module.exports = db;