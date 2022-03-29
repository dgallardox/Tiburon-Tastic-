import {
  ApolloClient,
  InMemoryCache,
  gql
} from '@apollo/client'

const client = new ApolloClient({
  uri: "https://tiburontastic.wpengine.com/graphql",
  cache: new InMemoryCache()
})

export default client;

// client.query({
//   query: gql`
//   query sharks {
//     sharks {
//       nodes {
//         id
//         title
//         description
//         image {
//           sourceUrl
//           link
//         }
//       }
//     }
//   }
//   `
// })
// .then(res => console.log(res))