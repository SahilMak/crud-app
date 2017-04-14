/**
 * Created by Sahil Makhijani on 4/13/2017.
 */
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
var data = [];

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

router.get('/robots/:name', function(req, res) {
    var robot = data.filter(function (robot) {
        return robot.name === req.params.name;
    })[0];
    res.render('robots/show', {
        robot: robot
    });
});

module.exports = router;