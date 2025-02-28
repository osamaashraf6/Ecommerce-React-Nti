// src/hooks/useTodo.js
import { useQuery } from "@tanstack/react-query";
import { getAllProduct, getOneProduct } from "../services/productService";

// ! getAll with filter
export const useGetAllProductQuery = ({
  limit,
  page,
  sort,
  search,
  categoryId,
  subcategoryId,
  color,
  size,
  tags,
}) => {
  return useQuery({
    queryKey: [
      "products",
      limit,
      page,
      sort,
      search,
      categoryId,
      subcategoryId,
      color,
      size,
      tags,
    ],
    queryFn: () =>
      getAllProduct(
        limit,
        page,
        sort,
        search,
        categoryId,
        subcategoryId,
        color,
        size,
        tags
      ),
    keepPreviousData: true,
  });
};

// !  getOne
export const useGetOneProductQuery = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getOneProduct(id),
    enabled: !!id,
  });
};
