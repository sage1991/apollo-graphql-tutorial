import { RESTDataSource } from "apollo-datasource-rest"

import { ModuleModel } from "./model"

export class ModuleRepository extends RESTDataSource {
  public readonly baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com"

  findModuleById = (id: string) => this.get<ModuleModel>(`/module/${id}`)
  findModulesByTrackId = (id: string) => this.get<ModuleModel[]>(`/track/${id}/modules`)
}
