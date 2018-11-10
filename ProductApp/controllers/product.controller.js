const express = require('express');
const app = express();
const Product = require('../models/product.model');
const redis = require('redis');
const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(REDIS_URL);

//Simple version, without validation or sanitation
exports.getproducts = function (req, res) {
    Product.find({}, { name: "", size: "", color: "", cost: "", status: "" }, function (err, products) {
        var productMap = {};
        products.forEach(function (product) {
            productMap[product.codigo] = products;
        });
        res.send(productMap);
        res.status(200).send(res)
    });
};

//HTTP POST
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            size: req.body.size,
            color: req.body.color,
            cost: req.body.cost,
            status: req.body.status
        }
    );
    //Save the information to the DB
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
        res.status(201).send(res)
        redis_insert(res.id, res.ops[0])
        console.log(res.id)
    })
};

//HTTP GET
exports.product_details = function (req, res) {
    Product.find({ codigo: req.params.id }, function (err, product) {
        if (err) return next(err);
        res.send(product);
        res.status(200).send(res)
    })
};

//HTTP PUT
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
        res.status(202).send(res)
    });
};

//DELETE
exports.product_delete = function (req, res) {
    redis_deleted(req.params.id)
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
        res.status(200).send(res)

    })
};

function redis_insert(id, object) {
    console.log("Inserted in redis")
    client.set(id, JSON.stringify(object), redis.print)
}

function redis_deleted(id) {
    console.log("Deleted from redis")
    client.del(id)
}