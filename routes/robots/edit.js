/**
 * Created by Sahil Makhijani on 4/15/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/:id/edit', function(req, res) {
    res.render('robots/edit');
});

module.exports = router;