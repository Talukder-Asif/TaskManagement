import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import useTask from "../../../Hooks/useTask";
import Swal from "sweetalert2";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";

const MyTask = () => {
  const axiosPublic = useAxios();
  const Now = Date.now();
  console.log(Now);
  const [Task, isTaskLoading, refetch] = useTask();
  const toDoTask=Task?.filter(task => task.list === "To Do" && Now <= Date.parse(task.TaskDeadline));
  const ongoingTask=Task?.filter(task => task.list === "On going" && Now <= Date.parse(task.TaskDeadline));
  const CompledeTask=Task?.filter(task => task.list === "Completed" && Now <= Date.parse(task.TaskDeadline));


  const handelDelete = (Task) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${Task.title}?`,
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
              title: `${Task.name} is deleted!`,
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
      <div className="grid min-h-[400px] content-center justify-center">
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
  if (toDoTask?.length <= 0 && ongoingTask?.length <= 0 && CompledeTask?.length <= 0 ) {
    return (
      <h1 className="text-3xl text-center my-4 font-extrabold dark:text-white">
        No Task
      </h1>
    );
  }
  return (
    <div className="">
<div className="p-5 my-5 border-2 border-black">
      <h3 className=" text-xl font-bold" >To Do List:</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {toDoTask?.map((Task, i) => (
        <div className={Task?.priority=="High"?"bg-[#ff3e6576]":Task?.priority=="Low"?"bg-[#4ade8080]":"bg-[#2eadfc6f]"} key={i}>
          <div
            className="block max-w-sm p-6 rounded-lg"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Task?.title}
            </h5>
            <p className="font-normal text-gray-900 dark:text-gray-400">
              {Task?.details}
            </p>
            <div className="flex gap-3 justify-evenly">
                <div onClick={()=>handelDelete(Task)}><MdOutlineDelete className="text-4xl font-bold" /></div>
                <Link to={`/users/update/${Task?._id}`}><MdOutlineUpdate className="text-4xl font-bold" /></Link>
                <span className="text-xl font-bold" >{Task?.priority}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
      <div className="p-5 my-5 border-2 border-black">
      <h3 className=" text-xl font-bold" >On Going List:</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ongoingTask?.map((Task, i) => (
        <div className={Task?.priority=="High"?"bg-[#ff3e6576]":Task?.priority=="Low"?"bg-[#4ade8080]":"bg-[#2eadfc6f]"} key={i}>
          <div
            className="block max-w-sm p-6 rounded-lg"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Task?.title}
            </h5>
            <p className="font-normal text-gray-900 dark:text-gray-400">
              {Task?.details}
            </p>
            <div className="flex gap-3 justify-evenly">
                <div onClick={()=>handelDelete(Task)}><MdOutlineDelete className="text-4xl font-bold" /></div>
                <Link to={`/users/update/${Task?._id}`}><MdOutlineUpdate className="text-4xl font-bold" /></Link>
                <span className="text-xl font-bold" >{Task?.priority}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
      
      <div className="p-5 my-5 border-2 border-black">
      <h3 className=" text-xl font-bold" >Complede List:</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CompledeTask?.map((Task, i) => (
        <div className={Task?.priority=="High"?"bg-[#ff3e6576]":Task?.priority=="Low"?"bg-[#4ade8080]":"bg-[#2eadfc6f]"} key={i}>
          <div
            className="block max-w-sm p-6 rounded-lg"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Task?.title}
            </h5>
            <p className="font-normal text-gray-900 dark:text-gray-400">
              {Task?.details}
            </p>
            <div className="flex gap-3 justify-evenly">
                <div onClick={()=>handelDelete(Task)}><MdOutlineDelete className="text-4xl font-bold" /></div>
                <Link to={`/users/update/${Task?._id}`}><MdOutlineUpdate className="text-4xl font-bold" /></Link>
                <span className="text-xl font-bold" >{Task?.priority}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>

    </div>
  );
};

export default MyTask;
