import React, { useState } from "react";
import { Link } from "react-router-dom";

import globalService from "../services/globalService";
import LazyLoadingBtn from "../components/LazyLoadingBtn";
import NoItems from "../components/NoItems";
import useCartLogic from "../hooks/commonLogic/cartLogic";

import useCheckToken from "../hooks/commonLogic/checkToken";
import useOrderLogic from "../hooks/commonLogic/orderLogic";

const Cart = () => {
  const [openCheckout, setOpenCheckout] = useState(false);

  const {
    productCartId,
    handleRemoveProductFromCart,
    handleClearCart,
    cart,
    isPending,
    clearCartLoading,
    removeProCartLoading,
    register,
    handleSubmit,
    errors,
    handleApplyCoupon,
    couponLoading,
    updateQuanLoading,
    quantity,
    setQuantity,
    handleUpdateQuantity,
    quantityCartId,
  } = useCartLogic();
  const {
    createOrdLoading,
    handleCreateOrder,
    handleSelectChange,
    selectedAddressError,
    addressLoading,
    address,
  } = useOrderLogic();
  useCheckToken();
  return (
    <>
      <section className="py-6">
        <div className="container-wrapper">
          <div className="uppercase text-center font-medium text-2xl mb-5">
            your bag
          </div>
          <div className="flex justify-between items-center mb-7">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="border bg-transparent text-xs p-2 font-medium uppercase shadow"
              >
                continue shopping
              </Link>
              <button
                onClick={handleClearCart}
                className="text-white text-xs bg-red-500 p-2 font-medium uppercase shadow"
                disabled={clearCartLoading}
              >
                {clearCartLoading ? <LazyLoadingBtn /> : "Clear Cart"}
              </button>
            </div>
            <div className="flex gap-5">
              <span to="" className="underline">
                Shopping Bag ({cart?.data?.items?.length})
              </span>
              <Link to="/wishlist" className="underline">
                Your Wishlist
              </Link>
            </div>
            <button
              onClick={() => setOpenCheckout(true)}
              className="border bg-black p-2 text-white font-medium uppercase shadow"
            >
              checkout now
            </button>
          </div>
          {/* <!--  --> */}
          <div className="items flex">
            <div className="item-cart w-[80%] max-h-[600px] overflow-y-auto">
              {isPending ? (
                <p>Loading...</p>
              ) : cart?.data?.items?.length > 0 ? (
                cart?.data?.items?.map((item) => (
                  <div
                    key={item?._id}
                    className="grid  grid-cols-4 p mb-5 py-6 gap-7 border-b bg-white shadow-md"
                  >
                    <div className="h-[150px] row-span-2">
                      <div className="h-full">
                        <img
                          src={
                            globalService.productImg + item?.productId?.coverimg
                          }
                          className="img-responsive-fill"
                          alt={item?.productId?.name}
                        />
                      </div>
                    </div>
                    <div className=" col-span-2 row-span-2">
                      <ul className="flex flex-col gap-4">
                        <li>
                          <span className="font-bold">Product: </span>
                          <Link
                            className="underline"
                            to={`/products/${item?.productId?._id}?subcategoryId=${item?.productId?.subcategoryId?._id}`}
                          >
                            {" "}
                            {item?.productId?.name}
                          </Link>
                        </li>
                        <li>
                          <span className="font-bold">SubCategory: </span>
                          <span className="">
                            {item?.productId?.subcategoryId?.name}
                          </span>
                        </li>
                        <li>
                          <span className="font-bold">ID: </span>
                          {item?._id}
                        </li>
                        {/* <li>
                          <div className="flex gap-4">
                            <span
                              style={{ backgroundColor: item?.color }}
                              className="bullet flex w-[30px] h-[30px] rounded-full"
                            ></span>
                            <span className="font-bold">
                              Size: {item?.size}
                            </span>
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="h-[150px] flex flex-col row-span-2 col-start-4">
                      <span className="text-3xl text-gray-400 font-medium mb-5">
                        {item?.price}
                      </span>
                      <div className="flex gap-4 items-center pb-8">
                        <div className="text-3xl text-gray-400 font-medium ">
                          {item?.quantity}
                        </div>
                        <div className="flex items-center border gap-4">
                          <button
                            onClick={() =>
                              setQuantity(quantity <= 1 ? 1 : quantity - 1)
                            }
                            className="w-[35px] h-[38px] bg-gray-200 font-medium flex justify-center items-center"
                          >
                            -
                          </button>
                          <span>{quantity}</span>
                          <button
                            onClick={() => setQuantity((prev) => prev + 1)}
                            className="w-[35px] h-[38px] bg-gray-200 font-medium flex justify-center items-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        {/*  */}
                        <button
                          onClick={() =>
                            handleUpdateQuantity(
                              item?._id,
                              quantity,
                              item?.quantity
                            )
                          }
                          className="bg-yellow-500 rounded text-white font-medium text-xs p-2 w-fit hover:bg-yellow-600"
                          disabled={updateQuanLoading}
                        >
                          {quantityCartId === item?._id && updateQuanLoading ? (
                            <LazyLoadingBtn />
                          ) : (
                            " Update Quantity"
                          )}
                        </button>
                        <button
                          onClick={() => handleRemoveProductFromCart(item?._id)}
                          className="bg-red-500 rounded text-white font-medium text-xs p-2 w-fit hover:bg-red-600"
                          disabled={
                            productCartId === item?._id && removeProCartLoading
                          }
                        >
                          {productCartId === item?._id ? (
                            <LazyLoadingBtn />
                          ) : (
                            " Remove From Cart"
                          )}
                        </button>

                        {/*  */}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <NoItems />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="item h-fit border rounded-lg p-4 pb-12 flex flex-col gap-6 bg-white">
                <h3 className="uppercase text-2xl text-center">
                  order summary
                </h3>
                <ul className="text-sm flex flex-col gap-4">
                  <li className="flex justify-between">
                    <span>Subtotal</span>
                    {cart?.data?.totalPrice}
                  </li>
                  <li className="flex justify-between">
                    <span>Tax Price</span>
                    {cart?.taxPrice}
                  </li>

                  <li className="font-bold text-lg flex flex-col justify-between">
                    <div className="text-sm">
                      <span className="pr-3">Total: </span>
                      {cart?.data?.totalPrice &&
                        cart?.taxPrice &&
                        Number(cart?.data?.totalPrice) + Number(cart?.taxPrice)}
                    </div>

                    {cart?.data?.totalPriceAfterDiscount && (
                      <div className="">
                        <span className="text-sm">
                          totalPriceAfterDiscount:
                          {cart?.data?.totalPriceAfterDiscount}
                        </span>
                      </div>
                    )}
                  </li>
                </ul>

                <button
                  onClick={() => setOpenCheckout(true)}
                  className="border bg-black p-2 text-white font-medium uppercase shadow"
                >
                  checkout now
                </button>
              </div>
              <form
                onSubmit={handleSubmit(handleApplyCoupon)}
                className="border rounded-lg p-4 flex flex-col gap-6 bg-white"
              >
                <input
                  type="text"
                  placeholder="Add coupon"
                  className="border rounded p-2"
                  {...register("name", { required: "Coupon is required" })}
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white rounded px-3 py-1"
                  disabled={couponLoading}
                >
                  {couponLoading ? <LazyLoadingBtn /> : "Apply Coupon"}
                </button>
                {errors.coupon && (
                  <p className="text-red-500">{errors.coupon.message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- modal --> */}

      <div
        className={`
      ${openCheckout ? "flex" : "hidden"}
     parmodal top-0 left-0 w-full h-full justify-center pt-[82px] bg-[#000000cc] z-50 fixed
  `}
      >
        <div className="parmodal_modal bg-white w-[450px] h-[250px] pr-4 pl-10 pt-2 pb-8 rounded">
          <div className="flex justify-end">
            <button
              onClick={() => setOpenCheckout(false)}
              className="p-1 text-white bg-red-500 text-xs"
            >
              close
            </button>
          </div>
          <h2 className="text-2xl text-gray-300 font-bold pb-6">
            Choose Address For Checkout
          </h2>
          {/* <form
            onSubmit={(e) => handleCreateOrder(e, selectedAddress)}
            className="flex flex-col gap-6 pr-6"
          >
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Choose Your Address:
              </label>
              <select
                onChange={(e) => setSelectedAddress(e.target.value)}
                className="border rounded text-sm text-gray-500 p-2"
              >
                <option hidden>Choose Address</option>
                {addressLoading ? (
                  <option disabled>Loading...</option>
                ) : address?.data?.length > 0 ? (
                  address?.data?.map((item) => (
                    <option key={item._id} value={{ item }}>
                      {item?.street} / {item?.city} / {item?.state} /{" "}
                      {item?.postalCode}
                    </option>
                  ))
                ) : (
                  <option disabled>
                    No Address Found, please add adress at your profile
                  </option>
                )}
              </select>
              <p className="text-red-500"> {selectedAddressError}</p>
            </div>

            {address?.data?.length > 0 && (
              <button
                type="submit"
                className="p-1 bg-yellow-500 text-white text-sm"
                disabled={createOrdLoading}
              >
                {createOrdLoading ? <LazyLoadingBtn /> : "Checkout"}
              </button>
            )}
          </form> */}
          <form
            onSubmit={handleCreateOrder}
            className="flex flex-col gap-6 pr-6"
          >
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Choose Your Address:
              </label>
              <select
                onChange={handleSelectChange}
                className="border rounded text-sm text-gray-500 p-2"
              >
                <option value="" hidden>
                  Choose Address
                </option>
                {addressLoading ? (
                  <option disabled>Loading...</option>
                ) : address?.data?.length > 0 ? (
                  address?.data?.map((item) => (
                    <option key={item._id} value={JSON.stringify(item)}>
                      {" "}
                      {/* ✅ Store as JSON string */}
                      {item?.street} / {item?.city} / {item?.state} /{" "}
                      {item?.postalCode}
                    </option>
                  ))
                ) : (
                  <option disabled>
                    No Address Found, please add an address in your profile
                  </option>
                )}
              </select>
              {selectedAddressError && (
                <p className="text-red-500">{selectedAddressError}</p>
              )}
            </div>

            {address?.data?.length > 0 && (
              <button
                type="submit"
                className="p-1 bg-yellow-500 text-white text-sm"
                disabled={createOrdLoading}
              >
                {createOrdLoading ? <LazyLoadingBtn /> : "Checkout"}
              </button>
            )}
          </form>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default Cart;
