const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET route for movies
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "movies";`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows);
        }).catch((error) => {
            console.log(`Error getting details`, error);
            res.sendStatus(500);
        })
});

// GET route for movie details
router.get('/:id', (req, res) => {
    let movieId = req.params.id;
    const sqlText = `SELECT "movies"."title", "movies"."description", "genres"."name",
    "movies"."id"
    FROM "movies_genres"
    JOIN "movies" ON "movies"."id" = "movies_genres"."movies_id"
    JOIN "genres" ON "genres"."id" = "movies_genres"."genres_id"
    WHERE "movies"."id" = $1;`;
    const values = [movieId]
    pool.query(sqlText, values)
        .then((response) => {
            console.log('This is the response', response);
            res.send(response.rows[0]);
        })
        .catch((error) => {
            console.log(`Error selecting movie genre`, error);
            res.sendStatus(500);
        })
})

router.put('/update/:id', (req, res) => {
    const sqlText = `UPDATE "movies" SET "title" = $1, "description" = $2 
    WHERE "id" = $3;`;
    values = [req.body.name, req.body.description, req.body.id]
    // maybe req.body.id instead of params
    pool.query(sqlText, values)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error updating movies`, error);
            res.sendStatus(500);
        })
})

module.exports = router;