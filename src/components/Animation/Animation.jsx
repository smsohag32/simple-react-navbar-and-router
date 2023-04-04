import React from "react";
import Lottie from "lottie-react";
import ani from "./saf.json";
import tec from "./tec.json";
const Animation = () => {
  return (
    <div className="flex gap-5">
      <div className="w-full">
        <Lottie animationData={ani} loop={true} />
      </div>
      <div className="w-full">
        <Lottie animationData={tec} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Animation;
