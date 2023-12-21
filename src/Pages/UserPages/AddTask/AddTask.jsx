import { useContext } from "react";
import Swal from "sweetalert2";
import FromBtn from "../../../Component/FromBtn";
import { AuthContext } from "../../../Authantication/AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxios();
  const handelAdd = (e) => {
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
    axiosPublic.post("/addTask", data).then((res) =>
      res?.data?.acknowledged
        ? Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Task successfully added",
            showConfirmButton: false,
            timer: 1500,
          })
        : Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
    );
  };
  return (
    <div>
      <h3 className=" mb-5 text-3xl md:text-4xl lg:text-5xl text-gray-900  font-bold">
        Add Task
      </h3>

      <div>
        <form onSubmit={handelAdd}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Give a meaningful title"
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
              />
            </div>

            <div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  List
                </label>
                <select
                  name="list"
                  defaultValue
                  className="select select-bordered  w-full"
                  disabled
                >
                  
                  <option selected>To Do</option>
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
                  defaultValue
                  className="select select-bordered  w-full"
                >
                  <option disabled value>
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
                placeholder="Write Task details here..."
              ></textarea>
            </div>
          </div>
          <FromBtn btnName={"Add this task"}></FromBtn>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
