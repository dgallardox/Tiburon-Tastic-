import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'

const endPoint = "https://tiburontastic.wpengine.com"

const link = createHttpLink({
  uri: `${endPoint}/graphql`,
  credentials: 'include',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

export default client;