import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductSectionOne from "../components/ProductSectionOne";
import ProductSectionTwo from "../components/ProductSectionTwo";
import ProductSectionThree from "../components/ProductSectionThree";
import { useGetOneProductQuery } from "../hooks/productHook";
const Product = () => {
  const { productId } = useParams();
  const { isPending, data: product } = useGetOneProductQuery(productId);
  return (
    <>
      {/* <!-- Start bread crumb --> */}
      <div
        className="bread-crumb bg-white py-[13px] shadow-lg mb-[40px]"
        id="bread-crumb"
      >
        <div className="container-wrapper">
          <Link to="">Home</Link> / <Link to="">Products</Link> / Product Detail
        </div>
      </div>
      {/* <!-- End bread crumb --> */}
      <ProductSectionOne isPending={isPending} product={product} />
      <ProductSectionTwo isPending={isPending} product={product} />
      <ProductSectionThree />
    </>
  );
};

export default Product;
