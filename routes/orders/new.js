/**
 * Created by Sahil Makhijani on 5/2/2017.
 */
var express = require('express');
var fetch = require('node-fetch');
var mongoose = require('mongoose');
var Orders = mongoose.model('orders');
var router = express.Router();

router.get('/new', function (req, res) {
    fetch('https://southernct-443-robots-api.herokuapp.com/api/robots/')
        .then(function (response) {
            response.json()
                .then(function (info) {
                    res.render('orders/new', {
                        data: info
                    });
                });
        })
        .catch(function (err) {
            console.log("ERROR:", err);
        });
});

router.post('/new', function (req, res) {
    new Orders({
        robot_id: req.body.robot_id,
        robot_name: req.body.robot_name,
        quantity: req.body.quantity
    }).save(function (err, orders) {
        res.redirect('/');
    });
});

module.exports = router;