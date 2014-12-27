'use strict';

var compileSass = require('broccoli-sass');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var appAndImages = pickFiles('client', {
  srcDir: '/',
  files: [ '**/*.html', 'images/**/*', 'scripts/**/*' ],
  destDir: '/'
});

var css = compileSass(
  [ 'client/styles' ],
  'index.scss',
  'styles/index.css'
);

module.exports = mergeTrees([ appAndImages, css ]);