import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
      .then((data) => {
        const loadedData = data.data.data;
        console.log(loadedData);
        const phonesData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfo;
        });
        setPhones(phonesData);
      });
  }, []);

  return (
    <div>
      <BarChart width={800} height={300} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default PhoneBar;
