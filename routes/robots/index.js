/**
 * Created by Sahil Makhijani on 4/9/2017.
 */
var express = require('express');
var router = express.Router();
var r2d2 = [];
var bb8 = [];
var c3po = [];

// Get JSON data
$(document).ready(function () {
    $.getJSON('https://southernct-443-robots-api.herokuapp.com/api/robots.json', function (data) {
        r2d2 = data[0];
        bb8 = data[1];
        c3po = data[2];
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('robots/index', {
        r2d2: r2d2,
        bb8: bb8,
        c3po: c3po
    });
});

module.exports = router;
