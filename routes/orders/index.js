/**
 * Created by Sahil Makhijani on 5/2/2017.
 */
var express = require('express');
var mongoose = require('mongoose');
var Orders = mongoose.model('orders');
var router = express.Router();

router.get('/', function (req, res) {
    Orders.find(function (err, doc) {
        res.render('orders/index', {
            data: doc
        });
    });
});

module.exports = router;