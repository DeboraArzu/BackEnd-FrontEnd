// app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./ProductApp/routes/product.route'); // Imports routes for the products
const app = express();
//redis cache
const path = require('path');
const axios = require('axios');
const redis = require('redis');
// connect to Redis
const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(REDIS_URL);

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/home', product);

let port = 4000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

client.on('connect', () => {
    console.log(`connected to redis`);
});
client.on('error', err => {
    console.log(`Error: ${err}`);
});

module.exports = app;