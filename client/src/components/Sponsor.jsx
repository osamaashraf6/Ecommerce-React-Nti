import React from "react";

const Sponsor = () => {
  return (
    <>
      <section className="py-28 bg-[#272a31]">
        <div className="container-wrapper">
          <div className="flex flex-col items-center ">
            <h2 className="font-medium text-[#a29b9b] text-2xl pb-2">
              Partners
            </h2>
            <span className="flex h-[3px] w-[57px] bg-[#ec5242] rounded-md"></span>
          </div>
          <div className="items flex justify-between">
            <div>
              <img src="/company-1.png" alt="sponsor-1" />
            </div>
            <div>
              <img src="/company-2.png" alt="sponsor-1" />
            </div>
            <div>
              <img src="/company-3.png" alt="sponsor-1" />
            </div>
            <div>
              <img src="/company-4.png" alt="sponsor-1" />
            </div>
            <div>
              <img src="/company-5.png" alt="sponsor-1" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsor;
