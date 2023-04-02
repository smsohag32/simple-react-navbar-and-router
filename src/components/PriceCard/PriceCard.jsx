import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  console.log(price.membershipType);
  return (
    <div className="bg-indigo-200 p-5 bg-opacity-60 flex flex-col rounded-md">
      <h1 className="text-4xl text-center text-purple-900 font-extrabold">
        {price.price}
        <span className="text-lg font-medium text-black">/mon</span>
      </h1>
      <h4 className="font-bold text-2xl text-center">{price.membershipType}</h4>
      <p className="tex-xl underline font-bold">features</p>
      {price.features.map((feature, index) => (
        <Feature feature={feature} key={index} />
      ))}
      <button className="p-2 mt-auto hover:bg-purple-500 bg-fuchsia-500">
        Buy now
      </button>
    </div>
  );
};

export default PriceCard;
