import React from "react";

const Link = ({ route }) => {
  return (
    <li className="list-none">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
