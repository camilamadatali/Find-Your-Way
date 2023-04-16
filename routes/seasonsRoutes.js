const express = require('express');
const router = express.Router();
const Season = require('../models/seasonsModel');

// GET /api/seasons/1
router.get('/:id', async function (req, res, next) {
    try {
        console.log("Get cities of the season");
        let result = await Season.getSeasonCity(req.params.id);

        switch (id) {
            case '1':
              result = await pool.query('SELECT * FROM sc WHERE sc_sea_id = 1');
              break;
            case '2':
              result = await pool.query('SELECT * FROM sc WHERE sc_sea_id = 2');
              break;
            case '3':
              result = await pool.query('SELECT * FROM sc WHERE sc_sea_id = 3');
              break;
            case '4':
              result = await pool.query('SELECT * FROM sc WHERE sc_sea_id = 4');
              break;
            default:
              res.status(400).send('Estação inválida');
              return;
          }
        res.status(result.status).send(result.result);

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;