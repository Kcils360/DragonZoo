'use strict';

// const dragon = require('./dragon.js');
let displayTable = document.getElementById('dragonsTable');
let saveLocations = document.getElementById('save');

const locations = ['Castle', 'Field', 'Mountain', 'Barn'];
let allDragons = [];

var MakeDragon = function (type, location) {
  this.type = type;
  this.location = location;
  allDragons.push(this);
};

MakeDragon.prototype.render = function (i) {

    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allDragons[i].type;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = allDragons[i].location;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('select');
    tdEl.id = i;
    tdEl.setAttribute("onChange", "handleNewLocation(id)");
    tdEl.appendChild(new Option(locations[0], locations[0]))
    tdEl.appendChild(new Option(locations[1], locations[1]))
    tdEl.appendChild(new Option(locations[2], locations[2]))
    tdEl.appendChild(new Option(locations[3], locations[3]))

    trEl.appendChild(tdEl);

    dragonsTable.appendChild(trEl);

  };
    function displayDragons() {
      for (var i = 0; i < allDragons.length; i++) {
        allDragons[i].render(i);
      }
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


//-------------------------------BUTTON EVENT-----------------------------
function handleNewLocation(id) {
  event.preventDefault();
  let target = document.getElementById(id);
  let value = target.options[target.selectedIndex].value;
  allDragons[id].location = value;
  // dragonsTable.tr.remove();
  for (var i = document.getElementById("dragonsTable").rows.length; i > 0; i--) {
    document.getElementById("dragonsTable").deleteRow(i - 1);
  }
  displayDragons();
};


new MakeDragon('Blue Tipped Wing', locations[0]);
new MakeDragon('Red Horned', locations[1]);
new MakeDragon('Green Fire', locations[2]);
new MakeDragon('Black Lightning', locations[3]);


makeHeaderRow();
displayDragons();