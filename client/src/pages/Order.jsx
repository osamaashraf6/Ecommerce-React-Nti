import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faPinterest,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import globalService from "../services/globalService";
import { format } from "timeago.js";
import NoItems from "../components/NoItems";
import { Link } from "react-router-dom";
import useCheckToken from "../hooks/commonLogic/checkToken";
import useOrderLogic from "../hooks/commonLogic/orderLogic";
const Order = () => {
  const { isPending, order } = useOrderLogic();
  useCheckToken();
  return (
    <>
      <section className="wishlist pb-[40px]" id="wishlist">
        <div className="container-wrapper">
          <div className="text-left pl-[132px] pb-[20px]">
            <h2>
              My Order <FontAwesomeIcon icon={faPencil} />
            </h2>
          </div>
          <div className="items grid place-items-center">
            <table className="w-[80%] bg-white rounded-lg">
              <thead className="">
                <tr className="border-y border-gray-200">
                  <th className="py-5">Order Id</th>
                  <th className="py-5">Items</th>
                  <th className="py-5">Dlivered</th>
                  <th className="py-5">Paid</th>
                  <th className="py-5">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {isPending ? (
                  <tr>
                    <td>Order Laoding....</td>
                  </tr>
                ) : order?.data?.length > 0 ? (
                  order?.data?.map((item) => (
                    <tr
                      key={item?._id}
                      className="shadow-lg border-y-2 border-yellow-500"
                    >
                      <td className="capitalize text-center">{item?._id}</td>

                      <td className="order-scroll flex flex-col gap-2 max-h-[200px] overflow-y-auto p-3">
                        {item?.items?.map((product) => (
                          <div key={product?._id} className="flex gap-4">
                            <div className="w-[80px] h-[80px]">
                              <img
                                src={
                                  globalService.productImg +
                                  product.productId.coverimg
                                }
                                alt={product.productId.name}
                                className="img-responsive-fill"
                              />
                            </div>
                            <div className="">
                              <h2 className="font-medium text-slate-600">
                                Name:{" "}
                                <Link
                                  className="underline"
                                  to={`/products/${product?.productId?._id}?subcategoryId=${product?.productId?.subcategoryId?._id} `}
                                >
                                  {product?.productId?.name}
                                </Link>
                              </h2>
                              <span className="font-medium text-slate-600">
                                Quantity: {product?.quantity}
                              </span>
                            </div>
                          </div>
                        ))}
                      </td>

                      <td className="text-center">
                        {item?.isDelivered ? (
                          <span>{format(item?.deliveredAt)}</span>
                        ) : (
                          <span>Pending</span>
                        )}
                      </td>

                      <td className="text-center">
                        {item?.isPaid ? (
                          <span>{format(item?.paidAt)}</span>
                        ) : (
                          <span>Pending</span>
                        )}
                      </td>

                      <td className="text-center">
                        <span> ${item?.totalPrice}</span>
                      </td>
                    </tr>
                    // <div className="py-4"></div>
                  ))
                ) : (
                  <NoItems />
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

export default Order;
