import { createContext, useState, useEffect } from "react";
import { IAuthContext } from "../provider/interface";
import { instant } from "../provider/axios.instant";
import { AuthUrl } from "../provider/api.constant";

type PropType = {
  children: JSX.Element;
};

export const AuthContext = createContext({} as IAuthContext);
function AuthProvider({ children }: PropType) {
  const [user, setUser] = useState(true);
  const value = { user, setUser };
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      instant.get(AuthUrl.getUser, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
    } else {
      setUser(false);
    }
  }, [user]);
  console.log(value);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
