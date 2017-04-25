/**
 * Created by Sahil Makhijani on 4/15/2017.
 */
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/:id/edit', function(req, res) {
    fetch('https://southernct-443-robots-api.herokuapp.com/api/robots/' + req.params.id)
        .then(function (response) {
            response.json()
                .then(function (info) {
                    res.render('robots/edit', {
                        robot: info
                    });
                });
        })
        .catch(function (err) {
            console.log("ERROR:", err);
        });
});

module.exports = router;