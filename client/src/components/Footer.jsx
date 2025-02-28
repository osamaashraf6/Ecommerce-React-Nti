import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Start footer --> */}
      <footer className="h-[86vh] bg-[#181a1c]">
        <div className="container-header">
          <div className="bg-[#191b1e] bg-opacity-80">
            <div className="contents">
              <div className="dws border-b border-gray-500">
                <div className="container">
                  <div className="flex justify-between py-10 items-center">
                    <div className="">
                      <h2 className="text-white font-bold mb-3">
                        Sign Up Our Newsletter
                      </h2>
                      <p className="text-white text-xs">
                        We Offer An Informative Monthly Technology Newsletter -
                        Check It Out.
                      </p>
                    </div>
                    <div className="">
                      <div className="flex">
                        <input
                          type="email"
                          className="w-[355px] rounded-l border-0 outline-0 pl-4 p-1 h-9 placeholder:text-xs text-sm"
                          placeholder="Enter Your Email"
                        />
                        <button className="w-[140px] h-9 bg-yellow-500 text-white text-xs hover:bg-orange-400 transition ease-in-out delay-150">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sd border-b border-gray-500 h-[55vh] flex justify-center items-center">
                <div className="container">
                  <div className="flex gap-10">
                    <div className="flex flex-col gap-5 w-[40%]">
                      <a
                        href="/"
                        className="text-xl font-bold text-white flex gap-2"
                      >
                        ECE Faculty
                      </a>
                      <p className="text-gray-300 text-xs leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco consectetur laboris.
                      </p>
                      <div className="">
                        <img src="/assets/payment-method.png" alt="" />
                      </div>
                    </div>
                    <div className="w-[20%]">
                      <h3 className="text-white text-sm font-bold pb-2 border-b border-gray-500 mb-4">
                        Our Services
                      </h3>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            Startup Solutions
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            Networking Services
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            SEO Optimization
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            Apps Development
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-[20%]">
                      <h3 className="text-white text-sm font-bold pb-2 border-b border-gray-500 mb-4">
                        Useful as
                      </h3>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            {" "}
                            About Us{" "}
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            {" "}
                            Case Study{" "}
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            {" "}
                            Contact Us{" "}
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-gray-300 text-xs">
                            Terms & Conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-[20%]">
                      <h3 className="text-white text-sm font-bold pb-2 border-b border-gray-500 mb-4">
                        Contact Info
                      </h3>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <p className="flex gap-3 text-white text-xs mb-2">
                            Phone
                          </p>
                          <a href="" className="ml-7 text-gray-300 text-xs">
                            080 707 555-321
                          </a>
                        </li>
                        <li>
                          <p className="flex gap-3 text-white text-xs mb-2">
                            Email
                          </p>
                          <a href="" className="ml-7 text-gray-300 text-xs">
                            demoexample.com
                          </a>
                        </li>
                        <li>
                          <p className="flex gap-3 text-white text-xs mb-2">
                            Address
                          </p>
                          <a href="" className="ml-7 text-gray-300 text-xs">
                            526 Melrose Street, Water Mill, 11976 New York
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dsd flex items-center h-[76px]">
                <div className="container">
                  <div className="flex justify-between">
                    <div className="text-gray-300 text-xs">
                      &copy; 2024 ECE Faculty - All Rights Reserved.
                    </div>
                    <div className="text-gray-300 text-xs">
                      <a href="">Terms & Conditions</a> |
                      <a href=""> Privacy Policy</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End footer --> */}
    </>
  );
};

export default Footer;
