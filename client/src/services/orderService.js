import apiClient from "../utils/apiClient";
import globalService from "./globalService";

// getAllOrder
export const getAllOrder = async () => {
  const res = await apiClient.get(
    `${globalService.routes.orders}/getOrderPageByUserHimSelf`
  );
  return res.data;
};
// createOneOrder
export const createOneOrder = async (formData) => {
  const res = await apiClient.post(`${globalService.routes.orders}`, formData);
  return res.data;
};
