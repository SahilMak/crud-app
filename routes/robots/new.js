/**
 * Created by Sahil Makhijani on 4/10/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/new', function (req, res) {
    res.render('robots/new');
});

module.exports = router;