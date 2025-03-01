import React from "react";
import useAddToWishlist from "../hooks/commonLogic/addToWishlist";
import LazyLoadingBtn from "./LazyLoadingBtn";
import globalService from "../services/globalService";

// Import Swiper styles
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductSectionOne = ({ isPending, product }) => {
  const {
    handleCreateWishlist,
    handleAddToCart,
    createWishLoading,
    createCartLoading,
  } = useAddToWishlist();
  return (
    <>
      {/* <!-- Start section one --> */}
      <section className="pb-[40px]">
        <div className="container-wrapper">
          <div className="items flex gap-9 h-[593px]">
            <div className="w-[40%] h-full overflow-hidden">
              {/* Start carousel  */}
              {isPending ? (
                <p>Loading...</p>
              ) : product?.data?.imgs?.length > 0 ? (
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  {product.data.imgs.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={globalService.productImg + img}
                        alt={`img-${idx}`}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p>No Images Available</p>
              )}
              {/* End carousel */}
            </div>
            <div className="w-[60%] border bg-white p-8 flex flex-col gap-5">
              <h2 className="font-bold text-3xl text-slate-700 pt-2">
                {product?.data?.name}
              </h2>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1">
                  <i className="far fa-star text-yellow-400"></i>
                  <i className="far fa-star text-yellow-400"></i>
                  <i className="far fa-star text-yellow-400"></i>
                  <i className="far fa-star text-yellow-400"></i>
                  <i className="far fa-star text-yellow-400"></i>
                </div>
                <div className="text-slate-500">
                  (
                  {product?.data?.reviews?.length
                    ? product?.data?.reviews?.length
                    : 0}
                  ) Reviews
                </div>
              </div>
              <span className="font-bold text-3xl text-slate-700">
                {product?.data?.price}
              </span>
              <p className="text-slate-400">{product?.data?.desc}</p>
              <div className="flex gap-4 items-center">
                <span className="font-medium text-lg text-slate-700">
                  Sizes:
                </span>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-2">
                    <input type="radio" name="size" />
                    <label className="text-slate-500">XS</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="size" />
                    <label className="text-slate-500">S</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="size" />
                    <label className="text-slate-500">M</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="size" />
                    <label className="text-slate-500">L</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="size" />
                    <label className="text-slate-500">XL</label>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="font-medium text-lg text-slate-700">
                  {/* Colors: */}
                </span>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-2">
                    <input type="radio" name="color" />
                    <label className="text-slate-500">Red</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="color" />
                    <label className="text-slate-500">Orange</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="color" />
                    <label className="text-slate-500">Blue</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="color" />
                    <label className="text-slate-500">Black</label>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="color" />
                    <label className="text-slate-500">White</label>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center pb-4">
                <div className="flex items-center border gap-4">
                  <button className="w-[35px] h-[38px] bg-gray-200 font-medium flex justify-center items-center">
                    -
                  </button>
                  <span>1</span>
                  <button className="w-[35px] h-[38px] bg-gray-200 font-medium flex justify-center items-center">
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleAddToCart(product?.data?._id)}
                  className="bg-yellow-400 text-white p-2.5 text-sm"
                  disabled={createCartLoading}
                >
                  {createCartLoading ? <LazyLoadingBtn /> : "Add To Cart"}
                </button>
                <button
                  onClick={() => handleCreateWishlist(product?.data?._id)}
                  className="bg-yellow-400 text-white p-2.5 text-sm"
                  disabled={createWishLoading}
                >
                  {createWishLoading ? <LazyLoadingBtn /> : "Add To Wishlist"}
                </button>
              </div>
              <div className="flex gap-4 items-center">
                <span className="font-medium text-lg text-slate-700">
                  {/* Share on: */}
                </span>
                <div className="flex gap-3 items-center">
                  <i className="fab fa-facebook-f text-sm"></i>
                  <i className="fab fa-twitter text-sm"></i>
                  <i className="fab fa-linkedin-in text-sm"></i>
                  <i className="fab fa-pinterest-p text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End section one --> */}
    </>
  );
};

export default ProductSectionOne;
