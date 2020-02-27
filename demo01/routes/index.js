var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    // res.render('index', { title: 'Express' });
    res.send('Hello , ' + req.query.name);
});

router.get('/make-short-name', function(req, res) {
    // res.render('index', { title: 'Express' });
    res.send('Hello ,' + req.query.firstname.substr(0, 1) + '.' + req.query.secondname);
});
module.exports = router;