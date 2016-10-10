const knex = require('../db/knex');
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

function getAll (resource) {
  const renderObject = {};
  return knex(resource)
  .then(data => {
    console.log('hello');
    renderObject[resource] = data;
    console.log('nothello');
    return renderObject;
  });
}

function showOne (resource, id) {
  const renderObject = {};
  return knex(resource).where('id', id)
  .then(data => {
    renderObject[resource] = data;
    renderObject.title = data[0].name;
    return renderObject;
  });
}

function edit (resource, id, body) {
  return knex(resource).where('id', id)
  .update({
    name: body.name_edit,
    city: body.city_edit
  });
}

function del (resource, id) {
  return knex(resource).where('id', id)
  .del();
}

module.exports = {
  getAll,
  showOne,
  edit,
  del
};
