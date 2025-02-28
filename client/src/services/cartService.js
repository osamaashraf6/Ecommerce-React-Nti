import globalService from "../services/globalService";
import apiClient from "../utils/apiClient";

// addProductToCart
export const addProductToCart = async (productId) => {
  const res = await apiClient.post(globalService.routes.carts, { productId });
  return res.data;
};
// getUserCart
export const getUserCart = async () => {
  const res = await apiClient.get(`${globalService.routes.carts}`);
  return res.data;
};

// applyCouponCart
export const applyCouponCart = async (formData) => {
  const res = await apiClient.put(
    `${globalService.routes.carts}/applyCoupon`,
    formData
  );
  return res.data;
};
// updateQuantity
export const updateQuantity = async ({itemId, formData}) => {
  const res = await apiClient.put(`${globalService.routes.carts}/${itemId}`, {
    quantity: formData,
  });
  return res.data;
};
// removeProductFromCart
export const removeProductFromCart = async (productId) => {
  console.log(productId);
  const res = await apiClient.delete(
    `${globalService.routes.carts}/${productId}`
  );
  return res.data;
};
// clearUserCart
export const clearUserCart = async () => {
  console.log("clearUserCart");
  const res = await apiClient.delete(`${globalService.routes.carts}`);
  return res.data;
};
