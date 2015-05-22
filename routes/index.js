var express = require('express');
var router = express.Router();
var requirejs = require('requirejs');



var amd = requirejs("../public/javascripts/amd");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: amd.name});
});

module.exports = router;
