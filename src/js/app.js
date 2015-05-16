// Dependencies
var _ = require('lodash');
var Game = require('./game');

// Load game
$(document).ready(function(){
  var game = new Game($('canvas'));
});
