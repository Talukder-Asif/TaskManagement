// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
import { useState } from "react";
import SingleCard from "./SingleCard";

const Card = ({
  task,
  handelDelete,
  setDropArea,
  status,
  setActive,
  setShowDrop,
}) => {
  const [showDropArea, setShowDropArea] = useState(false);
  return (
    <div>
      <div
        onDragEnter={() => {
          setShowDrop(true);
          setShowDropArea(true);
        }}
        onDragLeave={() => {
          setShowDrop(false);
          setShowDropArea(false);
          setDropArea(null);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setDropArea(status);
          setShowDrop(false);
          setShowDropArea(false);
        }}
        className={
          showDropArea
            ? "w-full md:w-1/2 lg:w-1/3  bg-gray-300  items-center   h-20 -mt-10 m-auto text-center pt-6 pr-4  "
            : "opacity-0 w-full md:w-1/2 lg:w-1/3 h-20 -mt-10 m-auto  text-center pt-6 pr-4"
        }
      >
        Drop it here
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-2 gap-4">
        {task?.map((Task, i) => (
          <SingleCard
            Task={Task}
            handelDelete={handelDelete}
            setActive={setActive}
            key={i}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
