import React from "react";
import AsideLeft from "../components/AsideLeft";
import AsideCenter from "../components/AsideCenter";
import useCheckToken from "../hooks/commonLogic/checkToken";
const UserProfile = () => {
  useCheckToken();
  return (
    <>
      <main className="">
        <section className="big_section" id="big_section">
          <div className="asides flex">
            <div className="aside_left pt-16 w-[19%] fixed h-full z-10 overflow-y-auto">
              <AsideLeft />
            </div>
            <div className="aside pt-16 w-[60%] ml-[30%]">
              <AsideCenter />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserProfile;
