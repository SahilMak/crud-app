/**
 * Created by Sahil Makhijani on 4/9/2017.
 */
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
var r2d2 = [];
var bb8 = [];
var c3po = [];

// Get JSON data
fetch('https://southernct-443-robots-api.herokuapp.com/api/robots.json')
    .then(function (response) {
        response.json()
            .then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name === "r2d2")
                        r2d2 = data[i];
                    if (data[i].name === "bb8")
                        bb8 = data[i];
                    if (data[i].name === "c3po")
                        c3po = data[i];
                }
            })
    })
    .catch(function (err) {
        console.log("ERROR:", err);
    });

router.get('/', function(req, res, next) {
    res.render('robots/index', {
        r2d2: r2d2,
        bb8: bb8,
        c3po: c3po
    });
});

module.exports = router;
