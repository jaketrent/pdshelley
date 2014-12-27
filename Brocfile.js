var compileSass = require('broccoli-sass');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = pickFiles('client', {
  srcDir: '/',
  destDir: '/'
});

var sass = compileSass(
  [ 'client/styles' ],
  'index.scss',
  'styles/index.css'
);

module.exports = mergeTrees([ app, sass ]);