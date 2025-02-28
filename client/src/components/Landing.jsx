import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Landing = () => {
  const productList = [
    {
      name: "Eelectronics Category",
      image:
        "https://cdn.pixabay.com/photo/2024/04/11/16/20/business-8690142_640.jpg",
      description: "Shop now and get the offer",
    },
    {
      name: "Women Fashion",
      image:
        "https://cdn.pixabay.com/photo/2021/01/02/17/24/rear-5882411_640.jpg",
      description:
        "Step into elegance with our Chic Floral Midi Dress. Perfect for any occasion, this dress combines timeless style with modern comfort",
    },
    {
      name: "Labtop Subcategory",
      image:
        "https://media.istockphoto.com/id/1770666963/photo/portrait-of-handsome-caucasian-man-looking-at-laptop-working-online-from-his-home.webp?b=1&s=612x612&w=0&k=20&c=vIFxotHx_tlqtyIPYnZ-RfqFcmBNEnbeLBZd4H3D0DM=",
      description:
        "Experience power and portability like never before with the UltraThin Pro Laptop. Designed for professionals and students",
    },
  ];
  return (
    <>
      <section class="py-[50px]">
        <div class="container-wrapper">
          <div class="items flex gap-8">
            <div class="item w-[65%] h-[62vh]">
              {/* <!-- Start carousel --> */}

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
                {productList.map((product, idx) => (
                  <SwiperSlide key={idx}>
                    <div class="product-item relative">
                      <div class="h-[62vh]">
                        <img
                          src={product.image}
                          alt={product.name}
                          class="img-responsive-fill"
                        />
                      </div>
                      <div class="product-detail absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center flex-col gap-2">
                        <h4 class="text-3xl font-bold text-white">
                          {product.name}
                        </h4>
                        <p class="text-white text-lg">{product.description}</p>
                        <button class="bg-yellow-500 p-2">Shop Now</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* -=------------------------- */}

              {/* <!-- End carousel --> */}
            </div>
            <div class="item w-[35%] flex flex-col gap-4 h-[62vh]">
              <div class="items flex flex-col gap-4">
                <div class="item-offer relative overflow-hidden h-[30vh]">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg"
                    alt=""
                    class="item-offer-img transition duration-500 ease-in-out img-responsive-fill"
                  />
                  <div class="overlay absolute top-0 left-0 w-full h-full bg-[#00000066] flex justify-center items-center">
                    <div class="flex justify-center items-center flex-col gap-2">
                      <span class="font-medium text-lg text-white">
                        Save 20%
                      </span>
                      <h2 class="text-xl text-white font-bold">
                        Special Offer
                      </h2>
                      <button class="bg-yellow-500 p-2">Shop Now</button>
                    </div>
                  </div>
                </div>

                <div class="item-offer relative overflow-hidden h-[30vh]">
                  <img
                    src="https://media.istockphoto.com/id/2012514233/photo/portrait-of-young-businesswoman-wear-trendy-smart-casual-outfit-isolated-on-white-background.webp?b=1&s=612x612&w=0&k=20&c=4exxOL2bv7aStFzOcIOMt1zfRufq93KaGs0zEdatmPQ="
                    alt=""
                    class="item-offer-img transition duration-500 ease-in-out img-responsive-fill"
                  />
                  <div class="overlay absolute top-0 left-0 w-full h-full bg-[#00000066] flex justify-center items-center">
                    <div class="flex justify-center items-center flex-col gap-2">
                      <span class="font-medium text-lg text-white">
                        Save 20%
                      </span>
                      <h2 class="text-xl text-white font-bold">
                        Special Offer
                      </h2>
                      <button class="bg-yellow-500 p-2">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
