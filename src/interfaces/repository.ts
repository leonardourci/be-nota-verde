import { ISignupPayload, ISignupResponse, IUserInfoByEmailResponse } from '.'

export interface IUserRepository {
  getUserByEmail(email: string): Promise<IUserInfoByEmailResponse>
  create(payload: ISignupPayload): Promise<ISignupResponse>
}

export default interface IRepositories {
  user: IUserRepository
}
