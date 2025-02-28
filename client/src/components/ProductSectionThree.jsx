import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";
import { useGetAllProductQuery } from "../hooks/productHook";
import globalService from "../services/globalService";
import useAddToWishlist from "../hooks/commonLogic/addToWishlist";

const ProductSectionThree = () => {
  const [searchParams] = useSearchParams();
  const subcategoryId = searchParams.get("subcategoryId");
  const { isPending, data: related } = useGetAllProductQuery({
    limit: 5,
    subcategoryId,
  });
  const { handleCreateWishlist, handleAddToCart } = useAddToWishlist();

  return (
    <>
      {/* <!-- Start section Three --> */}
      <section className="pb-[40px]">
        <div className="container-wrapper">
          <div className="flex items-center gap-1 pb-9">
            <h2 className="font-bold text-2xl text-slate-700 w-[23%]">
              RELATED PRODUCTS
            </h2>
            <hr className="w-full bg-gray-400 border-dashed" />
          </div>
          <div className="items flex gap-5">
            {isPending ? (
              <p>Loading...</p>
            ) : related?.data?.length > 0 ? (
              related?.data?.map((item) => (
                <div
                  key={item?._id}
                  className="related-product-icons-parent w-[25%] rounded-md bg-white"
                >
                  <div className="h-[40vh] relative">
                    <img
                      src={globalService.productImg + item?.coverimg}
                      alt={item?.name}
                      className="img-responsive-fill"
                    />
                    <div className="related-product-icons opacity-5 invisible transition duration-500 ease flex gap-2 absolute bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <div>
                        <Link
                          to={`/products/${item?._id}?subcategoryId=${item?.subcategoryId?._id}`}
                          className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                        >
                          <FontAwesomeIcon
                            icon={faSearch}
                            className="text-yellow-400"
                          />
                        </Link>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item?._id)}
                        className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          className="text-yellow-400"
                        />
                      </button>
                      <button
                        onClick={() => handleCreateWishlist(item?._id)}
                        className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-yellow-400"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-slate-400">
                        {item?.name}
                      </h3>
                      <span className="font-medium text-slate-800 text-lg">
                        {item?.price}
                      </span>
                    </div>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <FontAwesomeIcon
                            key={idx}
                            icon={faStar}
                            className="text-yellow-400"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No Related Products Available !</p>
            )}
          </div>
        </div>
      </section>
      {/* <!-- End section Three --> */}
    </>
  );
};

export default ProductSectionThree;
