import { Outlet } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { BeatLoader } from "react-spinners";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
const CURRENT_USER = gql`
  query {
    currentUser {
      userError {
        message
      }
      user { 
        id
        name
        email
        password
        createdAt
        updatedAt
        userPosts {
          userError {
            message
          }
          posts {
            id
            title
            content
            published
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;
export default function App() {
  const { data, loading, error } = useQuery(CURRENT_USER);
  let content = "";
  if (error) {
    content = `${(<ErrorComponent title={error} />)}`;
  }
  if (loading) {
    content = <BeatLoader color="#5dceff" className="text-center pb-5" />;
  }
  if (data) {
    // content = (
    //   <User
    //     // name={data.currentUser.user.name}
    //     // email={data.currentUser.email}
    //     // createdAt={data.currentUser.createdAt}
    //     // updatedAt={data.currentUser.updatedAt}
    //   />
    // );
  }
  return (
    <div>
      {/* {content} */}
      <Outlet />
    </div>
  );
}
