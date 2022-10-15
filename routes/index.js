var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Resume',name:'hathi',rollno:'21PA26',qua:'MCA',ug:'B.sc(c.s)' });
});

module.exports = router;
