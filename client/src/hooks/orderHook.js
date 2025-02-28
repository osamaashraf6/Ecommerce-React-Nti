import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOneOrder, getAllOrder } from "../services/orderService";

const useOrder = () => {
      const queryClient = useQueryClient();

  // ! getAllOrder
  const useGetAllOrderQuery = () => {
    return useQuery({
      queryKey: ["orders"],
      queryFn: getAllOrder,
    });
  };
  // ! createOneOrder
  const createOneOrderMutation = useMutation({
    mutationFn: createOneOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
    },
  });
  return {
    useGetAllOrderQuery,
    createOneOrderMutation,
  };
};
export default useOrder;
