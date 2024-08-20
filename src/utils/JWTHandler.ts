import jwt from 'jsonwebtoken'

import { CustomError } from './errors'
import { EStatusCodes } from './../domain/statusCodes'
import { IGenerateTokenPayload, IPerformJsonCallback } from '../interfaces'

const { JWT_SECRET } = process.env

export class JWTHandler {
  static generateToken = (payload: IGenerateTokenPayload) => jwt.sign(payload, JWT_SECRET ?? '', { expiresIn: '1d' })

  static verifyToken = (payload: { authorization: string }): IPerformJsonCallback<any> => {
    if (!payload?.authorization) throw new CustomError('TOKEN_NOT_FOUND', EStatusCodes.UNAUTHORIZED)

    try {
      const token = payload.authorization.split('Bearer ')[1]

      jwt.verify(token, JWT_SECRET ?? '')

      return {
        response: {},
        status: EStatusCodes.OK
      }
    } catch (tokenErr) {
      throw new CustomError('TOKEN_ERROR', EStatusCodes.UNAUTHORIZED)
    }
  }
}
