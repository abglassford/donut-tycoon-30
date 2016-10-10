const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const {getAll, showOne, edit, del, createNew} = require('../queries/queries.js');
const indexController = require('../controllers/index');

router.get('/', getAllRoute);
router.get('/:id/show', showOneRoute);
router.post('/:id/edit', editRoute);
router.post('/:id/delete', deleteRoute);

function getAllRoute (req, res, next) {
  getAll('donuts')
  .then(data => {
    res.render('donuts_index', data);
  });
}

function showOneRoute (req, res, next) {
  const id = req.params.id;
  showOne('donuts', id)
  .then(data => {
    res.render('donut', data);
  });
}

function editRoute (req, res, next) {
  const id = req.params.id;
  const body = req.body;
  edit('donuts', id, body)
  .then(() => {
    res.redirect(`/donuts/${id}/show`);
  });
}

function deleteRoute (req, res, next) {
  const id = req.params.id;
  del('donuts', id)
  .then(() => {
    res.redirect(`/donuts`);
  });
}

module.exports = router;
