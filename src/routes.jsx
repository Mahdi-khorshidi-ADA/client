import App from "./App";
import Error from "./components/Error/Error";
import AddUser from "./pages/AddUser/AddUser";
import Post from "./pages/Post/Post";
import Posts from "./pages/Posts/Posts";
import Root from "./pages/Root/Root";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import UserList from "./pages/UserList/UserList";

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "posts",
            element: <Posts />,
            children: [{ path: ":postId", element: <Post /> }],
          },
          {
            path: "users",
            element: <UserList />,
            children: [{ path: ":userId", element: <User /> }],
          },
          { path: "addUser", element: <AddUser /> },
          { path: "signIn", element: <SignIn /> },
        ],
      },
    ],
  },
];
