import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { instant } from "../../provider/axios.instant";
import { AuthUrl } from "../../provider/api.constant";
import { AuthContext } from "../../context/auth.context";

export function Login() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    const input = {
      username: userInput.username,
      password: userInput.password,
    };
    instant
      .post(AuthUrl.login, input)
      .then((res) => {
        localStorage.setItem("Token", JSON.stringify(res.data.access_token));
      })
      .then(() => setUser(true))
      .then(() => navigate("homepage"));
  }

  return (
    <div className="h-screen flex -mt-12">
      <div className="lg:flex w-full lg:w-1/2 justify-around items-center bg-[url(https://homeguru.homepro.co.th/wp-content/uploads/2020/03/covid-19-1200x630px.jpg)] bg-cover bg-no-repeat bg-fixed bg-center">
        <div className="w-full mx-auto px-20 flex-col space-y-6 bg-black opacity-20 h-screen" />
        <div className="items-center absolute pr-56">
          <h1 className="text-white font-bold text-4xl font-sans">
            Web Portfolio
          </h1>
          <p className="text-white mt-1 pl-2">view detail every portfoilo</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <a
              href="homepage"
              className="hover:bg-amber-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-amber-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
            >
              Let's Go!
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form
            className="bg-white rounded-md shadow-2xl p-5"
            onSubmit={onSubmit}
          >
            <h1 className="text-amber-700 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-amber-600 mb-8">
              Welcome Back
            </p>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className="heroicon-ui"
                  d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                />
              </svg>
              <input
                onChange={handleOnChange}
                id="username"
                className=" pl-2 w-full outline-none border-none"
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={handleOnChange}
                id="password"
                className="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-amber-600 mt-5 py-2 rounded-2xl hover:bg-amber-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Login
            </button>
            <div className="flex justify-center mt-4">
              <a
                href="register"
                className="text-sm ml-2 hover:text-amber-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              >
                Don't have an account yet?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
