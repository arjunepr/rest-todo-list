require('dotenv').config();

// The death package is used to clean up our app 
// when before it dies. Usually unexpectedly.
const ON_DEATH = require('death')({uncaughtException: true});