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
  return knex('shop_donut').where('shop_donut.shop_id', id)
    .leftJoin('donuts', 'donuts.id', 'shop_donut.donut_id')
    .leftJoin('shops', 'shops.id', 'shop_donut.shop_id')
    .leftJoin('employees', 'employees.shop_id, shops.id')
    //triple (quadruple?) join not working out
}

function getShopData (id) {
  const renderObject = {};
  return knex('shops').where('id', id)
  .innerJoin('shop_donut', 'shops.id', 'shop_donut.shop_id');
}

function shopDel (paramId) {
  return knex('shop_donut').where('shop_id', paramId).del();
}

function emplShopDel (paramId) {
  return knex('employees').where('shop_id', paramId).del();
}

function del (resource, id) {
  return knex(resource).where('id', id).del();
}

function editShop (resource, id, body) {
  return knex(resource).where('id', id)
  .update({
    name: body.name_edit,
    city: body.city_edit
  });
}

function newShop (body) {
  //how do I insert into donuts while inserting into shops?
  //promise.all?
  return Promise.all([
    knex('shops').insert({
      shop_name: body.shop_name_new,
      city: body.city_new
    }),
    knex('donuts').insert({
      donut_name: body.donut_name_new,
      topping: body.topping_new,
      price: body.price_new
    })
  ])
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
