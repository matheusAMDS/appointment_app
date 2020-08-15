import jwt from 'jsonwebtoken'

import authConfig from 'config/auth'

type Role = "User" | "Service"

interface Payload {
  id: number;
  role: Role;
}

export function generateToken(payload: Payload) {
  const { ACCESS_SECRET, options } = authConfig

  return jwt.sign(payload, ACCESS_SECRET, options)
}