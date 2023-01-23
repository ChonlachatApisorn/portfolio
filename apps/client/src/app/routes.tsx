import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";

export function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default Router;
