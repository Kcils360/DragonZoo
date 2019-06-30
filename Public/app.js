'use strict';

let displayTable = document.getElementById('dragonsTable');
let saveLocations = document.getElementById('save');
let allDragons = [];
const locations = ['Castle', 'Field', 'Mountain', 'Barn'];

var MakeDragon = function () {
  fetch('/api/v1/dragons')
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < data.results.length; i++) {
        allDragons.push(data.results[i]);
      }
      makeHeaderRow();
      displayDragons();
    });

};

function displayDragons() {
  for (var i = 0; i < allDragons.length; i++) {
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
    tdEl.appendChild(new Option("Select"))
    tdEl.appendChild(new Option(locations[0], locations[0]))
    tdEl.appendChild(new Option(locations[1], locations[1]))
    tdEl.appendChild(new Option(locations[2], locations[2]))
    tdEl.appendChild(new Option(locations[3], locations[3]))

    trEl.appendChild(tdEl);
    dragonsTable.appendChild(trEl);
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

//-----------------------------------------------------
function handleNewLocation(id) {
  let target = document.getElementById(id);
  let value = target.options[target.selectedIndex].value;
  allDragons[id].location = value;

  putData('/api/v1/dragons/0', allDragons[id]);
  for (var i = document.getElementById("dragonsTable").rows.length; i > 0; i--) {
    document.getElementById("dragonsTable").deleteRow(i - 1);
  }
  makeHeaderRow();
  displayDragons();
};

MakeDragon();

//-------------------HTTP PUT---------------------
var putData = function (url, data) {
  fetch(url, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'put',
    body: JSON.stringify(data),
  })
    .then(response => response.json());
};