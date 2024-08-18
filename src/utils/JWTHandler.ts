import jwt from 'jsonwebtoken'

import { IGenerateTokenPayload } from '../interfaces'
import { CustomError } from './Error'
import { EStatusCodes } from './../domain/statusCodes'

const { JWT_SECRET } = process.env

export class JWTHandler {
  static generateToken = (payload: IGenerateTokenPayload) => jwt.sign(payload, JWT_SECRET ?? '', { expiresIn: '1d' })

  static verifyToken = (token: string) => {
    try {
      jwt.verify(token, JWT_SECRET ?? '')
    } catch (tokenErr) {
      throw new CustomError('Token error', EStatusCodes.UNAUTHORIZED)
    }
  }
}
