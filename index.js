const path = require('path');
const express = require('express');
const app = express();

//The port:
const PORT = 8080;

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '../public')));

// Any routes or other various middlewares should go here!

const startListening = async function() {
  // await db.sync();
  app.listen(PORT, function() {
    console.log(
      ` ***** I'm leisurely listening on pleasent port of ${PORT} *****`
    );
  });
};

startListening();

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
