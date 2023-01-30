import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";

export function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default Router;
