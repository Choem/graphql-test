import { getDbConnection } from "../..";

export class BaseService {
  constructor() { }

  repository<E>(entity: string) {
    return getDbConnection().getRepository<E>(entity);
  }
}