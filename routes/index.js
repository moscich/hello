var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = process.env.DATABASE_URL
console.log("con = " + conString)
var client = new pg.Client(conString);
client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = client.query("SELECT * FROM users");
  query.on('row', function(row) {
  	res.render('index', { title: row.name});
  })
});

module.exports = router;
