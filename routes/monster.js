const express = require('express');
const router = express.Router();

const monsters = require('../model/db');

router.get('/:monsterSlug?', (request, response) => {
    if (!!request.params.monsterSlug) {
        let monsterName = '';
        let monsterSpecies = '';

        const theMonster = monsters.find(monster => monster.slug === request.params.monsterSlug);

        console.log("the monster is, (I hope this works) :", theMonster);

        response.render('template', {
            locals: {
                title: theMonster.name,
                species: theMonster.species
            },
            partials: {
                partial: 'partial-monster-details'
            }
        })
        console.log("we have a monster slug!");
    } else {
        response.render('template', {
            locals: {
                title: 'MONSTER!!',
                data: monsters
            },
            partials: {
                partial: 'partial-monster-list'
            }
        })
    }
});

module.exports = router;