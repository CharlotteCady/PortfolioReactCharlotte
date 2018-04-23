 // Package import
 var sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();
const nodemailer = require('nodemailer');

// Local import
const Contact = require('./formModel');

// Init variable
const app = express();
// enable ssl redirect
app.use(sslRedirect());

app.use(express.static(path.join(__dirname, 'client/build')));

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: `${process.env.MAIL}`,
      pass: `${process.env.MAIL_PASS}`
  }
});

 // le .use c'est quand on utilise un middleware
 // (une fonction qui se met entre la requete et le traitement de la requete)
app.use(bodyParser.json()); // pour pouvoir parser un format json

// ajoute deux instructions dans le header de la réponse su server
// permet de faire des requetes API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const formValidator = (req, res, next) => {
  const isNoSqlInjected = (item) => {
    const contentFormat = /^((?!{).).*|((?!}).)$/;
    const itemFormatted = item.replace(/(\s+)/g,'');
    const find = itemFormatted.search(contentFormat);
    return find
  };

  if (req.body.form) {
    const payLoad = Object.values(req.body.form);
    const result = payLoad.map(item => {
      return isNoSqlInjected(item);
    });

    async function test(){
      try {
        let resultat = await result.indexOf(-1);
        return resultat;
      }
      catch(error) {
        console.log(error);
      }
    }

    test().then(function(result){
      if(result > -1){
        console.log('form was not validate');
        res.send({"message":"false"});
      } else {
        console.log('form was validate')
        next();
      }
    })

  } else {
    next();
  }
};

app.use('/form-submit', formValidator);

// Les routes
app.get('/colors', (req, res) => {
  const url = 'http://www.colourlovers.com/api/palettes/random&format=json';
  axios
    .get(url)
    .then((response) => {
      res.send(JSON.stringify(response.data)); // renvoie au front les données récupérées dans mon API
    }) // Promise, s'effectue que si la méthode .get est terminée
})

app.post('/form-submit', (req, res) => {
  const { name, email, message } = req.body.form; // req.body grâce à body parser
  // paramètre de connexion
  const mongoDB = `mongodb://charlotte:${process.env.DB_PASS}@ds121716.mlab.com:21716/portfolio`;
  mongoose.connect(mongoDB);
  // lancer et stocker la connexion
  const db = mongoose.connection;
  // tester la connexion
  db.on('error', console.error.bind(console, 'mongoDB connection error: '));
  db.once('open', () => {
    console.log('Youpi, Connected to the DB');
  })

  const newContact = new Contact({
    name,
    email,
    message
  });
  newContact.save((err, savedContact) => {
    if (err) {
      console.error(err);
      return err;
    }

    // setup email data with unicode symbols
    let mailOptions = {
        from: email, // sender address
        to: 'charlotte.cady@hotmail.fr', // list of receivers
        subject: 'New message from your portfolio', // Subject line
        text: `Name : ${name} - Email : ${email} - Message : ${message}`, // plain text body
        html: `<p>Name : ${name}</p><p>Email : ${email}</p><p>Message : ${message}</p>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      console.log('mailOptions : ');
      console.log(mailOptions);
      console.log('email : ');
      console.log(email);
        if (error) {
            console.log(error);
        } else {
          console.log('email : ');
          console.log(email);
          console.log(info);
        }
    });
    res.send({"message":"true"});
  });
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
