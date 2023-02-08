import Router from "./routes";
import AuthProvider from "./context/auth.context";
import { Navbar } from "./components/navbar";

export function App() {
  return (
    <AuthProvider>
      <Navbar>
        <Router />
      </Navbar>
    </AuthProvider>
  );
}

export default App;
