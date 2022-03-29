import Nav from "../components/Nav";
import { gql } from "@apollo/client";
import client from "../services/apollo-client";
import Title from "../components/Title";

export default function blog({ posts }) {
  console.log(posts);
  return (
    <>
      <Nav home="nav-link" sharks="nav-link" blog="nav-link active" />
      <div id="doc">
      <Title title="Tiburontastic! | Blog" page="Blog"/>
        {posts.map((post) => (
          <>
              <h4>{post.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
          </>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
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
