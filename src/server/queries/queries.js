const knex = require('../db/knex');
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

function getAll (resource) {
  const renderObject = {};
  return knex(resource)
  .then(data => {
    renderObject[resource] = data;
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

function del (resource, id) {
  return knex(resource).where('id', id)
  .del();
}

function editShop (resource, id, body) {
  return knex(resource).where('id', id)
  .update({
    name: body.name_edit,
    city: body.city_edit
  });
}

function newShop (resource, body) {
  return knex(resource).insert({
    name: body.name_new,
    city: body.city_new
  });
}

module.exports = {
  getAll,
  showOne,
  editShop,
  del,
  newShop
};
