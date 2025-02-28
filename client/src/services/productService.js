import globalService from "../services/globalService";
import apiClient from "../utils/apiClient";

// getAllProduct
export const getAllProduct = async (
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
    `${globalService.routes.products}?${queryParams}`
  );
  return res.data;
};

// getOneProduct
export const getOneProduct = async (id) => {
  const res = await apiClient.get(`${globalService.routes.products}/${id}`);
  return res.data;
};
