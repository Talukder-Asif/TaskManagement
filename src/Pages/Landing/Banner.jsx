import { useContext } from "react";
import Btn from "../../Component/Btn";
import bannerImg from "/src/assets/hero.png";
import { AuthContext } from "../../Authantication/AuthProvider/AuthProvider";
const Banner = () => {
  const{user} = useContext(AuthContext)
  return (
    <div className="bg-[#f9f9f9]">
      <div className="hero md:min-h-[500px] relative">
        <div className="hero-content flex-col-reverse md:flex-row-reverse">
          <div className="md:w-1/2">
            <img src={bannerImg} className=" w-10/12 m-auto" />
          </div>
          <div className="md:w-1/2">
            <h1 className=" text-5xl lg:text-7xl text-[#0e1133] font-bold">
              FREE ONLINE TASK MANAGER
            </h1>
            <p className="py-6 md:max-w-[80%] font1 font-medium">
            Organize and manage your team like a boss with Bitrix24, a free task management tool packing more capabilities than you can imagine.
            </p>
            <div className=" flex gap-5">
              <a href={user?"/users":"/signin"} >
                <Btn btnName={"Let’s Explore"}></Btn>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
