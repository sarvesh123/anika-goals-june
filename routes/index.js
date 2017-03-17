var express = require('express');
var router = express.Router();
var Product = require('../models/products');

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err, prods) {
		var productsArray = [];
		var limit = 3;
		for(var i =0; i < prods.length; i += limit) {
			productsArray.push(prods.slice(i, i+limit));
		}
		res.render('shop/index', { title: 'Anika\'s Shopping Cart', products: productsArray });
	});
});

module.exports = router;
