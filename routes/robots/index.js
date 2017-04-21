/**
 * Created by Sahil Makhijani on 4/9/2017.
 */
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function (req, res) {
    fetch('https://southernct-443-robots-api.herokuapp.com/api/robots')
        .then(function (response) {
            response.json()
                .then(function (info) {
                    res.render('robots/index', {
                        data: info
                    });
                })
        })
        .catch(function (err) {
            console.log("ERROR:", err);
        });
});

module.exports = router;
