import { gql, useQuery } from "@apollo/client";
import Error from "../../components/Error/Error";
import { BeatLoader } from "react-spinners";
import Post from "../Post/Post";
const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export default function Posts() {
  const { data, error, loading } = useQuery(GET_POSTS);
  let content = "";
  //   const { posts } = data;
  if (error) {
    content = `${(<Error />)}`;
  }
  if (loading) {
    content = <BeatLoader color="#5dceff" />;
  }
  if (data) {
    content = data.posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
        />
      );
    });
  }
  return <div>{content}</div>;
}
