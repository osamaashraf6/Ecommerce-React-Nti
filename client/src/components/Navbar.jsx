import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userslice/apiCalls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import {
  faBars,
  faCartPlus,
  faChevronDown,
  faComments,
  faEnvelope,
  faHeart,
  faPhone,
  faReceipt,
  faSearch,
  faUser,
  faUserCircle,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPinterest,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import useCartLogic from "../hooks/commonLogic/cartLogic";
import useWishlistLogic from "../hooks/commonLogic/wishlistLogic";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    logout(dispatch);
    toast.success("Signed Out Successfully");
  };
  const { cart, isPending } = useCartLogic();
  const {
    isPending: wishlistLoading,
    wishlist,
    currentUser,
  } = useWishlistLogic();

  return (
    <>
      <div className="bg-white">
        <div className="flex items-center h-[50px] border border-gray-300">
          <div className="container-header h-full">
            <div className="parnav flex justify-between items-center h-full">
              <div className="border-r h-full border-gray-300 pr-2 flex justify-end items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                hello.colorlibAgmail.com
              </div>
              <div className="border-r h-full border-gray-300 w-[74.5%] px-2 flex justify-between items-center">
                <div className="">
                  <FontAwesomeIcon icon={faPhone} className="text-sm" /> +65
                  11.188.888
                </div>
                <div className="flex gap-3">
                  <FontAwesomeIcon icon={faFacebook} className="text-sm" />
                  <FontAwesomeIcon icon={faX} className="text-sm" />
                  <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
                  <FontAwesomeIcon icon={faPinterest} className="text-sm" />
                </div>
              </div>
              <div className="border-r h-full border-gray-300 w-[7.5%] pr-2 flex justify-center">
                <select name="" id="">
                  <option value="">AR</option>
                  <option value="">EN</option>
                </select>
              </div>
              <div className="w-[18%] pl-2 flex gap-4">
                {currentUser ? (
                  <>
                    <Link to="/userprofile">{currentUser?.data?.name}</Link>
                    <button onClick={handleLogOut}>
                      <FontAwesomeIcon icon={faUser} className="text-sm" />
                      logout
                    </button>
                  </>
                ) : (
                  <Link to="/login">
                    <FontAwesomeIcon icon={faUser} className="text-sm" />
                    login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <!--  --> */}
        <div className="py-10">
          <div className="container-header">
            <div className="parnav flex justify-between items-center">
              <div className="">
                <Link to="" className="text-4xl font-bold">
                  Fashi<span className="text-yellow-400 font-bold">.</span>
                </Link>
              </div>
              <div className="h-[50px] flex w-[56%]">
                <input
                  type="text"
                  placeholder="What do you need?"
                  className="pl-3 border h-full outline-0 w-full"
                />
                <button className="bg-yellow-500 w-[53px] flex justify-center items-center">
                  <FontAwesomeIcon icon={faSearch} className="text-sm" />
                </button>
              </div>
              {currentUser && currentUser?.data?.role === "user" && (
                <div className="flex gap-5 items-center">
                  <div className="relative">
                    <button
                      onClick={() => setOpen(!open)}
                      className="pardropdown relative"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <span className="absolute top-[3px] left-[12px] flex justify-center items-center w-[16px] h-[16px] text-xs rounded-full text-yellow-500">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </button>

                    <ul
                      className={`
                    ${
                      open ? "flex" : "hidden"
                    }  pardropdown_dropdown absolute top-[34px] left-[-5px] bg-white pt-3 shadow-md rounded w-[200px] border flex-col 
                  `}
                    >
                      <li>
                        <Link
                          onClick={() => setOpen(false)}
                          to="/userprofile"
                          className="hover:bg-slate-200 pt-3 border-b flex pb-2 px-3 w-full text-slate-500 gap-2 items-center text-sm font-medium"
                        >
                          <FontAwesomeIcon icon={faUserCircle} /> Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setOpen(false)}
                          to="/review"
                          className="hover:bg-slate-200 pt-3 border-b flex pb-2 px-3 w-full text-slate-500 gap-2 items-center text-sm font-medium"
                        >
                          <FontAwesomeIcon icon={faComments} /> Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setOpen(false)}
                          to="/order"
                          className="hover:bg-slate-200 pt-3 pb-2 flex px-3 w-full text-slate-500 gap-2 items-center text-sm font-medium"
                        >
                          <FontAwesomeIcon icon={faReceipt} /> Orders
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <Link to="/wishlist">
                      <FontAwesomeIcon icon={faHeart} />
                      <span className="absolute top-[-3px] left-3 flex justify-center items-center w-[16px] h-[16px] text-xs rounded-full bg-yellow-500 text-white">
                        {wishlistLoading ? " " : wishlist?.length}
                      </span>
                    </Link>
                  </div>
                  <div className="relative">
                    <Link to="/cart">
                      <FontAwesomeIcon icon={faCartPlus} />
                      <span className="absolute top-[-3px] left-3 flex justify-center items-center w-[16px] h-[16px] text-xs rounded-full bg-yellow-500 text-white">
                        {isPending ? " " : cart?.length}
                      </span>
                    </Link>
                  </div>
                  <span className="font-bold">${cart?.data?.totalPrice}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <!-- Start Header --> */}
        <header
          className="header flex items-center h-[45px] bg-[#252525] mb-[40px]"
          id="header"
        >
          <div className="container-header">
            <div className="parnav text-white">
              <nav className="navigation">
                <ul className="flex justify-between items-center">
                  <li className="bg-[#3b3b3b] h-[45px] border-l border-[#3b3b3b] w-full">
                    <Link
                      className="h-full w-full flex items-center justify-center gap-5"
                      to=""
                    >
                      <FontAwesomeIcon icon={faBars} />
                      All Categories
                      <FontAwesomeIcon icon={faChevronDown} />
                    </Link>
                  </li>

                  <li className="bg-yellow-500 h-[45px] border-l border-[#3b3b3b] w-full">
                    <Link
                      className="h-full w-full flex items-center justify-center"
                      to=""
                    >
                      Home
                    </Link>
                  </li>
                  <li className="hover:bg-[#3b3b3b] transition delay-150 ease-in-out h-[45px] border-l border-[#3b3b3b] w-full">
                    <Link
                      className="h-full w-full flex items-center justify-center"
                      to=""
                    >
                      About
                    </Link>
                  </li>
                  <li className="hover:bg-[#3b3b3b] transition delay-150 ease-in-out h-[45px] border-l border-[#3b3b3b] w-full">
                    <Link
                      className="h-full w-full flex items-center justify-center"
                      to=""
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-[#3b3b3b] transition delay-150 ease-in-out h-[45px] border-x border-[#3b3b3b] w-full">
                    <Link
                      className="h-full w-full flex items-center justify-center"
                      to=""
                    >
                      Pages
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
      {/* <!-- End Header --> */}
    </>
  );
};

export default Navbar;
