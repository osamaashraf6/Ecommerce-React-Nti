import React from "react";

const Services = () => {
  return (
    <>
      <section className="py-12">
        <div className="container-wrapper">
          <div className="items flex gap-8">
            <div className="item w-[23%] flex gap-2 bg-white p-10">
              <span className="text-yellow-500 text-3xl">
                <i className="fas fa-check"></i>
              </span>
              <span className="text-2xl text-slate-600 font-medium">
                Quality Product
              </span>
            </div>
            <div className="item w-[23%] flex gap-2 bg-white p-10">
              <span className="text-yellow-500 text-3xl">
                <i className="fas fa-truck"></i>
              </span>
              <span className="text-2xl text-slate-600 font-medium">
                Quality Product
              </span>
            </div>
            <div className="item w-[23%] flex gap-2 bg-white p-10">
              <span className="text-yellow-500 text-3xl">
                <i className="fas fa-exchange-alt"></i>
              </span>
              <span className="text-2xl text-slate-600 font-medium">
                Quality Product
              </span>
            </div>
            <div className="item w-[23%] flex gap-2 bg-white p-10">
              <span className="text-yellow-500 text-3xl">
                <i className="fas fa-phone-volume"></i>
              </span>
              <span className="text-2xl text-slate-600 font-medium">
                Quality Product
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
