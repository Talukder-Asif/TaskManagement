/* eslint-disable react/prop-types */

const Btn = ({btnName}) => {
  return (
        <button
      type="button"
      className=" text-[#801f82] border-2 border-[#801f82] px-4 py-2 md:px-5 md:py-3 font-semibold text-sm md:text-base rounded-md hover:bg-[#801f82] hover:text-white"
    >
      {btnName}
    </button>
  );
};

export default Btn;
