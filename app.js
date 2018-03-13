const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const initSwagger = require('./server/middleware/swagger/initSwagger');
const initCookie = require('./server/middleware/cookie/initCookie');

const app = express();

initSwagger(app);
initCookie(app);

app.use(logger('dev'));
app.use(bodyParser.json());

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({
  extended: true,
}));

require('./server/routes')(app);


module.exports = app;
