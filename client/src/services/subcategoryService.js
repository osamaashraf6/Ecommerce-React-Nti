import apiClient from "../utils/apiClient";
import globaService from "./globalService";

export const getAllSubCategory = async (categoryId) => {
  console.log(categoryId);
  const res = await apiClient.get(
    `${globaService.routes.categories}/${categoryId}/subcategories`
  );
  return res.data;
};




 