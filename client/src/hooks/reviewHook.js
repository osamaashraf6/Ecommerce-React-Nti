// src/hooks/useTodo.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createOneReview,
  getAllReviewOfUser,
  updateOneReview,
  deleteOneReview,
} from "../services/reviewService";

const useReview = () => {
  const queryClient = useQueryClient();

  // !  createOne
  const createOneReviewMutation = useMutation({
    mutationFn: createOneReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  // ! getAll with filter
  const useGetAllReviewOfUserQuery = ({
    limit,
    page,
    sort,
    search,
    categoryId,
    subcategoryId,
    color,
    size,
    tags,
  }) => {
    return useQuery({
      queryKey: [
        "reviews",
        limit,
        page,
        sort,
        search,
        categoryId,
        subcategoryId,
        color,
        size,
        tags,
      ],
      queryFn: () =>
        getAllReviewOfUser(
          limit,
          page,
          sort,
          search,
          categoryId,
          subcategoryId,
          color,
          size,
          tags
        ),
      keepPreviousData: true,
    });
  };

  // !  updateOne
  const updateOneReviewMutation = useMutation({
    mutationFn: updateOneReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });
  // !  deleteOne
  const deleteOneReviewMutation = useMutation({
    mutationFn: deleteOneReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  return {
    createOneReviewMutation,
    useGetAllReviewOfUserQuery,
    updateOneReviewMutation,
    deleteOneReviewMutation,
  };
};

export default useReview;
