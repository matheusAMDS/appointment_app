import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'

import { generateToken } from 'lib/jwt'

import { User } from 'entity/User'
import { Service } from 'entity/Service'

class SessionController {
  public async signin(req: Request, res: Response) {
    const { role, email, password } = req.body
    const userRepository = getRepository(User)
    const serviceRepository = getRepository(Service)
    let account: User | Service

    if (role === "User")
      account = await userRepository.findOne({ email })
      
    else if (role === "Service")
      account = await serviceRepository.findOne({ email })

    if (!account)
      return res.status(403).json({ error: "Email not registered." })

    if (!await bcrypt.compare(password, account.password))
      return res.status(403).json({ error: "Wrong password." })

    const token = generateToken({ 
      role,
      id: account.id
    })

    return res.json({ token })
  }
}

export default SessionController