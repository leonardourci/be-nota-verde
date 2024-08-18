import IRepositories from "../interfaces/repository";

export abstract class BaseController {
  constructor(protected readonly repository: IRepositories) { }
}
