import { FC } from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import { GlobalStyle } from "./styles"
import { Navigation } from "./navigations"

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})

export const App: FC = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Navigation />
  </ApolloProvider>
)
