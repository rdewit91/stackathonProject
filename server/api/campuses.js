const router = require('express').Router();
const {Campus} =  require('../db');


router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({
            attributes: ['id', 'name', 'imageUrl', 'address', 'description']
        })
        res.json(campuses)
    } catch (err) {
        next(err);
    }
})

router.get('/:campusId', async (req, res, next) => {
    try {
      const campus = await Campus.findByPk(req.params.campusId)
      res.json(campus)
    }
    catch (error) {
      next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
      res.status(201).send(await Campus.create(req.body));
      console.log(req.body);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:Id', async (req, res, next) => {
    try {
      const campus = await Campus.findByPk(req.params.Id);
      await campus.destroy();
      res.send(campus);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;