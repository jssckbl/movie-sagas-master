const express = require ('express');
const router = express.Router();
const pool = require('../modules/pool');



router.get('/', (req, res) =>{
    const queryText= `SELECT * FROM "movies"`;
    pool.query(queryText)
    .then((response) => {
        res.send(response.rows);
    }).catch (( error ) => {
        console.log(`Error getting details`, error);
        res.sendStatus(500);
    })
})



// router.get('/', (req, res) => {
//     const queryText = 'SELECT * FROM plant';
//     pool.query(queryText)
//         .then((result) => { res.send(result.rows); })
//         .catch((err) => {
//             console.log('Error completing SELECT plant query', err);
//             res.sendStatus(500);
//         });
// });

module.exports = router;