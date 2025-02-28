import globalService from "../services/globalService";
import apiClient from "../utils/apiClient";

// getAllCategory
export const getAllCategory = async (limit, page, sort) => {
  let queryParams = `limit=${limit}&page=${page}&sort=${sort}`;

  const res = await apiClient.get(
    `${globalService.routes.categories}?${queryParams}`
  );
  return res.data;
};
