var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

router.get('/', (req, res, next) => {
  res.render('index', { title: "hello mario" });
})

// Submit lead
router.post('/', function (req, res) {
  res.send("server recieved the request peacefully");
  console.log(req.body)

 // tested and worked well jus put a valid email and password to send by

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '', // put a valid email
      pass: ''  // put a valid password
    }
  });
  
  var mailOptions = {
    from: req.body.email,
    to: 'mariomonir@kernel-z.com',
    subject: req.body.url,
    text: `
          Name  : ${req.body.name}
          Email : ${req.body.email}
          Phone : ${req.body.phone}
        
          ${req.body.message}
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});
module.exports = router;
