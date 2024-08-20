import BaseController from './BaseController'
import { JoiValidationError } from '../utils/errors'
import { LoginPayloadValidator } from '../utils/validations'
import { LoginService } from '../domain/services'
import { EStatusCodes } from '../domain/statusCodes'
import { ILoginPayload, ILoginResponse, IPerformJsonCallback, ISignupPayload } from '../interfaces'

export default class LoginController extends BaseController {
  private loginService = new LoginService(this.repository)

  login = async (payload: ILoginPayload): Promise<IPerformJsonCallback<ILoginResponse>> => {
    const { value, error } = LoginPayloadValidator.validateLoginPayload(payload)

    if (error) throw new JoiValidationError(error)

    return {
      response: await this.loginService.login(value),
      status: EStatusCodes.OK
    }
  }

  signup = async (payload: ISignupPayload): Promise<IPerformJsonCallback<any>> => {
    const { value, error } = LoginPayloadValidator.validateSignupPayload(payload)

    if (error) throw new JoiValidationError(error)

    return {
      response: await this.loginService.signup(value),
      status: EStatusCodes.OK
    }
  }
}
