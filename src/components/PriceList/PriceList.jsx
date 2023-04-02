import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl p-2 text-center placeholder-blue-400 text-purple-800">
        Awesome Low cost Price !!!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-5">
        {prices.map((price) => (
          <PriceCard price={price} key={price.id} />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
