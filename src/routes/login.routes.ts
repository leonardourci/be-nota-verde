import express from 'express'

import { LoginController } from '../controllers'

const router = express.Router()

const loginController = new LoginController()

router.get('/login', loginController.login)

export default router
