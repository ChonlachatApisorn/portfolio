import Router from "./routes";
import AuthProvider from "./context/auth.context";

export function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
