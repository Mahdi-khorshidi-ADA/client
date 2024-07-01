import { Outlet } from "react-router-dom";
// import UserList from "../src/pages/UserList/UserList";
export default function App() {
  return (
    <div>
      {/* <UserList /> */}
      <Outlet />
    </div>
  );
}
