import { TrackRepository } from "./track"
import { AuthorRepository } from "./author"
import { ModuleRepository } from "./module"

export const repository = {
  track: new TrackRepository(),
  author: new AuthorRepository(),
  module: new ModuleRepository()
}

export type Repository = typeof repository
