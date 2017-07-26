var express = require('express');
var router = express.Router();
const sha1 = require('sha1');
var menu = require('../menu/menu')

menu.getMenu();
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('hello, geek');
  checkRequest('123456',req,res);
});

checkRequest = function (token,req,res) {
    let query = req.query;
    let list = [token, query.timestamp, query.nonce].sort().join('');
    let sha = sha1(list);
    if (sha == query.signature) {
        res.send(query.echostr);
    } else {
        res.send("wrong");
    }
};

module.exports = router;
