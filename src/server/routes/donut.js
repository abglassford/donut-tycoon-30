const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Donuts!';
  res.render('donut', renderObject);
});

router.get('/shops', (req, res, next) => {
  const renderObject = {};
  renderObject.title = 'Shops!';
  knex('shops')
  .then(data => {
    renderObject.shops = data;
    res.render('shops_index', renderObject);
  });
});

router.get('/shops/:id/show', (req, res, next) => {
  const id = req.params.id;
  const renderObject = {};
  knex('shops').where('id', id)
  .then(data => {
    renderObject.shops = data
    renderObject.title = data[0].name
    res.render('shop', renderObject)
  });
});

router.post('/shops/:id/edit', (req, res, next) => {
  const id = req.params.id;
  knex('shops').where('id', id).update({
    name: req.body.name_edit,
    city: req.body.city_edit
  }, '*')
  .then(() => {
    res.redirect(`/donut/shops/${id}/show`)
  });
});

module.exports = router;
