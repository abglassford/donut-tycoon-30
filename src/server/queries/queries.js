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

function showOneShop (id) {
  const renderObject = {};
  return knex('shops').where('shops.id', id)
  .innerJoin('shop_donut', 'shops.id', 'shop_donut.shop_id')
  .innerJoin('donuts', 'donuts.id', 'shop_donut.donut_id')
  .then(data => {
    renderObject.shops = data;
    return renderObject;
  });
}

function getShopData (id) {
  const renderObject = {}
  return knex('shops').where('id', id)
  .innerJoin('shop_donut', 'shops.id', 'shop_donut.shop_id')
}

function shopDel (paramId) {
  return knex('shop_donut').where('shop_id' , paramId).del()
}

function emplShopDel (paramId) {
  return knex('employees').where('shop_id', paramId).del()
}

function del (resource, id) {
  return knex(resource).where('id', id).del()
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
  showOneShop,
  editShop,
  del,
  newShop,
  shopDel,
  emplShopDel
};
