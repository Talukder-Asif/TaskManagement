import logo from "/src/assets/logo.png"
const NavBar = () => {
    const manuItem = (
        <>
          <li><a className="hover:bg-transparent hover:underline decoration-[#801f82]" href={"#about"}>Dashboard</a></li>
          <li><a className="hover:bg-transparent hover:underline decoration-[#801f82]" href={"#Project"}>About us</a></li>
        </>
      );
      return (
        <div className='sticky top-0 bg-base-100 z-50 '>
          <div className="navbar max-w-7xl m-auto px-5 ">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center "
                >
                  {manuItem}
                </ul>
              </div>
              <a className='logo max-w-56' href="/" >
               <img src={logo} alt="" />
              </a>
            </div>
            
            <div className="navbar-end">
            <div className="hidden md:flex"><ul className="menu menu-horizontal px-1 font1 font-semibold ">{manuItem}</ul></div>
            </div>
          </div>
        </div>
      );
};

export default NavBar;