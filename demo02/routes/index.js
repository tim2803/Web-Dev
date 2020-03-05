var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'My Demo' });
});



router.post('/', function(req, res) {
    if (isNaN(res.body.firstname) === false && isNaN(res.body.lastname) === false) {
        var a = parseInt(res.body.firstname) + parseInt(res.body.lastname);
        var b = parseInt(res.body.firstname) - parseInt(res.body.lastname);
        var c = parseInt(res.body.firstname) * parseInt(res.body.lastname);
    }
    res.render('index', {
        title: 'Method POST result:',
        Greeting: 'hello' + a + ' ' + b + ' ' + c
    });
});
module.exports = router;