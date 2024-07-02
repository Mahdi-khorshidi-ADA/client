import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import { client } from "./apollo/index.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes.jsx";
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </ApolloProvider>
);
