const express = require('express');
const router = express.Router();
const History = require('../models/historyModel');

router.get('/:id', async function (req, res, next) {
    try {
        console.log("Get history of cities");
        let result = await History.getHistoryCity(req.params.id);
        switch (id) {
            case '1':
              result = await pool.query('SELECT * FROM ch WHERE ch_hist_id = 1');
              break;
            case '2':
              result = await pool.query('SELECT * FROM ch WHERE ch_hist_id = 2');
              break;
            case '3':
              result = await pool.query('SELECT * FROM ch WHERE ch_hist_id = 3');
              break;
            case '4':
              result = await pool.query('SELECT * FROM ch WHERE ch_hist_id = 4');
              break;
            case '5':
              result = await pool.query('SELECT * FROM ch WHERE ch_hist_id = 5');
              break;
            case '6':
              result = await pool.query('SELECT * FROM ch WHERE ch_hist_id = 6');
              break;
            case '7':
              result = await pool.query('SELECT * FROM ch WHERE ch_hist_id = 7');
              break;
            default:
              res.status(400).send('Estação inválida');
              return;}
        res.status(result.status).send(result.result);

    } catch (err) {
        console.log(err);

        res.status(500).send(err);
    }
});

module.exports = router;