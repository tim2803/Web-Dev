var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'My Demo Prog'
    });
});


router.post('/', function(req, res) {
    res.render('index', {
        title: 'Method POST result:',
        // FirstName: req.body.firstname.substar(0, 1),
        // LastName: req.body.lastname
        Greeting: 'Hello ' + req.body.firstname.substr(0, 1) + '.' + req.body.lastname
    });
});
module.exports = router;