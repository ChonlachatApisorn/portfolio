import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";

export function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default Router;
