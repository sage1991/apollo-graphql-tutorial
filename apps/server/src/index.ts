import { ApolloServer } from "apollo-server"

import { typeDefs } from "./schema"
import { resolvers } from "./resolvers"
import { repository } from "./repository"

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => repository
  })
  const { port, url } = await server.listen()
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at ${url}
  `)
}

void main()
