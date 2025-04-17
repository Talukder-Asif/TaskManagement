/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
// eslint-disable-next-line react/prop-types
const SingleCard = ({ setActive, Task, handelDelete }) => {
  return (
    <div
      onDragStart={() => setActive(Task?._id)}
      onDragEnd={() => setActive(null)}
      draggable
      className="bg-[#ff3e6576] border-transparent duration-500 border-2 active:border-black"
    >
      <div className="block max-w-sm p-6 rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {Task?.title}
        </h5>
        <p className="font-normal text-gray-900 dark:text-gray-400">
          {Task?.details}
        </p>
        <div className="flex gap-3 justify-evenly">
          <div onClick={() => handelDelete(Task)}>
            <MdOutlineDelete className="text-4xl font-bold" />
          </div>
          <Link to={`/users/update/${Task?._id}`}>
            <MdOutlineUpdate className="text-4xl font-bold" />
          </Link>
          <span className="text-xl font-bold">{Task?.priority}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
