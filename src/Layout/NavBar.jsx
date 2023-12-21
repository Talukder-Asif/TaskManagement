import { useContext } from "react";
import logo from "/src/assets/logo.png"
import { AuthContext } from "../Authantication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const {user, logOut}= useContext(AuthContext)
  const navigate = useNavigate()

  const handelLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#801f82",
      cancelButtonColor: "#1b1d4d",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
        .then(() => {
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          // An error happened.
        });
        navigate("/");
        // window.location.reload();
      }
    });
      
  };
    const manuItem = (
        <>
          <li><a className="hover:bg-transparent hover:underline decoration-[#801f82]" href={"/users"}>Dashboard</a></li>
          <li><a className="hover:bg-transparent hover:underline decoration-[#801f82]" href={"#Project"}>About us</a></li>
          {
            user?<li><button onClick={handelLogOut} className="hover:bg-transparent hover:underline decoration-[#801f82]" href={"#Project"}>Log Out</button></li>:null
          }
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