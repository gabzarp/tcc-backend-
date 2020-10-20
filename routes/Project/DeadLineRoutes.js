const Router = require("koa-router")

const router = new Router();

const CrudFactory = require('../../factories/CrudFactory')

router
.post('/dead-line',(ctx)=> CrudFactory.create('DeadLine', ctx))
.get('/dead-lines', (ctx)=> CrudFactory.getAll('DeadLine', ctx)) 
.get('/dead-line/:id', (ctx)=> CrudFactory.getById('DeadLine', ctx)) 
.patch('/dead-line', (ctx)=> CrudFactory.update('DeadLine', ctx))
.delete('/dead-line/:id', (ctx)=> CrudFactory.delete('DeadLine', ctx))

module.exports = router.routes();
