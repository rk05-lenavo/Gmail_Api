const nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var port = process.env.PORT || 3002;

var auth = {
    type: 'oauth2',
    user: 'abcd7@gmail.com',
    clientId: '650092038098-cog8edbvpihgnrkqnch1vfm8il16i9d2.apps.googleusercontent.com',
    clientSecret: 'W5Bp-k2-clURtp7fZAcRarjG',
    refreshToken: '1//04iUchliBvhbDCgYIARAAGAQSNwF-L9Irl_LdzRODBxuGQ7j4xxZq5aPVy5UsLCmsf2XGa02S2dlS6aE_xeoJpeiQJwp3SrjOvMA',
};

app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.post('/send', function(req, res){
    response = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }
    
    
    var mailOptions = {
        from: req.body.name,
        to: 'aaabbbccc7799@gmail.com',
        subject: 'My site contact from: ' + req.body.name,
        text: req.body.message,
        html: 'Message from: ' + req.body.name + '<br> richa </br> Email: ' +  req.body.email + '<br> kumari </br> Message: ' + req.body.message,
    };var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: auth,
    });transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(JSON.stringify(res));
        }
    });
  })// start the server
  app.listen(port);