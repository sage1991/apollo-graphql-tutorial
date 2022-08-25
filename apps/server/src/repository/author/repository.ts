import { RESTDataSource } from "apollo-datasource-rest"

import { AuthorModel } from "./model"

export class AuthorRepository extends RESTDataSource {
  public readonly baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com"

  findAuthorById = (id: string) => this.get<AuthorModel>(`/author/${id}`)
}
