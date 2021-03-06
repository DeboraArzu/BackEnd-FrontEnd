const express = require('express');
const app = express();
const Product = require('../models/product.model');
const redis = require('redis');
const client = redis.createClient();

//Simple version, without validation or sanitation
exports.getproducts = function (req, res) {
    Product.find({}, { name: "", size: "", color: "", cost: "", status: "", codigobarra: "" }, function (err, products) {
        var productMap = {};
        products.forEach(function (product) {
            productMap[product.codigo] = products;
        });
        res.send(productMap);
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
            status: req.body.status,
            codigobarra: req.body.codigobarra
        }
    );
    //Save the information to the DB
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
        insert(req.body.codigobarra, product)
    })

};

//HTTP GET
exports.product_details = function (req, res) {
    var products = [];
    client.keys('*', function (err, keys) {
        if (err) return console.log(err);
        if (keys) {
            async.map(keys, function (key, cb) {
                client.get(key, function (error, value) {
                    if (error) return cb(error);
                    var product = {};
                    product['codigobarra'] = key;
                    product['data'] = value;
                    cb(null, product);
                });
            }, function (error, results) {
                if (error) return console.log(error);
                console.log(results);
                res.json({ data: results });
            });
        }
    });
    if (key == null) {
        Product.find({ name: req.params.name }, function (err, product) {
            if (err) return next(err);
            res.send(product);
            console.log(product)
        })
    }
};

//HTTP PUT
exports.product_update = function (req, res) {
    Product.findOneAndUpdate(req.params.codigobarra, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

//DELETE
exports.product_delete = function (req, res) {
    Product.findOneAndDelete(req.params.codigobarra, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
        deletedata(req.params.codigobarra)
    })
};

function insert(codigo, product) {
    const value = JSON.stringify(product)
    client.set(codigo, value, function (err, reply) {
        if (err) {
            console.log(err)
        }
        console.log(reply)
    })
}

function deletedata(codigobarra) {
    client.del(codigobarra);
}

function GetKeys() {
    var products = [];
    client.keys('*', function (err, keys) {
        if (err) return console.log(err);
        if (keys) {
            async.map(keys, function (key, cb) {
                client.get(key, function (error, value) {
                    if (error) return cb(error);
                    var product = {};
                    product['codigobarra'] = key;
                    product['data'] = value;
                    cb(null, product);
                });
            }, function (error, results) {
                if (error) return console.log(error);
                console.log(results);
                res.json({ data: results });
            });
        }
    });
}