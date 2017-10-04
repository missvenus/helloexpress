var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo' });
});

// router.get('/:name', function(req, res, next) {
//   var name = req.params.name;
//   res.render('index', { title: name });
// });

module.exports = router;
