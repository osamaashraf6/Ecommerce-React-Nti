import { useState } from "react";
import useCategory from "../categoryHook";
import useSubCategory from "../subcategoryHook";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetAllProductQuery } from "../productHook";
const useProductLogic = () => {
  const [searchParams] = useSearchParams();
  const subcategoryName = searchParams.get("subcategoryname");
  const catId = searchParams.get("categoryId");
  const { subcatId } = useParams();
  const dropItems = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];
  const colorList = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
    { id: 3, name: "black" },
    { id: 4, name: "white" },
    { id: 5, name: "blue" },
  ];
  const sizeList = [
    { id: 1, name: "sm" },
    { id: 2, name: "md" },
    { id: 3, name: "lg" },
    { id: 4, name: "xl" },
  ];
  // ===================
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("-createdAt");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(catId);
  // const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState(subcatId);
  const [listAll, setListAll] = useState(false);
  const [show, setShow] = useState("three");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  // ===================
  const { isPending, data: products } = useGetAllProductQuery({
    limit,
    page,
    sort,
    search,
    categoryId: listAll || subcategory ? "" : category, //! very important
    subcategoryId: listAll ? "" : subcategory,
    color: listAll ? "" : color,
    size: listAll ? "" : size,
  });
  const { isPending: categoryLoading, data: categoryList } = useCategory({});
  const { useGetAllSubCategoryQuery } = useSubCategory();
  const { isPending: subcategoryLoading, data: subcategoryList } =
    useGetAllSubCategoryQuery(category);

  // ===================

  const limitItems = (limit) => {
    setLimit(limit);
  };
  const changePage = (page) => {
    setPage(page);
  };
  const sortItems = (sort) => {
    setSort(sort);
  };
  const searchItems = (search) => {
    setSearch(search);
  };
  const filterOnCategoryItems = (category) => {
    setCategory(category);
    setSubCategory("");
  };
  const filterOnSubCategoryItems = (subcategory) => {
    setSubCategory(subcategory);
    // ! setCategory(""); That's wrong as if you make that the subcategory list will say loading infinite and not displaying the subcategories of that category as you say the category to be ""
  };
  const listAllItems = () => {
    setListAll(true);
  };
  const changeShow = (show) => {
    setShow(show);
  };
  const colorItems = (color) => {
    setColor(color);
    // setSubCategory("");
    // setCategory("");
    // setSize("");
  };
  const sizeItems = (size) => {
    setSize(size);
    // setSubCategory("");
    // setCategory("");
    // setColor("");
  };
  const resetItems = () => {
    setSearch("");
    setCategory(catId);
    setSubCategory(subcatId);
    setListAll(false);
    setShow("three");
    setColor("");
    setSize("");
  };
  return {
    subcategoryName,
    dropItems,
    colorList,
    sizeList,
    products,
    isPending,
    categoryLoading,
    categoryList,
    subcategoryLoading,
    subcategoryList,
    limitItems,
    changePage,
    sortItems,
    searchItems,
    filterOnCategoryItems,
    filterOnSubCategoryItems,
    listAllItems,
    resetItems,
    sizeItems,
    colorItems,
    changeShow,
    show,
  };
};
export default useProductLogic;
