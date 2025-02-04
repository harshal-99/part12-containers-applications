const express = require('express');
const router = express.Router();
const {getAsync} = require('../redis/index')
const configs = require('../util/config')

router.get('/', (req, res) => {
  res.status(200).end()
})

/* GET index data. */
router.get('/statistics', async (req, res) => {
  const count = await getAsync('added_todos')
  res.send({
    ...configs,
    count
  });
});

module.exports = router;
