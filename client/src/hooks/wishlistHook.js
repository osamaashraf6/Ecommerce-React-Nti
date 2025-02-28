// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import {
//   createOneWishlist,
//   getAllWishlist,
//   deleteOneWishlist,
// } from "../services/wishlistService";

// const queryClient = useQueryClient();

// // ! createOne
// export const useCreateOneWishlistMutation = useMutation({
//   mutationFn: createOneWishlist,
//   onSuccess: () => {
//     queryClient.invalidateQueries(["wishlists"]);
//   },
// });
// // ! getAll with filter
// export const useGetAllWishlistQuery = ({
//   limit,
//   page,
//   sort,
//   search,
//   categoryId,
//   subcategoryId,
//   color,
//   size,
//   tags,
// }) => {
//   return useQuery({
//     queryKey: [
//       "wishlists",
//       limit,
//       page,
//       sort,
//       search,
//       categoryId,
//       subcategoryId,
//       color,
//       size,
//       tags,
//     ],
//     queryFn: () =>
//       getAllWishlist(
//         limit,
//         page,
//         sort,
//         search,
//         categoryId,
//         subcategoryId,
//         color,
//         size,
//         tags
//       ),
//     keepPreviousData: true,
//   });
// };

// // ! deleteOne
// export const useDeleteOneWishlistMutation = useMutation({
//   mutationFn: deleteOneWishlist,
//   onSuccess: () => {
//     queryClient.invalidateQueries(["wishlists"]);
//   },
// });

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import {
//   createOneWishlist,
//   getAllWishlist,
//   deleteOneWishlist,
// } from "../services/wishlistService";

// const useWishlist = () => {
//   const queryClient = useQueryClient();

//   // ! createOne
//   const createWishlistMutation = useMutation({
//     mutationFn: createOneWishlist,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["wishlists"]);
//     },
//   });

//   // ! deleteOne
//   const deleteWishlistMutation = useMutation({
//     mutationFn: deleteOneWishlist,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["wishlists"]);
//     },
//   });

//   return {
//     createWishlistMutation,

//     deleteWishlistMutation,
//   };
// };

// export default useWishlist;
// // ! getAll without filter
// export const useGetAllWishlistQuery = useQuery({
//   queryKey: ["wishlists"],
//   queryFn: getAllWishlist,
// });

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createOneWishlist,
  getAllWishlist,
  deleteOneWishlist,
} from "../services/wishlistService";

const useWishlist = () => {
  const queryClient = useQueryClient();

  // ! createOne
  const createWishlistMutation = useMutation({
    mutationFn: createOneWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries(["wishlists"]);
    },
  });
  // ! getAll without filter
  const useGetAllWishlistQuery = () =>
    useQuery({
      queryKey: ["wishlists"],
      queryFn: getAllWishlist,
    });

  // ! deleteOne
  const deleteWishlistMutation = useMutation({
    mutationFn: deleteOneWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries(["wishlists"]);
    },
  });

  return {
    createWishlistMutation,
    useGetAllWishlistQuery,
    deleteWishlistMutation,
  };
};

export default useWishlist;
// export const useGetAllWishlistQuery = () =>
//   useQuery({
//     queryKey: ["wishlists"],
//     queryFn: getAllWishlist,
//   });
