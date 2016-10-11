const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const {getAll, showOneShop, editShop, del, newShop, shopDel, emplShopDel} = require('../queries/queries.js');
const indexController = require('../controllers/index');

router.get('/', getShopsRoute);
router.get('/:id/show', showShopRoute);
router.post('/:id/edit', editShopRoute);
router.post('/:id/delete', deleteShopRoute);
router.post('/new', newShopRoute);

function getShopsRoute (req, res, next) {
  getAll('shops')
  .then(data => {
    res.render('shops_index', data);
  });
}

function showShopRoute (req, res, next) {
  const id = req.params.id;
  showOneShop(id)
  .then(data => {
    res.render('shop', data);
  });
}

function editShopRoute (req, res, next) {
  const id = req.params.id;
  const body = req.body;
  editShop('shops', id, body)
  .then(() => {
    res.redirect(`/shops/${id}/show`);
  });
}

function deleteShopRoute (req, res, next) {
  const id = req.params.id;
  shopDel(id)
  .then(()=> {
    emplShopDel(id)
    .then(() => {
      del('shops', id)
      .then(() => {
        res.redirect('/shops')
      });
    });
  });
}

function newShopRoute (req, res, next) {
  console.log('hit1');
  const body = req.body;
  newShop('shops', body)
  .then(() => {
    console.log('hit2');
    res.redirect(`/shops`);
  });
}

module.exports = router;
