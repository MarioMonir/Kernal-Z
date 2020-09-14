var express = require('express');
var router = express.Router();

router.get('/',(req,res, next)=>{
  res.render('services',{title:"hello mario"});
})
module.exports = router;
