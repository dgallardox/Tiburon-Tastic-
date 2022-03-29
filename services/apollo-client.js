import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'

const link = createHttpLink({
  uri: "https://tiburontastic.wpengine.com/graphql",
  credentials: 'include',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

export default client;