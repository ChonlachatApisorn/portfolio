export function Register() {
  return (
    <div className="h-screen flex">
      <div className="flex w-full justify-around items-center bg-[url(https://static.vecteezy.com/system/resources/previews/004/733/033/non_2x/hands-of-a-man-working-on-a-modern-laptop-banking-and-money-themes-on-a-blue-background-in-an-office-free-photo.jpg)] bg-cover bg-no-repeat bg-fixed bg-center">
        <div className="w-full mx-auto px-20 flex-col space-y-6 bg-black opacity-20 h-screen" />
        <div className="flex w-1/2 justify-center items-cente space-y-8 absolute">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                You can join us!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-8 ml-1">
                Enter your information
              </p>
              <label htmlFor="email" className="text-xs font-semibold ml-2">
                Email
              </label>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                />
              </div>
              <label htmlFor="username" className="text-xs font-semibold ml-2">
                Username
              </label>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
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
                  id="username"
                  className=" pl-2 w-full outline-none border-none"
                  type="text"
                  name="username"
                  placeholder="example"
                />
              </div>
              <label htmlFor="password" className="text-xs font-semibold ml-2">
                Password
              </label>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
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
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="************"
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-sky-600 mt-5 py-2 rounded-2xl hover:bg-sky-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                confirm
              </button>
              <div className="flex justify-center mt-4">
                <a
                  href="login"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  back to login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
