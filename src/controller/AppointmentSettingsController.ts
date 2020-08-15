import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { AppointmentSettings } from 'entity/AppointmentSettings'

class AppointmentSettingsController {
  public async index(req: Request, res: Response) {
    const aptSettingsRepository = getRepository(AppointmentSettings)
    const settings = await aptSettingsRepository.find()

    return res.json(settings)
  }

}

export default AppointmentSettingsController