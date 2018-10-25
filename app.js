// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./ProductApp/routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://admin:manager123@ds235243.mlab.com:35243/clothcollection';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/home', product);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});