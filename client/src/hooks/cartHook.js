// src/hooks/useTodo.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addProductToCart,
  getUserCart,
  applyCouponCart,
  removeProductFromCart,
  clearUserCart,
  updateQuantity,
} from "../services/cartService";

const useCart = () => {
  const queryClient = useQueryClient();

  // !  addProductToCart
  const addProductToCartMutation = useMutation({
    mutationFn: addProductToCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
    // onMutate: () => {
    //   // 🚀 Optimistically update the cart before the API response
    //   queryClient.setQueryData(["cart"], []);
    // },
    // onSuccess: () => {
    //   queryClient.invalidateQueries(["cart"]); // Invalidate and refetch
    // },
  });

  // // ! getUserCart without filter : if you uncomment it although you don't use it it will thorow error in the browser and the network tab continuously generate error
  // const useGetUserCartQuery = useQuery({
  //   queryKey: ["cart"],
  //   queryFn: getUserCart,
  // });
  // ! getUserCart without filter
  const useGetUserCartQuery = () => {
    return useQuery({
      queryKey: ["cart"],
      queryFn: getUserCart,
    });
  };

  // !  applyCouponCart
  const applyCouponCartMutation = useMutation({
    mutationFn: applyCouponCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
  // !  updateQuantity
  const updateQuantityMutation = useMutation({
    mutationFn: updateQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
  // !  removeProductFromCart
  const removeProductFromCartMutation = useMutation({
    mutationFn: removeProductFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
  // !  clearUserCart
  const clearUserCartMutation = useMutation({
    mutationFn: clearUserCart,
    onMutate: () => {
      // 🚀 Optimistically update the cart before the API response
      queryClient.setQueryData(["cart"], []);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]); // Invalidate and refetch
    },
  });

  return {
    addProductToCartMutation,
    useGetUserCartQuery,
    applyCouponCartMutation,
    updateQuantityMutation,
    removeProductFromCartMutation,
    clearUserCartMutation,
  };
};

export default useCart;
