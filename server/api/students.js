const router = require('express').Router();
const {Student} =  require('../db');

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll({
            attributes: ['id', 'firstName', 'lastName', 'email', 'imageUrl', 'gpa']
        })
        res.json(students)
    } catch (err) {
        next(err);
    }
});

router.get('/:studentId', async (req, res, next) => {
    try {
      const student = await Student.findByPk(req.params.studentId)
      res.json(student)
    }
    catch (error) {
      next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
      res.status(201).send(await Student.create(req.body));
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:Id', async (req, res, next) => {
    try {
      const student = await Student.findByPk(req.params.Id);
      await student.destroy();
      res.send(student);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;