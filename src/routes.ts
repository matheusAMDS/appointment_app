import { Router } from 'express'

import SessionController from 'controller/SessionController'
import UserController from 'controller/UserController'
import ServiceController from 'controller/ServiceController'
import AppointmentSettingsController from 'controller/AppointmentSettingsController'

const sessionController = new SessionController()
const userController = new UserController()
const serviceController = new ServiceController()
const aptSettingsController = new AppointmentSettingsController()

const router = Router()

router.post('/signin', sessionController.signin)

router.post('/users', userController.store)
router.get('/users', userController.index)

router.post('/services', serviceController.store)
router.get('/services', serviceController.index)

router.get('/services/appointment_settings', aptSettingsController.index)

export default router