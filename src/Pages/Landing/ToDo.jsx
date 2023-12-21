import Title from "../../Component/Title";
import { MdOutlineRestartAlt } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { SlEarphones } from "react-icons/sl";

const ToDo = () => {
  return (
    <div className="py-10">
      <Title title={"What you can do"} subtitle={'Coincidentally, that’s exactly what you get from appie - a free online task management app that’s easy to use and features dozens of collaboration tools.'}></Title>








    <div className="p-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">



    <div className="card bg-base-100 hover:shadow-xl hover:shadow-[#4285fa52] transition-all">
  <div className="p-3 mt-3 m-auto bg-[#4284fa] shadow-lg rounded-full">
  <MdOutlineRestartAlt className="text-4xl text-white" />
  </div>
  
  <div className="card-body">
    <h2 className="card-title m-auto">Easy to use</h2>
    <p className="text-center">Mucker plastered bugger all mate morish are.</p>
    
  </div>
</div>


    <div className="card bg-base-100 hover:shadow-xl hover:shadow-[#f85d4951] transition-all">
  <div className="p-3 mt-3 m-auto bg-[#f85e49] shadow-lg rounded-full">
  <CiFaceSmile className="text-4xl text-white" />
  </div>
  
  <div className="card-body">
    <h2 className="card-title m-auto">Free to use</h2>
    <p className="text-center">Mucker plastered bugger all mate morish are.</p>
    
  </div>
</div>


    <div className="card bg-base-100 hover:shadow-xl hover:shadow-[#45ca7856] transition-all">
  <div className="p-3 mt-3 m-auto bg-[#45ca79] shadow-lg rounded-full">
  <CiLock  className="text-4xl text-white" />
  </div>
  
  <div className="card-body">
    <h2 className="card-title m-auto">Secured protocol</h2>
    <p className="text-center">Mucker plastered bugger all mate morish are.</p>
    
  </div>
</div>


    <div className="card bg-base-100 hover:shadow-xl hover:shadow-[#a646fb53] transition-all">
  <div className="p-3 mt-3 m-auto bg-[#a846fb] shadow-lg rounded-full">
  <SlEarphones  className="text-4xl text-white" />
  </div>
  
  <div className="card-body">
    <h2 className="card-title m-auto">Fully Functional</h2>
    <p className="text-center">Mucker plastered bugger all mate morish are.</p>
    
  </div>
</div>







    </div>









    </div>
  );
};

export default ToDo;
