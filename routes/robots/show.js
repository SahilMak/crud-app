/**
 * Created by Sahil Makhijani on 4/13/2017.
 */
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/:id', function(req, res) {
    fetch('https://southernct-443-robots-api.herokuapp.com/api/robots/' + req.params.id + '.json')
        .then(function (response) {
            response.json()
                .then(function (info) {
                    res.render('robots/show', {
                        robot: info
                    });
                });
        })
        .catch(function (err) {
            console.log("ERROR:", err);
        });
});

module.exports = router;