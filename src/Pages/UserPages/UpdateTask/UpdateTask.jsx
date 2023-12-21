import { useContext } from "react";
import Swal from "sweetalert2";
import FromBtn from "../../../Component/FromBtn";
import { AuthContext } from "../../../Authantication/AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import useTaskById from "../../../Hooks/useTaskById";
import { useParams } from "react-router-dom";

const UpdateTask = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxios();
  const Id = useParams().id;
  console.log(Id)
  const [Task, isTaskLoading, refetch] = useTaskById(Id)
  const handelUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      title: form.title.value,
      details: form.details.value,
      taskfor: user?.email,
      priority: form.priority.value,
      list: form.list.value,
      TaskDeadline: form.deadline.value,
    };
    axiosPublic.put(`/Task/${Task?._id}`, data)
    .then((res) =>{
      if(res.data.modifiedCount > 0){
          refetch();
          Swal.fire({
              icon: "success",
              title: "Updated Successfully",
              showConfirmButton: false,
              timer: 1500
            });
      }
    }
    );
  };
  if (isTaskLoading) {
    return (
      <div className="grid min-h-[400px] content-center justify-center">
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#eb0029]"
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
    <div>
      <h3 className=" mb-5 text-3xl md:text-4xl lg:text-5xl text-gray-900  font-bold">
        Update Task
      </h3>

      <div>
        <form onSubmit={handelUpdate}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={Task?.title}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Task Deadline
              </label>
              <input
                type="date"
                name="deadline"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                defaultValue={Task?.TaskDeadline}
              />
            </div>

            <div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  List
                </label>
                <select
                  name="list"
                  className="select select-bordered  w-full"
                  defaultValue={Task?.list}
                >
                  <option >To Do</option>
                  <option>On going</option>
                  <option>Completed</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Priority
                </label>
                <select
                  name="priority"
                  defaultValue={Task?.priority}
                  className="select select-bordered  w-full"
                >
                  <option disabled>
                    What is the priority of the task?
                  </option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Task Description
              </label>
              <textarea
                name="details"
                rows="5"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={Task?.details}
              ></textarea>
            </div>
          </div>
          <FromBtn btnName={"Update this task"}></FromBtn>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
