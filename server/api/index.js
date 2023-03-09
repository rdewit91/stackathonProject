const router = require('express').Router()

router.use('/campuses', require('./campuses'))
router.use('/students', require('./students'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router