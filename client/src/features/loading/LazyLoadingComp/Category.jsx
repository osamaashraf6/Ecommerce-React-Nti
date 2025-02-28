import React from "react";
import ContentLoader from "react-content-loader";
const CategorySkeleton = ({ length }) => {
  const catSkel = Array(length)
    .fill(0)
    .map((_, idx) => (
      <div className="" key={idx}>
        <ContentLoader
          speed={2}
          width={700}
          height={200}
          viewBox="0 0 700 200"
          backgroundColor="#e6e6e6"
          foregroundColor="#dcdbdb"
        >
          <rect x="89" y="369" rx="0" ry="0" width="251" height="54" />
          <rect x="49" y="43" rx="0" ry="0" width="356" height="77" />
          <rect x="404" y="119" rx="0" ry="0" width="0" height="1" />
        </ContentLoader>
      </div>
    ));
  return <div className="flex justify-between">{catSkel}</div>;
};

export default CategorySkeleton;
