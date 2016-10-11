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
  getAll('employees')
  .then(data => {
    res.render('employees_index', data);
  });
}

function showOneRoute (req, res, next) {
  const id = req.params.id;
  showOne('employees', id)
  .then(data => {
    res.render('donut', data);
  });
}

function editRoute (req, res, next) {
  const id = req.params.id;
  const body = req.body;
  edit('employees', id, body)
  .then(() => {
    res.redirect(`/employee/${id}/show`);
  });
}

function deleteRoute (req, res, next) {
  const id = req.params.id;
  del('employees', id)
  .then(() => {
    res.redirect(`/employee`);
  });
}

module.exports = router;
