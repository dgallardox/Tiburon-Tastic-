import { gql } from "@apollo/client";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import client from "../../services/apollo-client";
import Link from 'next/link'

const GET_SHARK = gql`
query getShark($databaseId: ID!)  {
  shark(id: $databaseId, idType: DATABASE_ID) {
    name
    description
  }
}
`

export default function Shark({ shark }) {
  console.log(shark)
  return (
    <>
      <Link href={"/"}><a>Go Back</a></Link>
      <h2>{shark.name}</h2>
      <p>{shark.description}</p>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await client.query({
    query: GET_SHARK,
    variables: {
      databaseId: context.params.id,
    },
  })
  return {
    props: {
      shark: res.data.shark
    },
  };
}