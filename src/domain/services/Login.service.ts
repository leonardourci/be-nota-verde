import { JWTHandler } from './../../utils/JWTHandler';
import { BaseService } from '.'
import {
  ILoginPayload,
  ILoginResponse
} from '../../interfaces'

export class LoginService extends BaseService {
  login = async (payload: ILoginPayload): Promise<ILoginResponse> => {
    const userInfo = await this.repository.getUserInfo(payload)

    // validar senha com bcrypt HASH_SALT 10


    // se tudo der certo, gerar o token
    const token = JWTHandler.generateToken({ userId: userInfo.id })

    return { token }
  }
}