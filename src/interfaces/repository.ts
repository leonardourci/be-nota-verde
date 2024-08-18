import {
  IUser
} from '.'

export interface IUserRepository {
  getUserByEmail(email: string): Promise<IUser>
}

export default class IRepositories {
  user: IUserRepository
}