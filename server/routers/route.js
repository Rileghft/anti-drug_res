const Router = require('koa-router')
const home = require('./home.js')
const api = require('./api.js')

const router = new Router()
router.use('/', home.routes(), home.allowedMethods())
      .use('/data', api.routes(), api.allowedMethods())

module.exports = router