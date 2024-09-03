import express from 'express'

import { ExpressAdapter } from '../adapters'
import { LoginController } from '../controllers'
import repositories from '../repositories'

const router = express.Router()

const loginController = new LoginController(repositories)

router.post('/', ExpressAdapter.performJson(loginController.login))
router.post('/signup', ExpressAdapter.performJson(loginController.signup))

export default router
