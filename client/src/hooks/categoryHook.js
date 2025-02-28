// src/hooks/useTodo.js
import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../services/categoryService";

const useCategory = ({ limit = 10, page = 1, sort = "asc" }) => {
  return useQuery({
    queryKey: ["categories", limit, page, sort],
    queryFn: () => getAllCategory(limit, page, sort),
    keepPreviousData: true,
  });
};

export default useCategory;
