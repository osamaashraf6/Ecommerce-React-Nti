import globalService from "../services/globalService";
import apiClient from "../utils/apiClient";

// createOneWishlist
export const createOneWishlist = async (productId) => {
  const res = await apiClient.post(`${globalService.routes.wishlists}`, {
    productId,
  });
  return res.data;
};

// getAllWishlist
export const getAllWishlist = async () => {
  const res = await apiClient.get(`${globalService.routes.wishlists} `);
  return res.data;
};

// deleteOneWishlist
export const deleteOneWishlist = async (id) => {
  const res = await apiClient.delete(`${globalService.routes.wishlists}/${id}`);
  return res.data;
};
