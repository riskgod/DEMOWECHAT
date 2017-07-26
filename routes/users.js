var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/index', function(req, res, next) {
	console.log('hello, larry')
  res.render('index', {title: 'EXPRESS'});
});

module.exports = router;
