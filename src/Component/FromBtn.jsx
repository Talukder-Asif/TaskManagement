
// eslint-disable-next-line react/prop-types
const FromBtn = ({btnName}) => {
    return (
        <button
      type="submit"
      className=" text-[#801f82] border-2 w-full border-[#801f82] px-4 py-2 md:px-5 md:py-2 font-semibold text-sm md:text-base rounded-md hover:bg-[#801f82] hover:text-white"
    >
      {btnName}
    </button>
  );
};

export default FromBtn;