type PropType = {
  children: JSX.Element;
};

export function Navbar({ children }: PropType) {
  return (
    <>
      <nav className="flex items-center h-16 bg-blue-500">
        <div className="flex m-5 w-full justify-between">
          <div className="flex items-center">
            <a href="*">
              <span className="font-bold text-white text-2xl">LOGO</span>
            </a>
          </div>
          <div className="flex font-medium">
            <div className="flex items-center justify-center text-white">
              <a className="" href="*">
                Home
              </a>
              <a className="mx-8" href="*">
                Profile list
              </a>
            </div>
            <a className="mr-3" href="/register">
              <button className="bg-white rounded-xl text-sky-500  w-20 h-10">
                Sign Up
              </button>
            </a>
            <a className="flex justify-center items-center" href="/login">
              <div className="rounded-xl bg-white opacity-10 w-20 h-10" />
              <button className="text-white absolute">Log in</button>
            </a>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}
