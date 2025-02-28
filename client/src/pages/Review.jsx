import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faPinterest,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import LazyLoadingBtn from "../components/LazyLoadingBtn";
import useCheckToken from "../hooks/commonLogic/checkToken";
import useReviewLogic from "../hooks/commonLogic/reviewLogic";
const Review = () => {
  const [open, setOpen] = useState(false);
  const {
    handleDeleteOneReview,
    deleteRevLoading,
    handleUpdateOneReview,
    registerUpdateReview,
    handleSubmitUpdateReview,
    errorsUpdateReview,
    updateRevLoading,
    reviewId,
    setReviewId,
    isPending,
    review,
    changePage,
  } = useReviewLogic();
  useCheckToken();

  return (
    <>
      <section className=" py-[60px]" id="">
        <div className="container-wrapper">
          <div className="text-left pl-[132px] pb-[20px]">
            <h2>
              My Reviews <FontAwesomeIcon icon={faPencil} />
            </h2>
          </div>
          <div className="items grid place-items-center">
            <table className="w-[80%] bg-white table-fixed">
              <thead className="">
                <tr className="border-y border-gray-200">
                  <th className="py-5">Review Id</th>
                  <th className="py-5">Reviewer Name</th>
                  <th className="py-5">Product Name</th>
                  <th className="py-5"> Review</th>
                  <th className="py-5"> Rate</th>
                  <th className="py-5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isPending ? (
                  <tr>
                    <td colSpan="4" className="text-center py-5">
                      Reviews Loading...
                    </td>
                  </tr>
                ) : review?.data?.length > 0 ? (
                  review?.data?.map((item) => (
                    // !
                    <tr key={item?._id} className="border-b border-gray-200">
                      <td className="capitalize text-center"># {item?._id}</td>
                      <td className="text-center">{item?.userId?.name}</td>
                      <td className="text-center">
                        <Link
                          className="underline"
                          to={`/products/${item?.productId?._id}?subcategoryId=${item?.productId?.subcategoryId?._id}`}
                        >
                          {item?.productId?.name}
                        </Link>
                      </td>
                      <td className="text-center">{item?.comment}</td>
                      <td className="text-center">{item?.rate}</td>
                      {/* loop on star */}
                      <td className="flex flex-col gap-2 justify-center items-center py-5">
                        <button
                          onClick={() => {
                            setOpen(true);
                            setReviewId(item?._id);
                          }}
                          className="border border-emerald-500 p-2 text-xs rounded text-emerald-500"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteOneReview(item?._id)}
                          className="border border-red-500 p-2 px-3 text-xs rounded text-red-500"
                          disabled={reviewId === item?._id && deleteRevLoading}
                        >
                          {reviewId === item?._id && deleteRevLoading ? (
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
                      No reviews available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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
                {review?.pagination?.prev && (
                  <li
                    onClick={() => changePage(review?.pagination?.prev)}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <button className="page-link">
                      {review?.pagination?.prev}
                    </button>
                  </li>
                )}
                <li className="page-item">
                  <button
                    disabled
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    {review?.pagination?.currentPage}
                  </button>
                </li>
                {review?.pagination?.next && (
                  <li
                    onClick={() => changePage(review?.pagination?.next)}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <button className="page-link">
                      {review?.pagination?.next}
                    </button>
                  </li>
                )}
                {/* <!-- Start next --> */}
                <li onClick={() => changePage(review?.pagination?.totalPages)}>
                  <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                  </button>
                </li>
              </ul>
            </nav>

            {/* <!-- End Pagination --> */}
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
      {/* <!-- Modal review update --> */}
      <div
        className={`
        ${open ? "flex" : "hidden"}
         parmodal top-0 left-0 w-full h-full justify-center pt-[82px] bg-[#000000cc] z-50 fixed
      `}
      >
        <div className="parmodal_modal  bg-white w-[350px] h-[430px] pr-4 pl-10 pt-2 pb-8">
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-white bg-red-500 text-xs"
            >
              close
            </button>
          </div>
          <h2 className="text-2xl text-gray-300 font-bold pb-6">
            Upade Your Product Review
          </h2>
          <form
            onSubmit={handleSubmitUpdateReview((data) =>
              handleUpdateOneReview(reviewId, data)
            )}
            className="flex flex-col gap-4 pr-6"
          >
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Rate
              </label>
              <input
                type="number"
                className="text-sm w-full border-0 border-b"
                min="0"
                max="5"
                {...registerUpdateReview("rate")}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Comment
              </label>
              <input
                type="text"
                className="text-sm w-full border-0 border-b"
                {...registerUpdateReview("comment")}
              />
            </div>

            <button
              className="p-1 bg-yellow-500 text-white text-sm"
              disabled={updateRevLoading}
            >
              {updateRevLoading ? <LazyLoadingBtn /> : "Update"}
            </button>
          </form>
        </div>
      </div>

      {/* end modal */}
    </>
  );
};

export default Review;
