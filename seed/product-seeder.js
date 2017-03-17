var Product = require('../models/products');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/anika-shopping');

var product = [
	new Product({
		imgDir: '/images/BlackDeckerLI4000.jpg',
		title: 'Black & Decker 4V SmartSelect Screwdriver',
		description: 'The LI4000 is powered by a rechargable 3.6-Volt Lithium Ion battery that can hold a charge for up to a year and a half, if you treat it right.',
		price: '30.00'
	}),
	new Product({
		imgDir: '/images/41ynbS9UdbL._SY300_QL70_FMwebp_.jpg',
		title: 'BD 4V Lithium Crdlss Scrwdrvr',
		description: '1 Lithium ion batteries required. (included).',
		price: '4,269.00'
	}),
	new Product({
		imgDir: '/images/81dCvuMYFyL._SL1500_.jpg',
		title: 'Black & Decker Junior Power Tool Workshop 50+ pieces',
		description: 'Black and Decker Junior Power Tool Workshop features realistic action, lights and sounds, with 50+ accessory pieces. Looks just like a real work bench, and comes with everything you need to assemble your own pretend tool box. Kids ages three and up will enjoy practicing their building skills with the Black and Decker Junior Power Tool Workshop. With loads of pretend tools and accessories, the workshop offers plenty of ways for aspiring builders to craft new creations.',
		price: '11,836.00'
	}),
	new Product({
		imgDir: '/images/BlackDeckerLI4000.jpg',
		title: 'Black & Decker 4V SmartSelect Screwdriver',
		description: 'The LI4000 is powered by a rechargable 3.6-Volt Lithium Ion battery that can hold a charge for up to a year and a half, if you treat it right.',
		price: '30.00'
	}),
	new Product({
		imgDir: '/images/BlackDeckerLI4000.jpg',
		title: 'Black & Decker 4V SmartSelect Screwdriver',
		description: 'The LI4000 is powered by a rechargable 3.6-Volt Lithium Ion battery that can hold a charge for up to a year and a half, if you treat it right.',
		price: '30.00'
	}),
	new Product({
		imgDir: '/images/BlackDeckerLI4000.jpg',
		title: 'Black & Decker 4V SmartSelect Screwdriver',
		description: 'The LI4000 is powered by a rechargable 3.6-Volt Lithium Ion battery that can hold a charge for up to a year and a half, if you treat it right.',
		price: '30.00'
	})
];

var done = 0;

for(var i =0; i < product.length; i++) {
	product[i].save(function(err, res) {
		done++;
		if(done === product.length) {
			mongoose.disconnect();
		}
	});
}