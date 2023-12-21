import { NavLink, Outlet } from "react-router-dom";
const DashboardLayout = () => {
    return (
        <div>
    
          <div className="max-w-7xl m-auto relative lg:flex flex-nowrap flex-col md:flex-row my-3 lg:my-10 min-h-screen">
            <div className="lg:w-[20%]">
              <ul className="menu-horizontal gap-1 flex-wrap justify-center lg:menu">
                
                <li className="mb-4 ">
                  <NavLink
                    className="bg-[#1b1d4d] text-sm rounded-2xl px-3  py-1 text-white border-2 lg:text-base border-[#1b1d4d]hover:text-white lg:hover:text-[#1b1d4d]"
                    to={"/users/Task"}
                  >
                     My Task
                  </NavLink>
                </li>
                <li className="mb-4 ">
                  <NavLink
                    className="bg-[#1b1d4d] text-sm rounded-2xl px-3  py-1 text-white border-2 lg:text-base border-[#1b1d4d]hover:text-white lg:hover:text-[#1b1d4d]"
                    to={"/users/addTask"}
                  >
                    Add Task
                  </NavLink>
                </li>
                <li className="mb-4 ">
                  <NavLink
                    className="bg-[#1b1d4d] text-sm rounded-2xl px-3  py-1 text-white border-2 lg:text-base border-[#1b1d4d]hover:text-white lg:hover:text-[#1b1d4d]"
                    to={'/users/previous'}
                  >
                    Previous tasks
                  </NavLink>
                </li>
              </ul>
            </div>
    
            <div className="lg:w-[80%] px-3 lg:border-4 lg:border-black">
              <div className="lg:py-3">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      );
};

export default DashboardLayout;