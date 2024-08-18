import IRepositories from "../../interfaces/repository";

export abstract class BaseService {
  constructor(protected readonly repository: IRepositories) { }
}