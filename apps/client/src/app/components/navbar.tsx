import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

type PropType = {
  children: JSX.Element;
};
export function Navbar({ children }: PropType) {
  const [dropDown, setDropDown] = useState(false);

  const dropDownList = [
    {
      name: "My Profile",
      path: "",
      icon: "",
    },
    {
      name: "Edit Profile",
      path: "",
      icon: "",
    },
    {
      name: "Add skill",
      path: "",
      icon: "",
    },
    {
      name: "Add Project",
      path: "",
      icon: "",
    },
    {
      name: "Log Out",
      path: "",
      icon: "",
    },
  ];
  const { user } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("Token");
    window.location.reload();
  }

  return (
    <>
      <nav className="flex items-center h-16 bg-zinc-900">
        <div className="flex m-5 w-full justify-between">
          <div className="flex items-center">
            <Link to="homepage" className="font-bold text-white text-2xl">
              LOGO
            </Link>
          </div>
          {!user ? (
            <div className="flex font-medium text-sm">
              <a
                className="mr-3 flex justify-center items-center"
                href="/register"
              >
                <button className="bg-white rounded-xl text-amber-600 hover:bg-amber-600 hover:text-white hover:translate-y-[2px] transition-all w-16 h-8">
                  Sign Up
                </button>
              </a>
              <a
                className="flex justify-center items-center text-white rounded-xl hover:text-amber-400 hover:translate-y-[2px] transition-all"
                href="/login"
              >
                <div className="rounded-xl bg-white opacity-10 w-16 h-8" />
                <button className="absolute">Log in</button>
              </a>
            </div>
          ) : (
            <div
              className="rounded-full w-10 h-10 bg-white"
              onMouseEnter={() => setDropDown(true)}
              onClick={logout}
            />
          )}
        </div>
        {dropDown && (
          <div className="flex justify-end w-screen ">
            <ul
              className="absolute w-48 shadow-xl rounded-lg bg-neutral-50"
              onMouseLeave={() => setDropDown(false)}
            >
              {dropDownList.map((item, index) => (
                <li
                  key={index}
                  className="mx-1 my-1 hover:bg-400 hover:px-1 hover:rounded-lg cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <div>{children}</div>
    </>
  );
}
