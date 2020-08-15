import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'

import { Service } from 'entity/Service'
import { AppointmentSettings } from 'entity/AppointmentSettings'

class ServiceController {
  public async index(req: Request, res: Response) {
    const serviceRepository = getRepository(Service)
    const services = await serviceRepository.find({ 
      relations: [ "appointment_settings" ]
    })

    return res.json(services)
  }

  public async store(req: Request, res: Response) {
    const { name, email, password, address, category } = req.body
    const serviceRepository = getRepository(Service)
    const aptSettingsRepository = getRepository(AppointmentSettings)
    let service = await serviceRepository.findOne({ email })

    if (service)
      return res.status(403).json({ error: 'Email already being used.' })

    service = serviceRepository.create({
      name,
      email,
      address,
      category,
      password: bcrypt.hashSync(password)
    })
    const appointmentSettings = aptSettingsRepository.create({})

    service.appointment_settings = appointmentSettings
    await serviceRepository.save(service)

    return res.status(201).send()
  }
}

export default ServiceController