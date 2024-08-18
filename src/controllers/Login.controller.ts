import { BaseController } from '.'
import { InputValidationErrors } from '../utils/Error'
import { LoginService } from '../domain/services'
import { LoginPayloadValidator } from '../utils/validations'
import {
  ILoginPayload,
  ILoginResponse
} from '../interfaces'

export class LoginController extends BaseController {
  private loginService = new LoginService(this.repository)

  login = async (payload: ILoginPayload): Promise<ILoginResponse> => {
    const { value, error } = LoginPayloadValidator.validate(payload)

    if (error) {
      throw new InputValidationErrors(error)
    }

    return this.loginService.login(value)
  }
}
