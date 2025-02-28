import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faComment,
  faHeart,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
const AsideLeft = () => {
  return (
    <>
      <div className="altop bg-white mb-[5px] py-4 px-4">
        <ul className="flex flex-col gap-5">
          <li className="">
            <span className="font-medium text-xs">John Doe</span>
          </li>
          <li className="flex items-center gap-2">
            <Link to="/wishlist">
              <span className="font-medium text-xs">
                <FontAwesomeIcon icon={faHeart} /> My Wishlist
              </span>
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link to="/order">
              <span className="font-medium text-xs">
                <FontAwesomeIcon icon={faReceipt} /> My Orders
              </span>
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link to="/userreviews">
              <span className="font-medium text-xs">
                <FontAwesomeIcon icon={faComment} /> My Reviews
              </span>
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link to="/cart">
              <span className="font-medium text-xs">
                <FontAwesomeIcon icon={faCartPlus} /> My Cart
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!--  --> */}
      <div className="alcenter bg-white py-4 px-4 mb-[3px]">
        <h3 className="font-medium text-xs pb-4">Your Stories</h3>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img
                src="/6.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Events</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img
                src="/4.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Gaming</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img
                src="/8.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Gallery</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img
                src="/9.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Videos</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img
                src="/10.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Messages</span>
          </li>
        </ul>
      </div>
      {/* <!--  --> */}
      <div className="albottom bg-white py-4 px-4 h-full">
        <h3 className="font-medium text-xs pb-4">Others</h3>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img
                src="/13.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Fundraiser</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img
                src="/6.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Tutorials</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-[28px] h-[28px]">
              <img
                src="/12.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Courses</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AsideLeft;
