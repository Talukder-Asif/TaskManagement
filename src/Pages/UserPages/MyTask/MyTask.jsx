import useAxios from "../../../Hooks/useAxios";
import useTask from "../../../Hooks/useTask";
import Swal from "sweetalert2";
import Card from "./card";
import NoTask from "./NoTask";
import { useState } from "react";

const MyTask = () => {
  const axiosPublic = useAxios();
  // const Now = Date.now();
  const [Task, isTaskLoading, refetch] = useTask();
  const [actived, setActive] = useState(null);
  const [showDrop, setShowDrop] = useState(false);

  const toDoTask = Task?.filter((task) => task.list === "To Do");
  const ongoingTask = Task?.filter((task) => task.list === "On going");
  const CompleteTask = Task?.filter((task) => task.list === "Completed");

  const handelDelete = (Task) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${Task?.title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#801f82",
      cancelButtonColor: "#1b1d4d",
      confirmButtonText: "Yes, Delete Task",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/Task/delete/${Task?._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              icon: "success",
              title: `${Task?.name} is deleted!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  if (isTaskLoading) {
    return (
      <div className="grid min-h-[400px] w-full content-center justify-center">
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#801f82]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold">Please Wait....</h1>
      </div>
    );
  }

  return (
    <div className="">
      <div className="p-5 my-5 border-2 border-black">
        <h3 className=" text-xl font-bold">To Do List:</h3>
        <Card
          task={toDoTask}
          handelDelete={handelDelete}
          setActive={setActive}
          status="toDoTask"
          actived={actived}
          setShowDrop={setShowDrop}
          showDrop={showDrop}
        ></Card>
        {!toDoTask.length && <NoTask></NoTask>}
      </div>

      <div className="p-5 my-5 border-2 border-black">
        <h3 className=" text-xl font-bold">On Going List:</h3>
        <Card
          task={ongoingTask}
          handelDelete={handelDelete}
          setActive={setActive}
          status="ongoingTask"
          setShowDrop={setShowDrop}
          showDrop={showDrop}
        ></Card>
        {!ongoingTask.length && <NoTask></NoTask>}
      </div>

      <div className="p-5 my-5 border-2 border-black">
        <h3 className=" text-xl font-bold">Complete List:</h3>
        <Card
          task={CompleteTask}
          handelDelete={handelDelete}
          setActive={setActive}
          status="CompleteTask"
          setShowDrop={setShowDrop}
          showDrop={showDrop}
        ></Card>
        {!CompleteTask.length && <NoTask></NoTask>}
      </div>

      <h1>Active = {actived}</h1>
    </div>
  );
};

export default MyTask;
