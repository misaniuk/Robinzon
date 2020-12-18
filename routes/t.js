var express = require('express');
var router = express.Router();
const translate = require('@vitalets/google-translate-api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  translate(req.query.text, {to: req.query.to, from: req.query.from, client: 'gtx'}).then(r => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(r.text);

}).catch(err => {
    console.error(err);
});

});

module.exports = router;
