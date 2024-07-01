import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import { client } from "./apollo/index.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import Error from "./components/Error/Error.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import UserList from "./pages/UserList/UserList.jsx";
import User from "./pages/User/User.jsx";
import AddUser from "./pages/AddUser/AddUser.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Post from "./pages/Post/Post.jsx";

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </ApolloProvider>
);
