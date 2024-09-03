import Joi, { ValidationResult } from 'joi'

import { ILoginPayload, ISignupPayload } from '../../interfaces'

export default class LoginPayloadValidator {
  static validateLoginPayload = (payload: ILoginPayload): ValidationResult<ILoginPayload> =>
    Joi.object({
      email: Joi.string().required().messages({
        'string.base': 'EMAIL_MUST_BE_A_STRING',
        'any.required': 'EMAIL_IS_REQUIRED'
      }),
      password: Joi.string().required().messages({
        'string.base': 'PASSWORD_MUST_BE_A_STRING',
        'any.required': 'PASSWORD_IS_REQUIRED'
      })
    }).validate(payload, { abortEarly: false })

  static validateSignupPayload = (payload: ISignupPayload): ValidationResult<ISignupPayload> =>
    Joi.object({
      fullName: Joi.string().required().messages({
        'string.base': 'FULL_NAME_MUST_BE_A_STRING',
        'any.required': 'FULL_NAME_IS_REQUIRED'
      }),
      email: Joi.string().email().required().messages({
        'string.base': 'EMAIL_MUST_BE_A_STRING',
        'string.email': 'EMAIL_MUST_BE_A_VALID_EMAIL',
        'any.required': 'EMAIL_IS_REQUIRED'
      }),
      password: Joi.string().required().messages({
        'string.base': 'PASSWORD_MUST_BE_A_STRING',
        'any.required': 'PASSWORD_IS_REQUIRED'
      }),
      age: Joi.number().integer().positive().required().messages({
        'number.base': 'AGE_MUST_BE_A_NUMBER',
        'number.integer': 'AGE_MUST_BE_AN_INTEGER',
        'number.positive': 'AGE_MUST_BE_A_POSITIVE_NUMBER',
        'any.required': 'AGE_IS_REQUIRED'
      }),
      profilePicUrl: Joi.string().uri().optional().messages({
        'string.base': 'PROFILE_PIC_URL_MUST_BE_A_STRING',
        'string.uri': 'PROFILE_PIC_URL_MUST_BE_A_VALID_URI'
      })
    }).validate(payload, { abortEarly: false })
}
