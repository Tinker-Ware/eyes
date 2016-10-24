// This file configures a web server for the production build

/* eslint-disable no-var */

var compression = require('compression');
var express = require('express');
var path = require('path');
var app = express();

/* eslint-disable no-console */

app.set('port', 3000);

app.use(compression());

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Running production build...');
});
