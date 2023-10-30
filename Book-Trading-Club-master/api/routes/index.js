const router = require('express').Router()

const authRoutes = require('./auth')
const userRoutes = require('./users')
const bookRoutes = require('./books')
const tradeRoutes = require('./trade')

/* Register model routes */
router.use(authRoutes)
router.use(userRoutes)
router.use(bookRoutes)
router.use(tradeRoutes)

/* 404 */
router.get('*', (req, res) => {
  console.dir('404! Not Found!')
  res.status(404).end()
})

/* Error handler */
router.use(function (err, req, res) {
  console.dir(err)
  res.status(500).send(err)
})

module.exports = router
