'use strict';

const dragon = require('./dragon.js');

const locations = ['Castle', 'Field', 'Mountain', 'Barn']

var MakeDragon = function(type, location){
  this.type = type;
  this.location = location;
};

new MakeDragon('Blue Tipped Wing', locations[0]);
new MakeDragon('Red Horned', locations[1]);
new MakeDragon('Green Fire', locations[2]);
new MakeDragon('Black Lightning', locations[3]);
