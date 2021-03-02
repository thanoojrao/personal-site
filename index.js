var express = require('express');
var http = require('http');
var nodemailer = require('nodemailer');
var path = require('path');
var dotenv = require('dotenv').config();
const bodyParser = require('body-parser');



var app = express();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });
  
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: true }));

  

app.get('/',function(req,res){
    res.render('home',{});
});

app.get('/contact', function(req, res) {
    res.render('contactForm',{});
   });
app.get('/bubble', function(req, res) {
    res.render('bubble',{});
   });

app.post('/contact',function(req,res){
  var mailOptions = {
    from: 'thanoojlingampally@gmail.com',
    to: 'lt.19u10625@btech.nitdgp.ac.in',
    subject: 'name: '+ req.body.name,
    html: '<h4>mail: '+req.body.mail+'</h4>'+'<br>'+'<p>' +req.body.message+'</p>',
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect('/');
    }
  });
})


http.createServer(app).listen(
 app.get('port'),
 function(){
 console.log('Express.js server listening on port ' +app.get('port'));
 }
 );
