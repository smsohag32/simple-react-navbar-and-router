import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Feature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="h-5 w-5 text-blue-500"></CheckCircleIcon>{" "}
      <span className="pl-2">{feature}</span>
    </div>
  );
};

export default Feature;
