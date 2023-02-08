type PropType = {
  children: JSX.Element;
};

export function Navbar({ children }: PropType) {
  return (
    <>
      <nav className="flex items-center h-16 bg-zinc-900">
        <div className="flex m-5 w-full justify-between">
          <div className="flex items-center">
            <a href="homepage" className="font-bold text-white text-2xl">
              LOGO
            </a>
          </div>
          <div className="flex font-medium text-sm">
            <div className="flex items-center justify-center text-white">
              <a className="" href="*">
                Home
              </a>
              <a className="mx-8" href="*">
                Profile list
              </a>
            </div>
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
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}
