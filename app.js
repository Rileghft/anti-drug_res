const Koa = require('koa')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const views = require('koa-views')
const route = require('./server/routers/route')
const path = require('path')

const app = new Koa()

app.use(logger())
app.use(bodyparser())
app.use(views(path.join(__dirname, 'server/views'), {
    extension: 'ejs'
}))
app.use(route.routes()).use(route.allowedMethods())
app.listen(3000)
console.log('anti-drug resource server start on 3000')