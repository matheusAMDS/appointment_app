import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'

import { User } from 'entity/User'

class UserController {
  public async index(req: Request, res: Response) {
    const userRepository = getRepository(User)
    const users = await userRepository.find()

    return res.json(users)
  }
  
  public async store(req: Request, res: Response) {
    const { name, email, password } = req.body
    const userRepository = getRepository(User)
    let user = await userRepository.findOne({ email })

    if (user)
      return res.status(403).json({ error: 'Email already being used.' })

    await userRepository.insert({
      name,
      email,
      password: bcrypt.hashSync(password)
    })

    return res.status(201).send()
  }
}

export default UserController