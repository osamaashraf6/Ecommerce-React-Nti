import { useQuery } from "@tanstack/react-query";
import { getAllSubCategory } from "../services/subcategoryService";

const useSubCategory = () => {
  // ! getAll without filter
  const useGetAllSubCategoryQuery = (categoryId) => {
    return useQuery({
      queryKey: ["subcategories", categoryId],
      queryFn: () => getAllSubCategory(categoryId),
      enabled: !!categoryId,
    });
  };
  return { useGetAllSubCategoryQuery };
};
export default useSubCategory;
