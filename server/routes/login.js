var express = require('express');
var router = express.Router();
var Dao = require('../middleware/Dao')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', (req, res, next) => {
  next()
  // res.render('login');  
}, Dao.Oauth)

module.exports = router;