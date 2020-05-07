var express = require('express');
var bodyParser = require('body-parser');
var Database = require('./database/database');
var Product = require('./database/models/product');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/list-product', function (req, res) {
    Product.find({})
        .then((products) => {
            res.render('list-product', { products: products });
        })
        .catch((err) => {
            console.log('Error: ', err);
            throw err;
        });
});

app.post('/create-product', (req, res) => {
    let newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    });

    newProduct
        .save()
        .then((doc) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log('Error: ', err);
            throw err;
        });
});

app.listen(3000);
