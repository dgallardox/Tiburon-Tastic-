import { gql } from "@apollo/client";
import client from "../services/apollo-client";
import Title from "../components/Title";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function blog({ posts }) {
  console.log(posts);
  return (
    <>
      <Layout title="Blog" blog="nav-link active" home="nav-link" submit="nav-link" >
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {posts.map((post) => (
          // eslint-disable-next-line react/jsx-key
          <div className="col">
          <Card>
          <div id="postsDiv">
                <h4>{post.title}</h4>
                <p>hello 2e34d</p>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
              </div>
            </Card>
            </div>
        ))}
          </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query posts {
        posts {
          nodes {
            id
            title
            content
          }
        }
      }
    `,
  });
  return {
    props: {
      posts: data.posts.nodes,
    },
  };
}
