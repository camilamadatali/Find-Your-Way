const express = require('express');
const router = express.Router();
const Activity = require('../models/activityModel');


router.get('/:id', async function (req, res, next){
    try {
        console.log("Get activities of the cities");
        let result = await Activity.getCityActivity(req.params.id);
        res.status(result.status).send(result.result);
        switch (id) {
            case '1':
                result = await pool.query('SELECT * FROM ca WHERE ca_act_id = 1');
                break;
            case '2':
                result = await pool.query('SELECT * FROM ca WHERE ca_act_id = 2');
                break;
            case '3':
                result = await pool.query('SELECT * FROM ca WHERE ca_act_id = 3');
                break;
            case '4':
                result = await pool.query('SELECT * FROM ca WHERE ca_act_id = 4');
                break;
            case '5':
                result = await pool.query('SELECT * FROM ca WHERE ca_act_id = 5');
                break;

            default:
                res.status(400).send('Estação inválida');
                return;
        }


    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;