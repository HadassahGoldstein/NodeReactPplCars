const router = require('express').Router();
const carsDb = require('../db/CarsDb');

router.get('/getForPerson', async (req, res) => {
    const cars = await carsDb.getCars(req.query.id);
    res.json(cars);
});

router.post('/addCar',async(req,res)=>{
    await carsDb.addCar(req.body);
    res.json({ status: 'ok' });
})
router.post('/delete',async (req,res)=>{
    await carsDb.deleteCars(req.body.id);
    res.json({status:'ok'});
})

module.exports = router;