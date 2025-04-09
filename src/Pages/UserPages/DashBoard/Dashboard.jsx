import Swal from "sweetalert2";
import { useContext, useState } from "react";

import axios from "axios";
import useUserDetails from "../../../Hooks/useUserDetails";
import { AuthContext } from "../../../Authantication/AuthProvider/AuthProvider";
import FromBtn from "../../../Component/FromBtn";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { CLOUD_NAME, Preset } from "../../../cloudinary.config";
import imageCompression from "browser-image-compression";

const Dashboard = () => {
  const [User, isUserLoading, refetch] = useUserDetails();
  const { update } = useContext(AuthContext);
  const [imageUpload, setImageUpload] = useState(null);
  const axiosSecure = useAxiosSecure();
  const handelUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = User?.photo;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#801f82",
      cancelButtonColor: "#1b1d4d",
      confirmButtonText: "Yes, Update Now!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (!imageUpload) {
          update(name, photo);

          const userData = {
            name,
            photo: photo,
          };

          return await axiosSecure
            .put(`/user/${User?.email}`, userData)
            .then((res) => {
              if (res?.data?.modifiedCount) {
                form.reset();
                setImageUpload(null);
                refetch();

                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Profile updated successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
        try {
          const compressedImage = await imageCompression(imageUpload, {
            maxSizeMB: 0.3,
            maxWidthOrHeight: 500,
            useWebWorker: true,
          });

          const data = new FormData();
          data.append("file", compressedImage);
          data.append("upload_preset", Preset);
          data.append("cloud_name", CLOUD_NAME);

          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: data,
            }
          );
          const imagefile = await res?.json();
          const imageURL = imagefile?.secure_url;

          update(name, photo);
          const updateData = {
            name: name,
            email: User?.email,
            photo: imageURL,
          };
          axios
            .put(`http://localhost:3000/user/${User?.email}`, updateData)
            .then((res) => console.log(res.data));
          Swal.fire({
            icon: "success",
            title: "Update successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
        } catch (error) {
          Swal.fire({
            title: "Error during update",
            text: error.message,
            icon: "error",
          });
        }
      }
    });
  };

  if (isUserLoading) {
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
        <h1 className="text-4xl md:text-7xl font-bold">Loading....</h1>
      </div>
    );
  }
  return (
    <div>
      <h3 className=" mb-5 text-3xl md:text-4xl lg:text-5xl text-gray-900  font-bold">
        My Profile
      </h3>
      <div className="flex gap-10 flex-wrap">
        <img className="w-40 h-40 rounded-full" src={User?.photo} alt="" />
        <div>
          <h3 className="text-lg mb-5 md:text-xl text-gray-900 lg:text-2xl font-bold">
            ID : {User?._id}
          </h3>
          <h3 className="text-lg mb-5 md:text-xl text-gray-900 lg:text-2xl font-bold">
            Full Name : {User?.name}
          </h3>
          <h3 className="text-lg mb-5 md:text-xl text-gray-900 lg:text-2xl font-bold">
            Email : {User?.email}
          </h3>
        </div>
      </div>

      <h3 className=" my-5 text-3xl md:text-4xl lg:text-5xl text-gray-900  font-bold">
        Update Profile
      </h3>
      <form onSubmit={handelUpdate}>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="">
            <label> New Name</label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={User.name}
              required
            />
          </div>
          <div className="">
            <label>Change Profile Photo</label>
            <input
              type="file"
              onChange={(e) => setImageUpload(e.target.files[0])}
              className="file-input file-input-bordered w-full block rounded-md border outline-none dark:border-[#002a3f] focus:ring-1 ring-[#002a3f]"
            />
          </div>
        </div>
        <FromBtn btnName={"Update Now"}></FromBtn>
      </form>
    </div>
  );
};

export default Dashboard;
