const router = require('express').Router();
const pplDb = require('../db/PeopleDb');

router.get('/', async (req, res) => {
    const people = await pplDb.getAll();
    res.json(people);
});

router.post('/addPerson', async (req, res) => {
    await pplDb.addPerson(req.body);
    res.json({ status: 'ok' });
})
router.get('/getById', async (req, res) => {
    const person = await pplDb.getPersonById(req.query.id);
    res.json(person);
})
module.exports = router;