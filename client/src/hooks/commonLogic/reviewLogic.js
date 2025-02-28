import React, { useState } from "react";
import { useSelector } from "react-redux";
import useReview from "../reviewHook";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
const useReviewLogic = () => {
  const [reviewId, setReviewId] = useState(null);
  const [page, setPage] = useState(1);
  const changePage = (page) => {
    setPage(page);
  };
  const { currentUser } = useSelector((state) => state.user);
  const {
    useGetAllReviewOfUserQuery,
    createOneReviewMutation,
    updateOneReviewMutation,
    deleteOneReviewMutation,
  } = useReview();
  const { isPending: createRevLoading } = createOneReviewMutation;
  const { isPending: updateRevLoading } = updateOneReviewMutation;
  const { isPending: deleteRevLoading } = deleteOneReviewMutation;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    register: registerUpdateReview,
    handleSubmit: handleSubmitUpdateReview,
    reset: resetUpdateReview,
    formState: { errors: errorsUpdateReview },
  } = useForm();
  const { isPending, data: review } = useGetAllReviewOfUserQuery({
    limit: 10,
    page,
  });
  const handleCreateOneReview = (productId, data) => {
    if (!currentUser) {
      toast.error("Please login to leave a review");
    } else {
      createOneReviewMutation.mutate(
        { productId, formData: data },
        {
          onSuccess: () => {
            toast.success("Review created successfully");
          },
          onError: (res) => {
            toast.error(res?.response?.data?.errors[0]?.msg);
          },
        }
      );
      reset();
    }
  };
  const handleDeleteOneReview = (reviewId) => {
    if (!currentUser) {
      toast.error("Please login to delete a review");
    } else {
      setReviewId(reviewId);
      deleteOneReviewMutation.mutate(reviewId, {
        onSuccess: () => {
          toast.success("Review deleted successfully");
        },
        onError: (res) => {
          console.log(res);
          toast.error("Review deletion failed");
        },
      });
    }
  };
  const handleUpdateOneReview = (reviewId, data) => {
    if (!data.rate && !data.comment) {
      toast.error("Can not submit empty form");
      return;
    }
    if (!currentUser) {
      toast.error("Please login to update a review");
    } else {
      setReviewId(reviewId);

      const updatedData = {
        rate: data.rate || undefined,
        comment: data.comment || undefined,
      };

      updateOneReviewMutation.mutate(
        { reviewId, formData: updatedData },
        {
          onSuccess: () => {
            toast.success("Review updated successfully");
          },
          onError: (res) => {
            console.log(res);
            toast.error("Review update failed");
          },
        }
      );
      resetUpdateReview();
    }
  };
  return {
    register,
    handleSubmit,
    errors,
    handleCreateOneReview,
    createRevLoading,
    handleDeleteOneReview,
    deleteRevLoading,
    handleUpdateOneReview,
    registerUpdateReview,
    handleSubmitUpdateReview,
    errorsUpdateReview,
    updateRevLoading,
    reviewId,
    setReviewId,
    currentUser,
    isPending,
    review,
    changePage,
  };
};
export default useReviewLogic;
