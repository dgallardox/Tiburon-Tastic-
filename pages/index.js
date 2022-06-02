import Image from "next/image";
import { gql, useMutation, useQuery } from "@apollo/client";
import client from "../services/apollo-client";
import Layout from "../components/Layout";
import useAuth from "../hooks/useAuth";
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link'

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
    <>
    <Layout title="All Animals">
      <Grid container spacing={3}>
          {sharks.map((shark) => (
            // eslint-disable-next-line react/jsx-key
            <Grid item sm={12} md={6} xl={4}>
              <div id="onHover">
              <Card sx={{ minWidth: 275 }}>
              <CardMedia
                component="img"
                image={shark.image.sourceUrl}
                  />
              <CardContent>
                    <h2 className="card-title">{shark.title}</h2>
                    <p className="card-text">{shark.description}</p>
                  {loggedIn && (
                    <button className="btn btn-outline-primary" type="submit" onClick={deleteShark}>Delete</button> 
                )}
              </CardContent>
                  <CardActions>
                    <Link href={`/sharks/${shark.databaseId}`}><a>Read More</a></Link>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
              </CardActions>
                </Card>
                </div>
              </Grid>
          ))}
        </Grid>
      </Layout>
      </>
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
            databaseId
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