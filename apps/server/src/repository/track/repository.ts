import { RESTDataSource } from "apollo-datasource-rest"

import { TrackModel } from "./model"

export class TrackRepository extends RESTDataSource {
  public readonly baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com"

  findTracks = () => this.get<TrackModel[]>("/tracks")
  findTrackById = (id: string) => this.get<TrackModel>(`/track/${id}`)
  updateNumberOfViews = (id: string) => this.patch<TrackModel>(`/track/${id}/numberOfViews`)
}
