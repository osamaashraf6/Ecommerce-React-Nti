import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createOneAddress,
  deleteOneAddress,
  getAllAddressOfUser,
} from "../services/addressService";
const useAddress = () => {
  const queryClient = useQueryClient();

  // ! createOne
  const createOneAddressMutation = useMutation({
    mutationFn: createOneAddress,
    onSuccess: () => {
      queryClient.invalidateQueries(["addresses"]);
    },
  });
  // ! getAll without filter
  const getAllAddressOfUserQuery = useQuery({
    queryKey: ["addresses"],
    queryFn: getAllAddressOfUser,
  });

  // ! deleteOne
  const deleteOneAddressMutation = useMutation({
    mutationFn: deleteOneAddress,
    onSuccess: () => {
      queryClient.invalidateQueries(["addresses"]);
    },
  });

  return {
    createOneAddressMutation,
    getAllAddressOfUserQuery,
    deleteOneAddressMutation,
  };
};

export default useAddress;
