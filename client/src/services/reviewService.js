import globalService from "../services/globalService";
import apiClient from "../utils/apiClient";

// createOneReview
export const createOneReview = async ({ productId, formData }) => {
  const res = await apiClient.post(
    `${globalService.routes.products}/${productId}/reviews`,
    formData
  );
  return res.data;
};

// getAllReviewOfUser
export const getAllReviewOfUser = async (
  limit = 10,
  page = 1,
  sort = "-createdAt",
  search = "",
  categoryId = "",
  subcategoryId = "",
  color = "",
  size = "",
  tags = ""
) => {
  let queryParams = `limit=${limit}&page=${page}&sort=${sort}`;
  if (search) {
    queryParams += `&search=${search}`;
  }
  if (categoryId) {
    queryParams += `&categoryId=${categoryId}`;
  }
  if (subcategoryId) {
    queryParams += `&subcategoryId=${subcategoryId}`;
  }

  if (color) {
    queryParams += `&color=${color}`;
  }
  if (size) {
    queryParams += `&size=${size}`;
  }
  if (tags) {
    queryParams += `&tags=${tags}`;
  }

  const res = await apiClient.get(
    `${globalService.routes.reviews}/userReviews?${queryParams}`
  );
  return res.data;
};

// updateOneReview
export const updateOneReview = async ({reviewId, formData}) => {
  const res = await apiClient.put(
    `${globalService.routes.reviews}/${reviewId}`,
    formData
  );
  return res.data;
};
// deleteOneReview
export const deleteOneReview = async (id) => {
  const res = await apiClient.delete(`${globalService.routes.reviews}/${id}`);
  return res.data;
};
