/**
 * Created by Sahil Makhijani on 4/10/2017.
 */
var express = require('express');
var router = express.Router();

router.route('/new')
    .get(function (req, res) {
        res.render('robots/new');
    })
    // .post(function (req, res) {
    //     console.log('something here');
    // })
;

module.exports = router;