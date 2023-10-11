import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center  h-[450px]">
      <ThreeCircles
        height="100"
        width="100"
        color="#A74AC7"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loading;
