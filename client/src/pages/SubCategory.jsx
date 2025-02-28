import React from "react";
import { Link, useParams } from "react-router-dom";
import useSubCategory from "../hooks/subcategoryHook";
import NoItems from "../components/NoItems";
import globalService from "../services/globalService";

const SubCategory = () => {
  const { categoryId } = useParams();
  const { useGetAllSubCategoryQuery } = useSubCategory();
  const { isPending, data: subcategory } =
    useGetAllSubCategoryQuery(categoryId);
  return (
    <>
      <section className="pb-10">
        <div className="container-wrapper">
          <h1 className="text-4xl font-bold mb-5 text-gray-500">
            Our Subcategories:
          </h1>
          <h2 className="mb-2 font-bold text-gray-400">Choose a subcategory</h2>
          <div className="flex gap-6 flex-wrap">
            {isPending ? (
              <p>Loading...</p>
            ) : subcategory?.data?.length > 0 ? (
              subcategory?.data?.map((item) => (
                <div ket={item?._id} className=" ">
                  <Link
                    to={`/subcategories/${item?._id}?categoryId=${item?.categoryId?._id}`}
                    className="relative"
                  >
                    <img
                      src={
                        item?.img
                          ? globalService.subcategoryImg + item?.img
                          : "https://github.com/safak/nextjs-tutorial/blob/main/public/apps.jpg?raw=true"
                      }
                      alt="applicationsImg"
                      width="{155}"
                      height="{100}"
                      className="h-56 grayscale"
                    />
                    <span className="text-yellow-500 absolute bottom-1 right-2 font-bold text-xl">
                      {item?.name}
                    </span>
                  </Link>
                </div>
              ))
            ) : (
              <NoItems />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubCategory;
