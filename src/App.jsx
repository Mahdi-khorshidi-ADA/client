import { Outlet } from "react-router-dom";
import User from "./pages/User/User";
export default function App() {
  return (
    <div>
      <User />
      <Outlet />
    </div>
  );
}
