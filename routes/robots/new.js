/**
 * Created by Sahil Makhijani on 4/10/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('robots/index', {
        //
    });
});

module.exports = router;