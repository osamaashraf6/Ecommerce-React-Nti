import React from "react";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../hooks/productHook";
import globalService from "../services/globalService";
import NoItems from "../features/loading/NoItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import useAddToWishlist from "../hooks/commonLogic/addToWishlist";

const RecentProducts = () => {
  const { isPending: recentLoading, data: recents } = useGetAllProductQuery({
    limit: 8,
    sort: "-createdAt",
  });
  const { handleCreateWishlist, handleAddToCart } = useAddToWishlist();
  return (
    <>
      <section className="pb-[40px]">
        <div className="container-wrapper">
          <div className="flex items-center gap-5 pb-10">
            <h2 className="text-slate-700 font-bold text-4xl uppercase w-[23%]">
              Recenets
            </h2>
            <hr className="border-dashed border-slate-400 w-full" />
          </div>
          <div className="items flex flex-wrap gap-5">
            {recentLoading ? (
              <p>loading...</p>
            ) : recents?.data?.length > 0 ? (
              recents?.data?.map((item) => (
                <div
                  key={item?._id}
                  className="bestseller-product w-[23%] rounded-md bg-white"
                >
                  <div className="h-[40vh] relative overflow-hidden">
                    <img
                      src={globalService.productImg + item?.coverimg}
                      alt={item?.name}
                      className="img-responsive-fill bestseller-product-img transition duration-500 ease-in-out"
                    />
                    <div className="related-product-icons opacity-5 invisible transition duration-500 ease-in-out flex gap-2 absolute bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <Link
                        to={`/products/${item?._id}?subcategoryId=${item?.subcategoryId?._id}`}
                        className="cursor-pointer w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </Link>
                      <span
                        onClick={() => handleAddToCart(item?._id)}
                        className="cursor-pointer w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                      </span>
                      <span
                        onClick={() => handleCreateWishlist(item?._id)}
                        className="cursor-pointer w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </span>
                    </div>
                    {/* <!-- @if(product.isNew){ --> */}
                    <div className="bg-red-600 text-white font-medium text-sm w-[150px] rotate-[-39deg] h-[30px] flex justify-center items-center absolute top-[15px] left-[-33px] shadow-md">
                      robin
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex gap-3 flex-col justify-between items-center">
                      <h3 className="text-xl font-medium text-slate-600">
                        {item?.name}
                      </h3>
                      <span className="font-medium text-green-500 text-lg">
                        {item?.price}
                      </span>
                      <div className="flex gap-2 items-center">
                        <i className="far fa-star text-yellow-400 text-xs"></i>{" "}
                        (0) Reviews
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <NoItems />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProducts;
