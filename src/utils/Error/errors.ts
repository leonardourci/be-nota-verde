import { ValidationError } from 'joi'

import { EStatusCodes } from './../../domain/statusCodes'

export class CustomError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

class JoiValidationError extends Error {
  public messages: Array<string>

  constructor(name: string, error: ValidationError) {
    super('')
    this.name = name
    this.messages = error.details.map((detail) => detail.message)
  }
}

export class InputValidationErrors extends JoiValidationError {
  public code: number

  constructor(error: ValidationError) {
    super('InputValidationErrors', error)
    this.code = EStatusCodes.UNPROCESSABLE
  }
}
