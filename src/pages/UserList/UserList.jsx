import { gql, useQuery } from "@apollo/client";
import Error from "../../components/Error/Error";
import { BeatLoader } from "react-spinners";
import User from "../User/User";
const GET_USERS = gql`
  query {
    users {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export default function UserList() {
  const { data, error, loading } = useQuery(GET_USERS);
  let content = "";
  if (error) {
    content = `${(<Error />)}`;
  }
  if (loading) {
    content = <BeatLoader color="#5dceff" />;
  }
  if (data) {
    content = data.users.map((user) => {
      return (
        <User
          key={user.id}
          name={user.name}
          email={user.email}
          createdAt={user.createdAt}
          updatedAt={user.updatedAt}
        />
      );
    });
  }
  return <div>{content}</div>;
}
