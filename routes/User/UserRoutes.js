const Router = require("koa-router")

const UserController = require('../controllers/UserController')

const router = new Router();

router
.post("/signup", UserController.signup)
.post("/login", UserController.login)

module.exports = router.routes()