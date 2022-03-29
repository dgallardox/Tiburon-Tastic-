import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../services/apollo-client";
import Nav from "../components/Nav";

export default function Home({ sharks }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tiburontastic!</title>
      </Head>
      <Nav home="nav-link" sharks="nav-link active" />
      <div className="cardsDiv">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {sharks.map((shark) => (
          <>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card=title">{shark.title}</h2>
                  <p className="card-text">{shark.description}</p>
                </div>
              </div>
            </div>
          </>
        ))}
        </div>
        </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query sharks {
        sharks {
          nodes {
            id
            title
            description
            image {
              sourceUrl
              link
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      sharks: data.sharks.nodes,
    },
  };
}
