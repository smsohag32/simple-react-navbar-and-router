import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Products",
      path: "/products",
    },
    {
      id: 5,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <div>
      {routes.map((route) => (
        <Link route={route} />
      ))}
    </div>
  );
};

export default Navbar;
