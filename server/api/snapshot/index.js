'use strict';

const fs = require('fs');
var express = require('express');
// var controller = require('../recipe.controller');
const recipeController = require('../recipe/recipe.controller');
var Recipe = require('../../models/recipe.model.js');

var router = express.Router();

router.post('/', snapshotBaby);

module.exports = router;


function snapshotBaby(req, res) {
    Recipe.find({}, (err, docs) => {
        if (err) return console.error(err);

        fs.writeFile('backup_recipes.json', JSON.stringify(docs), (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('Lyric saved!');
            res.send('success')
        });
    });

}
