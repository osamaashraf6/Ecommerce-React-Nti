import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/categoryHook";
import globalService from "../services/globalService";
import NoItems from "./NoItems";
import CategorySkeleton from "../features/loading/LazyLoadingComp/Category";
const Category = () => {
  const [page, setPage] = useState(1);
  const { isPending: categoryLoading, data: category } = useCategory({
    limit: 6,
    page,
    sort: "-createdAt",
  });
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <>
      <section className="py-16">
        <div className="container-wrapper">
          <div className="flex items-center gap-5 pb-10">
            <h2 className="text-slate-700 font-bold text-4xl uppercase">
              Categories
            </h2>
            <hr className="border-dashed border-slate-400 w-full" />
          </div>
          <div className="items flex flex-wrap gap-8">
            {categoryLoading ? (
              <CategorySkeleton length={category?.data?.length || 3} />
            ) : category?.data?.length > 0 ? (
              category?.data?.map((item) => (
                <div
                  key={item?._id}
                  className="item-category cursor-pointer w-[23%] bg-white"
                >
                  <Link
                    to={`/categories/${item?._id}?subcategoryname=${item?.subcategoryId?.name}`}
                  >
                    <div className="flex">
                      <div className="w-[150px] h-[100px] overflow-hidden">
                        <img
                          src={
                            item?.img
                              ? globalService.categoryImg + item?.img
                              : "/pexels-photo-57690.jpeg"
                          }
                          alt={item?.name}
                          className="img-responsive-fill category-img transition ease-in-out duration-700"
                        />
                      </div>
                      <div className="flex category-details w-full flex-col gap-2 justify-center transition duration-700 ease-in-out items-start p-5">
                        <h3 className="capitalize text-slate-700 text-lg font-medium">
                          {item?.name}
                        </h3>
                        <span>100 Products</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <NoItems />
            )}
          </div>
          {/* <!-- Start Pagination --> */}
          {category?.data?.length > 3 && (
            <nav
              aria-label="Page navigation example"
              className="flex justify-center items-center py-20"
            >
              <ul className="inline-flex -space-x-px text-sm">
                <li onClick={() => changePage(1)}>
                  <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Previous
                  </button>
                </li>
                {/* <!-- End previous --> */}
                {category?.pagination.prev && (
                  <li
                    onClick={() => changePage(category?.pagination.prev)}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <button className="page-link">
                      {category?.pagination.prev}
                    </button>
                  </li>
                )}
                <li className="page-item">
                  <button
                    disabled
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    {category?.pagination.currentPage}
                  </button>
                </li>
                {category?.pagination.next && (
                  <li
                    onClick={() => changePage(category?.pagination.next)}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <button className="page-link">
                      {category?.pagination.next}
                    </button>
                  </li>
                )}
                {/* <!-- Start next --> */}
                <li onClick={() => changePage(category?.pagination.totalPages)}>
                  <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
          {/* <!-- End Pagination --> */}
          {/* <!-- </div> --> */}
        </div>
      </section>
    </>
  );
};

export default Category;
