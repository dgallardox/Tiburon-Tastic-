import Layout from "../components/Layout"
import { useQuery } from "@apollo/client"
import { gql } from "@apollo/client";

const USER = gql`
query user {
  viewer {
    firstName
  }
}
`

export default function Members() {
  const { data } = useQuery(USER);

  console.log(data.viewer.firstName)

  return (
    <Layout>
      <h2>Hello! </h2>

    </Layout>
  )
}