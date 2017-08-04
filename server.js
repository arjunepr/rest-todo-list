require('dotenv').config();

const { Server } = require('hapi');
const Vision = require('vision');
const Ejs = require('ejs');

const { join } = require('path');

const server = new Server();

// Properly displays site title, whether or not page title is given.
server.app.titleHelper = () => {
  const siteTitle = 'Users + Todo API';
  let fullTitle = null;

  // If the 
  if(server.app.title){
    
    fullTitle = siteTitle + ' | ' + sever.app.title;
  
  } else {

    fullTitle = siteTitle;

  }

  return fullTitle;

}

server.connection({
  port: 8080
});

server.register(Vision, err => {
  if(err){
    console.log('Couldn\'t load vision.');
  }

  server.views({
    engines: {
      ejs: Ejs
    },
    path: join(__dirname, 'views'),
    layout: join(__dirname, 'views', 'layouts', 'default')
  });
});

server.start(err => {
  if(err){
    console.error(err);
    throw err;
  };

  console.log('Server running at:', server.info.uri);
});


// The death package is used to clean up our app 
// when before it dies. Usually unexpectedly.
const ON_DEATH = require('death')({uncaughtException: true});

ON_DEATH((signal, err) => {

  console.log('Stopping the server.');

  server.stop().then(err => {
    console.log('Server stopped.');
  });
});