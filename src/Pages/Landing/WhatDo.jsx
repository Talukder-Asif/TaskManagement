/* eslint-disable react/no-unescaped-entities */
import bannerImg from "/src/assets/whatdo.png";
const WhatDo = () => {
  return (
    <div className="py-10 bg-[#0e1133]">
      <div className="m-auto">
        <h3 className="text-center m-auto text-3xl text-white font-bold">
          Wherever you need us
        </h3>
        <p className="max-w-[90%] font1 text-center text-gray-400 m-auto md:max-w[60%]">
          When it comes down to choosing task manager freeware, all you need is
          three things:
        </p>
      </div>

      <div className="hero-content flex-col-reverse md:flex-row-reverse">
        <div className="md:w-5/12">
          <img src={bannerImg} className=" w-10/12 m-auto" />
        </div>
        <div className="md:w-7/12">
          <div>
            <div className="card my-5 w-[80%] m-auto md:card-side p-5 rounded-md bg-base-100 border border-[#ff3e6534] hover:border-[#ff3e66] bg-transparent">
              <figure>
                <div className="w-4 h-4 bg-[#ff3e66] rounded-full"></div>
              </figure>
              <div className="md:pl-5">
                <h2 className="text-lg text-gray-200 font-bold">
                  Light and dark mode
                </h2>
                <p className="text-gray-500 text-sm">
                  The bee's knees chancer car boot absolutely.
                </p>
              </div>
            </div>

            <div className="card w-[80%] my-5 m-auto md:card-side p-5 rounded-md bg-base-100 border border-[#20993061] hover:border-green-400 bg-transparent">
              <figure>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </figure>
              <div className="md:pl-5">
                <h2 className="text-lg text-gray-200 font-bold">
                  Well Integrated
                </h2>
                <p className="text-gray-500 text-sm">
                  The bee's knees chancer car boot absolutely.
                </p>
              </div>
            </div>

            <div className="card my-5 w-[80%] m-auto md:card-side p-5 rounded-md bg-base-100 border border-[#2eadfc3a] hover:border-[#2eacfc] bg-transparent">
              <figure>
                <div className="w-4 h-4 bg-[#2eacfc] rounded-full"></div>
              </figure>
              <div className="md:pl-5">
                <h2 className="text-lg text-gray-200 font-bold">
                  Clean and modern Design
                </h2>
                <p className="text-gray-500 text-sm">
                  The bee's knees chancer car boot absolutely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDo;
