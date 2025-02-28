import React from "react";

const Announcement = () => {
  return (
    <>
      <div className="bg-[#077e82] grid place-items-center">
        <div className="  py-1 text-white text-center  marquee-content flex gap-4 items-center animate-marquee">
          Super Deal! Free Shipping on Orders Over $50
        </div>
      </div>
    </>
  );
};

export default Announcement;
