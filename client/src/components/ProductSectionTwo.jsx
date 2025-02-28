import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import globalService from "../services/globalService";
import { format } from "timeago.js";

import LazyLoadingBtn from "./LazyLoadingBtn";
import useReviewLogic from "../hooks/commonLogic/reviewLogic";
const ProductSectionTwo = ({ isPending, product }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("desc");
  const filterTabs = (tab) => {
    if (tab === "desc") {
      setTab("desc");
    } else if (tab === "info") {
      setTab("info");
    } else {
      setTab("review");
    }
  };
  const {
    register,
    handleSubmit,
    errors,
    handleCreateOneReview,
    createRevLoading,
    handleDeleteOneReview,
    deleteRevLoading,
    handleUpdateOneReview,
    registerUpdateReview,
    handleSubmitUpdateReview,
    errorsUpdateReview,
    updateRevLoading,
    setReviewId,
    reviewId,
    currentUser,
  } = useReviewLogic();

  return (
    <>
      {/* <!-- Start section two --> */}
      <section className="pb-[40px]">
        <div className="container-wrapper">
          <div className="contentst bg-white p-8">
            <div className="tabs border-b">
              <button
                onClick={() => filterTabs("desc")}
                className="hover:border p-2.5"
              >
                Description
              </button>
              <button
                onClick={() => filterTabs("info")}
                className="hover:border p-2.5"
              >
                Information
              </button>
              <button
                onClick={() => filterTabs("review")}
                className="hover:border p-2.5"
              >
                Reviews ({product?.data?.reviews?.length})
              </button>
            </div>
            <div className="">
              {tab === "desc" && (
                <div className="pl-2 pt-4">
                  <h2 className="font-medium text-slate-800 text-2xl pb-4">
                    Product Description
                  </h2>
                  <p className="text-gray-600 text-justify">
                    {product?.data?.desc}
                  </p>
                </div>
              )}

              {tab === "info" && (
                <div className="pl-2 pt-4 pb-8">
                  <h2 className="font-medium text-slate-800 text-2xl pb-4">
                    Additional Information
                  </h2>
                  <p className="text-gray-600 text-justify">
                    {product?.data?.desc}
                  </p>
                </div>
              )}

              {tab === "review" && (
                <div className="pl-2 flex gap-8">
                  <div className="w-[50%]">
                    <h2 className="font-medium text-2xl text-slate-700 py-6">
                      ({product?.data?.reviews?.length}) review for{" "}
                      {product?.data?.name}
                    </h2>
                    <div className="reviews flex flex-col gap-6 max-h-[278px] overflow-y-auto p-4">
                      {isPending ? (
                        <p>Loading...</p>
                      ) : product?.data?.reviews.length > 0 ? (
                        product?.data?.reviews?.map((item) => (
                          <div key={item?._id} className="review border-b pb-4">
                            <div className="asides flex gap-4">
                              <div className="w-[52px] h-[52px]">
                                <img
                                  src={
                                    globalService.userImg +
                                    item?.userId?.profileImg
                                  }
                                  alt={item?.userId?.name}
                                  className="img-responsive rounded-full"
                                />
                              </div>
                              <div className="flex flex-col gap-3">
                                <h3 className="">
                                  <span className="font-medium text-sm">
                                    {item?.userId?.name}
                                  </span>
                                  -
                                  <span className="italic text-xs text-slate-400">
                                    {format(item?.createdAt)}
                                  </span>
                                </h3>
                                <div className="flex gap-1">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-yellow-400"
                                  />
                                  {item?.rate &&
                                    Array(item?.rate - 1)
                                      .fill(0)
                                      .map((_, idx) => (
                                        <FontAwesomeIcon
                                          key={idx}
                                          icon={faStar}
                                          className="text-yellow-400"
                                        />
                                      ))}

                                  {item?.rate}
                                </div>
                                <p className="text-gray-500 text-justify">
                                  {item?.comment}
                                </p>
                              </div>
                              {item?.userId?._id === currentUser?.data?._id && (
                                <div className="flex flex-col gap-1 ml-auto">
                                  <button
                                    onClick={() => {
                                      setOpen(true);
                                      setReviewId(item?._id);
                                    }}
                                    className="bg-yellow-400 rounded text-sm px-3 py-1 text-white"
                                    disabled={updateRevLoading}
                                  >
                                    Update
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteOneReview(item?._id)
                                    }
                                    className="bg-black rounded text-sm px-3 py-1 text-white"
                                    disabled={deleteRevLoading}
                                  >
                                    {deleteRevLoading ? (
                                      <LazyLoadingBtn />
                                    ) : (
                                      "Delete"
                                    )}
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No Reviews Available !</p>
                      )}
                    </div>
                  </div>
                  <div className="w-[50%] flex flex-col gap-4">
                    <h2 className="font-medium text-2xl text-slate-700 pt-7">
                      Leave a review
                    </h2>
                    <p className="text-sm text-slate-400">
                      Your email address will not be published. fields are
                      marked *
                    </p>

                    <form
                      onSubmit={handleSubmit((data) =>
                        handleCreateOneReview(product?.data?._id, data)
                      )}
                    >
                      {/* <!--  --> */}
                      <div className="flex gap-2 items-center">
                        <span className="text-[16px] text-slate-500">
                          Your Rating * :
                        </span>
                        <div className="flex gap-1">
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
                        <div className="w-[50px]">
                          <input
                            type="number"
                            min="1"
                            max="5"
                            className="border w-full"
                            {...register("rate", {
                              required: "Rate is required",
                              minLength: {
                                value: 1,
                                message: "Rate must be at least 1",
                              },
                              maxLength: {
                                value: 5,
                                message: "Rate cannot exceed 5",
                              },
                            })}
                          />
                        </div>
                        {errors.rate && (
                          <p className="text-red-500">{errors.rate.message}</p>
                        )}
                      </div>
                      <div className="">
                        <label
                          htmlFor="review"
                          className="text-[16px] text-slate-500 pb-3 flex"
                        >
                          Your Review *
                        </label>
                        <textarea
                          name=""
                          id="review"
                          className="w-full border"
                          rows="6"
                          {...register("comment", {
                            required: "Comment is required",
                          })}
                        ></textarea>
                      </div>
                      {errors.comment && (
                        <p className="text-red-500">{errors.comment.message}</p>
                      )}

                      <button
                        type="submit"
                        className="bg-yellow-400 p-2 px-3 font-medium text-sm w-fit text-slate-900"
                        disabled={createRevLoading}
                      >
                        {createRevLoading ? (
                          <LazyLoadingBtn />
                        ) : (
                          "Leave Your Reply"
                        )}
                      </button>
                      {/* <!--  --> */}
                    </form>
                  </div>
                </div>
              )}
              {/* } */}
            </div>
          </div>
          <div className="py-6 flex gap-1">
            <span className="bg-black text-white font-medium text-xs px-3 py-1">
              Tags
            </span>

            {isPending ? (
              <p>Loading...</p>
            ) : product?.data?.tags?.length > 0 ? (
              product?.data?.tags?.map((tagName, idx) => (
                <Link
                  key={idx}
                  to={`/tags/${tagName}`}
                  className="bg-white rounded text-xs px-3 py-1"
                >
                  {tagName}
                </Link>
              ))
            ) : (
              <p>No Tags Available !</p>
            )}
          </div>
        </div>
      </section>
      {/* <!-- End section two --> */}
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
    </>
  );
};

export default ProductSectionTwo;
