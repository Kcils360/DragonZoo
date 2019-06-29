'use strict';
const express = require('express');
const router = express.Router();

router.use(express.json());

router.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

let allDragons = [
  { type: "Blue Tipped Wing", location: "Barn"},
  { type: "Red Horned", location: "Barn" },
  { type: "Green Fire", location: "Barn" },
  { type: "Black Lightning", location: "Barn" }
];

router.get('/dragons', (req, res, next) => {
  let count = allDragons.length;
  let results = allDragons;
  res.json({ count, results });
});

router.put('/dragons/:id', messager, (req, res, next) => {
  let id = req.params.id;
  let { type, location } = req.body;
  let updatedRecord = { type, location };
  allDragons = allDragons.map((record) => (record.id === parseInt(id)) ? updatedRecord : record);
  res.json(updatedRecord);
});

module.exports = router;