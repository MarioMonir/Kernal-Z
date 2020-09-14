var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: "hello mario" });
})

// Submit lead
router.post('/', function (req, res) {
  res.send("server recieved the request peacefully");
  console.log(req.body)
  // then should store this object in the database 
});
module.exports = router;
