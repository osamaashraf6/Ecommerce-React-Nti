import React, { useState } from "react";
import { Link } from "react-router-dom";
import NoItems from "../components/NoItems";
import globalService from "../services/globalService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import useAddToWishlist from "../hooks/commonLogic/addToWishlist";
import useProductLogic from "../hooks/commonLogic/productLogic";

const Products = () => {
  const [openShow, setOpenShow] = useState(false);
  const {
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
  } = useProductLogic();
  const { handleCreateWishlist, handleAddToCart } = useAddToWishlist();

  return (
    <>
      <main className="">
        <section className="big_section" id="big_section">
          <div className="asides flex">
            <div className="aside_left w-[25%] max-h-[891px] overflow-y-scroll flex flex-col gap-10">
              {/* <!--  --> */}
              <div className="px-8 flex flex-col gap-4">
                <h2 className="text-slate-500 font-medium text-xl uppercase">
                  Choose Category
                </h2>
                <div className="bg-white py-5 rounded-md shadow-md">
                  {categoryLoading ? (
                    <p>Loading...</p>
                  ) : (
                    categoryList?.data?.map((item) => (
                      <div
                        key={item?._id}
                        className="p-3 pb-0 flex justify-between items-center"
                      >
                        <div className="flex gap-2">
                          <input
                            type="radio"
                            className=""
                            id="category"
                            name="cat"
                            onChange={(e) =>
                              filterOnCategoryItems(e.target.value)
                            }
                            value={item?._id}
                          />
                          <label for="category" className="text-yellow-400">
                            {item?.name}
                          </label>
                        </div>
                        <span className="border p-1 px-2 text-gray-400 text-xs">
                          100
                        </span>
                      </div>
                    ))
                  )}
                  {/* } */}
                </div>
              </div>
              <div className="px-8 flex flex-col gap-4">
                <h2 className="text-slate-500 font-medium text-xl uppercase">
                  Filter by subcategory
                </h2>
                <div className="bg-white py-5 rounded-md shadow-md">
                  {subcategoryLoading ? (
                    <p>Loading...</p>
                  ) : (
                    subcategoryList?.data?.map((item) => (
                      <div
                        key={item?._id}
                        className="p-3 pb-0 flex justify-between items-center"
                      >
                        <div className="flex gap-2">
                          <input
                            onChange={(e) =>
                              filterOnSubCategoryItems(e.target.value)
                            }
                            type="radio"
                            className=""
                            name="subcat"
                            value={item?._id}
                          />
                          <label for="category" className="text-yellow-400">
                            {item?.name}
                          </label>
                        </div>
                        <span className="border p-1 px-2 text-gray-400 text-xs">
                          100
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="px-8 flex flex-col gap-4">
                <h2 className="text-slate-500 font-medium text-xl uppercase">
                  Filter by color
                </h2>
                <div className="bg-white py-5 rounded-md shadow-md">
                  {colorList.map((item) => (
                    <div
                      key={item?.id}
                      className="p-3 pb-0 flex justify-between items-center"
                    >
                      <div className="flex gap-2">
                        <input
                          onChange={(e) => colorItems(e.target.value)}
                          value={item.name}
                          type="radio"
                          className=""
                          name="color"
                        />
                        <label for="category" className="text-yellow-400">
                          {item.name}
                        </label>
                      </div>
                      <span className="border p-1 px-2 text-gray-400 text-xs">
                        100
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 flex flex-col gap-4">
                <h2 className="text-slate-500 font-medium text-xl uppercase">
                  Filter by size
                </h2>
                <div className="bg-white py-5 rounded-md shadow-md">
                  {sizeList.map((item) => (
                    <div
                      key={item?.id}
                      className="p-3 pb-0 flex justify-between items-center"
                    >
                      <div className="flex gap-2">
                        <input
                          onChange={(e) => sizeItems(e.target.value)}
                          value={item.name}
                          type="radio"
                          className=""
                          name="size"
                        />
                        <label for="category" className="text-yellow-400">
                          {item.name}
                        </label>
                      </div>
                      <span className="border p-1 px-2 text-gray-400 text-xs">
                        100
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!--  -->

        <!--  --> */}
            </div>
            <div className="aside-right w-[75%] pt-2">
              {/* <!--  --> */}
              <section className="py-5">
                <div className="container-wrapper">
                  <div className="mb-9">
                    <h2 className="font-medium text-slate-500 text-xl uppercase">
                      {/* {{ subcategoryName }} */}
                    </h2>
                  </div>
                  <div className="items flex items-center justify-between">
                    {/* <!-- <div className="item flex gap-5 items-center">
                <span className="font-medium text-lg">Filter products:</span>
                <select
                  className="border-2 border-gray-300 p-2 w-[80px]"
                  name="color"
                >
                  <option selected hidden>Color</option>
                  <option>white</option>
                  <option>orange</option>
                  <option>red</option>
                  <option>darkblue</option>
                  <option>yellow</option>
                  <option>gray</option>
                </select>
                <select
                  className="border-2 border-gray-300 p-2 w-[80px]"
                  name="size"
                >
                  <option selected hidden>Size</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <div>reset filter</div>
              </div> --> */}
                    <div>
                      <button
                        onClick={resetItems}
                        className="bg-yellow-500 p-2 text-white text-sm rounded shadow-lg"
                      >
                        Reset Filter
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={listAllItems}
                        className="bg-yellow-500 p-2 text-white text-sm rounded shadow-lg"
                      >
                        List all Products
                      </button>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setOpenShow(!openShow)}
                        className="pardropdown border px-3 py-2 bg-white"
                      >
                        The style of display
                      </button>
                      <ul
                        className={`
                        ${openShow ? "flex flex-col" : "hidden"}
                        ' pardropdown_dropdown absolute border z-50 bg-white w-[150px]'
                      `}
                      >
                        {dropItems.map((item) => (
                          <li
                            key={item.id}
                            onClick={() => {
                              changeShow(item.name);
                              setOpenShow(false);
                            }}
                            className="pl-2 hover:bg-gray-100 cursor-pointer border-t py-2"
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="border p-2 outline-none"
                        placeholder="Search..."
                        onKeyUp={(e) => searchItems(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <input
                        type="number"
                        min="1"
                        className="border p-2 outline-none"
                        placeholder="Type display products Num.."
                        onChange={(e) => limitItems(e.target.value)}
                        onKeyup={(e) =>
                          limitItems(e.target.value <= 0 ? 6 : e.target.value)
                        }
                      />
                    </div>
                    <div className="item flex gap-5 items-center">
                      <select
                        onChange={(e) => {
                          sortItems(e.target.value);
                        }}
                        className="border-2 border-gray-300 p-2 w-[80px]"
                      >
                        <option selected hidden>
                          Sort
                        </option>
                        <option value="-caretedAt">Newest</option>
                        <option value="price">Price (asc)</option>
                        <option value="-price">Price (desc)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-3">
                <div className="container-wrapper">
                  <div className="items pb-10 flex flex-wrap gap-5">
                    {isPending ? (
                      <p>Loading...</p>
                    ) : products?.data?.length > 0 ? (
                      products?.data?.map((item) => (
                        <div
                          className={`
                          ${
                            show === "one"
                              ? " w-[90%]  item bg-white shadow-md rounded-md p-3 border-2 border-yellow-400"
                              : show === "two"
                              ? " w-[48%]  item bg-white shadow-md rounded-md p-3 border-2 border-yellow-400"
                              : " w-[30%]  item bg-white shadow-md rounded-md p-3 border-2 border-yellow-400"
                          }
                              ' item bg-white shadow-md rounded-md p-3 border-2 border-yellow-400'
                        `}
                        >
                          <div className="h-[35vh] shadow-md overflow-hidden relative">
                            <img
                              src={globalService.productImg + item?.coverimg}
                              alt={item?.name}
                              className="img-responsive-fill hover:scale-125 hover:rotate-6 transition delay-150 ease-in-out"
                            />
                            <div className="flex flex-col gap-2 absolute top-[10%] right-0">
                              <Link
                                to={`/products/${item?._id}?subcategoryId=${item?.subcategoryId?._id}`}
                                className="shadow-md w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                              >
                                <FontAwesomeIcon icon={faSearch} />
                              </Link>
                              <button
                                onClick={() => handleAddToCart(item?._id)}
                                className="shadow-md w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                              >
                                <FontAwesomeIcon icon={faCartPlus} />
                              </button>
                              <button
                                onClick={() => handleCreateWishlist(item?._id)}
                                className="shadow-md w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                              >
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                            </div>
                          </div>
                          <div className="py-4 flex justify-center items-center gap-2 flex-col">
                            <h2 className="text-slate-500 font-medium text-sm">
                              {item?.name}{" "}
                            </h2>
                            <span className="font-medium text-green-500 text-xl">
                              {item?.price}
                            </span>

                            <div className="text-xs font-medium text-gray-400">
                              <i className="fas fa-star text-yellow-400"></i>{" "}
                              (0) Reviews
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <NoItems />
                    )}
                  </div>
                  {/* <!-- Start Pagination --> */}

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
                      {products?.pagination?.prev && (
                        <li
                          onClick={() => changePage(products?.pagination?.prev)}
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <button className="page-link">
                            {products?.pagination?.prev}
                          </button>
                        </li>
                      )}
                      <li className="page-item">
                        <button
                          disabled
                          className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                          {products?.pagination?.currentPage}
                        </button>
                      </li>
                      {products?.pagination?.next && (
                        <li
                          onClick={() => changePage(products?.pagination?.next)}
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <button className="page-link">
                            {products?.pagination?.next}
                          </button>
                        </li>
                      )}
                      {/* <!-- Start next --> */}
                      <li
                        onClick={() =>
                          changePage(products?.pagination?.totalPages)
                        }
                      >
                        <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>

                  {/* <!-- End Pagination --> */}
                </div>
              </section>
              {/* // <!--  --> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
