import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faPinterest,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import LazyLoadingBtn from "../components/LazyLoadingBtn";
import useWishlistLogic from "../hooks/commonLogic/wishlistLogic";
import useCheckToken from "../hooks/commonLogic/checkToken";
const Wishlist = () => {
  const {
    isPending,
    wishlist,
    handleDeleteWishlist,
    productIdLoad,
    deleteWishLoading,
  } = useWishlistLogic();
  useCheckToken();
  return (
    <>
      <section className=" py-[60px]" id="">
        <div className="container-wrapper">
          <div className="text-left pl-[132px] pb-[20px]">
            <h2>
              My Wishlist <FontAwesomeIcon icon={faPencil} />
            </h2>
          </div>
          <div className="items grid place-items-center">
            <table className="w-[80%] bg-white table-fixed">
              <thead className="">
                <tr className="border-y border-gray-200">
                  <th className="py-5">Product Id</th>
                  <th className="py-5">Product Name</th>
                  <th className="py-5">Price</th>
                  <th className="py-5"> Quantity</th>
                  <th className="py-5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isPending ? (
                  <tr>
                    <td colSpan="4" className="text-center py-5">
                      Wishlists Loading...
                    </td>
                  </tr>
                ) : wishlist?.data.length > 0 ? (
                  wishlist?.data?.map((item) => (
                    // !
                    <tr key={item?._id} className="border-b border-gray-200">
                      <td className="capitalize text-center"># {item?._id}</td>
                      <td className="text-center">
                        <Link
                          className="underline"
                          to={`/products/${item?._id}?subcategoryId=${item?.subcategoryId?._id}`}
                        >
                          {item?.name}
                        </Link>
                      </td>
                      <td className="text-center">{item?.price}</td>
                      <td className="text-center">{item?.quantity}</td>
                      <td className="flex flex-col gap-2 justify-center items-center py-5">
                        <button
                          onClick={() => handleDeleteWishlist(item?._id)}
                          className="border border-red-500 p-2 px-3 text-xs rounded text-red-500"
                          disabled={
                            item?._id === productIdLoad && deleteWishLoading
                          }
                        >
                          {item?._id === productIdLoad && deleteWishLoading ? (
                            <LazyLoadingBtn />
                          ) : (
                            " Delete"
                          )}
                        </button>
                      </td>
                    </tr>
                    // !
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-5">
                      No Wishlists available !
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex gap-4 pt-10 justify-center items-center">
            <span className="font-medium text-lg text-yellow-500 shadow-md p-1">
              Share on:
            </span>
            <div className="flex gap-4 items-center">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faX} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faPinterest} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
