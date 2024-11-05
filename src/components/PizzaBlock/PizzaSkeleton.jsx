import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="136" r="125" />
    <rect x="0" y="265" rx="10" ry="10" width="280" height="26" />
    <rect x="0" y="312" rx="10" ry="10" width="280" height="67" />
    <rect x="0" y="396" rx="0" ry="0" width="95" height="27" />
    <rect x="125" y="396" rx="18" ry="18" width="152" height="39" />
  </ContentLoader>
);

export default PizzaSkeleton;
