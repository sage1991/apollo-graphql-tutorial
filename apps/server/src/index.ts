import { ApolloServer } from "apollo-server"

import { typeDefs } from "./schema"
import { mocks } from "./__mock__"

const main = async () => {
  const server = new ApolloServer({ typeDefs, mocks })
  const { port, url } = await server.listen()
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at ${url}
  `)
}

void main()
