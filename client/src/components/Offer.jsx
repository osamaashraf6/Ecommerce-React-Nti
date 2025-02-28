import React from "react";

const Offer = () => {
  return (
    <>
      <section className="py-16">
        <div className="container-wrapper">
          <div className="items flex gap-8">
            <div className="item-offer relative overflow-hidden w-[50%] h-[40vh]">
              <img
                src="https://cdn.pixabay.com/photo/2023/08/11/10/15/watch-8183268_640.jpg"
                alt=""
                className="item-offer-img transition duration-500 ease-in-out img-responsive-fill"
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-[#00000066] flex justify-center items-center">
                <div className="flex justify-center items-center flex-col gap-2">
                  <span className="font-medium text-lg text-white">Save 20%</span>
                  <h2 className="text-xl text-white font-bold">Special Offer</h2>
                  <button className="bg-yellow-500 p-2">Shop Now</button>
                </div>
              </div>
            </div>

            <div className="item-offer relative overflow-hidden w-[50%] h-[40vh]">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/02/02/46/glasses-2110274_640.jpg"
                alt=""
                className="item-offer-img transition duration-500 ease-in-out img-responsive-fill"
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-[#00000066] flex justify-center items-center">
                <div className="flex justify-center items-center flex-col gap-2">
                  <span className="font-medium text-lg text-white">Save 20%</span>
                  <h2 className="text-xl text-white font-bold">Special Offer</h2>
                  <button className="bg-yellow-500 p-2">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
