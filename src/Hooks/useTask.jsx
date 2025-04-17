import { useContext } from "react";
import { AuthContext } from "../Authantication/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
const useTask = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxios();
  // eslint-disable-next-line no-unused-vars
  const {
    data: Task,
    isPending: isTaskLoading,
    refetch,
  } = useQuery({
    queryKey: ["isUsersTask"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/Task/${user?.email}`);
      return res.data;
    },
  });

  return [Task, isTaskLoading, refetch];
};

export default useTask;
