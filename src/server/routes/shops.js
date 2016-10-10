const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const {getAll, showOne, edit, del} = require('../queries/queries.js');
const indexController = require('../controllers/index');

router.get('/', getAllRoute);
router.get('/:id/show', showOneRoute);
router.post('/:id/edit', editRoute);
router.post('/:id/delete', deleteRoute);

function getAllRoute (req, res, next) {
  getAll('shops')
  .then(data => {
    res.render('shops_index', data);
  });
}

function showOneRoute (req, res, next) {
  const id = req.params.id;
  showOne('shops', id)
  .then(data => {
    res.render('shop', data);
  });
}

function editRoute (req, res, next) {
  const id = req.params.id;
  const body = req.body;
  edit('shops', id, body)
  .then(() => {
    res.redirect(`/shops/${id}/show`);
  });
}

function deleteRoute (req, res, next) {
  const id = req.params.id;
  del('shops', id)
  .then(() => {
    res.redirect(`/shops`);
  });
}

module.exports = router;