var express = require('express');
var router = express.Router();
var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

var amd = requirejs("../public/javascripts/amd");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: amd.name});
});

module.exports = router;
