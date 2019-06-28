'use strict';

// const dragon = require('./dragon.js');
let displayTable = document.getElementById('dragonsTable');
let saveLocations = document.getElementById('save');

const locations = ['Castle', 'Field', 'Mountain', 'Barn'];
let allDragons = [];

var MakeDragon = function(type, location){
  this.type = type;
  this.location = location;
  allDragons.push(this);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Type';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Change';
  trEl.appendChild(thEl);

  dragonsTable.appendChild(trEl);
};


function displayDragons() {
  for (var i = 0; i < allDragons.length; i++) {
    // allDragons[i].render();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allDragons[i].type;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = allDragons[i].location;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('select');
    tdEl.id = i;
    tdEl.appendChild(new Option(locations[0], locations[0]))
    tdEl.appendChild(new Option(locations[1], locations[1]))
    tdEl.appendChild(new Option(locations[2], locations[2]))
    tdEl.appendChild(new Option(locations[3], locations[3]))

    trEl.appendChild(tdEl);

    dragonsTable.appendChild(trEl);

    // console.log(allDragons[i]);
  }
};

//-------------------------------BUTTON EVENT-----------------------------
function handleNewLocationSubmit(event) {
  event.preventDefault();
  let target = getElementById()
};


new MakeDragon('Blue Tipped Wing', locations[0]);
new MakeDragon('Red Horned', locations[1]);
new MakeDragon('Green Fire', locations[2]);
new MakeDragon('Black Lightning', locations[3]);


makeHeaderRow();
displayDragons();

saveLocations.addEventListener('submit', handleSaveLocations.call(this));