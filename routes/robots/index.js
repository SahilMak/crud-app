/**
 * Created by Sahil Makhijani on 4/9/2017.
 */
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
var data = [];

// Get JSON data
fetch('https://southernct-443-robots-api.herokuapp.com/api/robots.json')
    .then(function (response) {
        response.json()
            .then(function (info) {
                data = info;
            })
    })
    .catch(function (err) {
        console.log("ERROR:", err);
    });

router.get('/', function(req, res) {
    res.render('robots/index', {
        data: data
    });
});

module.exports = router;
