import React from "react";
import ReactPlaceholder from "react-placeholder";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";

const SkeletonPlaceholder = ({ ready, rows, portfolio }) => {
  const CustomPlaceholder = portfolio ? (
    <div>
      <RectShape color="#E0E0E0" style={{ width: "100%", height: "160px", marginBottom: "10px" }} />
      <TextBlock color="#E0E0E0" rows={rows} />
    </div>
  ) : (
    <TextBlock color="#E0E0E0" rows={rows} />
  );

  return (
    <ReactPlaceholder
      showLoadingAnimation={true}
      ready={ready}
      customPlaceholder={CustomPlaceholder}
    ></ReactPlaceholder>
  );
};

export default SkeletonPlaceholder;
