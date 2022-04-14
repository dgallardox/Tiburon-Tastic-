import Image from "next/image";
import { gql, useMutation, useQuery } from "@apollo/client";
import client from "../services/apollo-client";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";


const DELETE_MUTATION = gql`
      mutation DeleteShark {
        deleteShark(input: {id: "cG9zdDoxMA=="}) {
          shark {
          name
    }
  }
}
`;

export default function Home({ sharks }) {
  const { loggedIn } = useAuth();
  
  const [deleteShark, { data, loading }] = useMutation(DELETE_MUTATION, {
  onError: (err) => {
      console.log(err);
  }
  })
  

  return (
      <Layout title="Home" home="nav-link active" blog="nav-link" submit="nav-link" >
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {sharks.map((shark, index) => (
            <>
              <div className="col">
                <Card>

                  <div className="card-img-top">
                    <Image
                      src={shark.image.sourceUrl}
                      alt="shark-image"
                      layout="responsive"
                      height="80px"
                      width="100%"
                    />
                  </div>
                  <div id="rankCircle">#{index+1}</div>
                  <div className="card-body">
                    <h2 className="card-title">{shark.title}</h2>
                    <p>{ shark.votes } votes</p>
                    <p className="card-text">{shark.description}</p>
                  </div>
                  {!loggedIn ? (
                     <></>
                  ) : (
                    <button className="btn btn-outline-primary" type="submit" onClick={deleteShark}>Delete</button> 
                    )}
                  </Card>
              </div>
            </>
          ))}
        </div>
      </Layout>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query sharks {
        sharks {
          nodes {
            id
            title
            votes
            description
            image {
              sourceUrl
              link
            }
          }
        }
      }
    `,
  })
  return {
    props: {
      sharks: data.sharks.nodes,
    },
  };
}