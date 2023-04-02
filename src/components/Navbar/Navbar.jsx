import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
    <nav className="md:flex bg-purple-600 py-4 text-white justify-between px-5 gap-8">
      <span onClick={() => setOpen(!open)}>
        <span className="md:hidden">
          {open ? (
            <XMarkIcon className="h-6 w-6 " />
          ) : (
            <Bars3Icon className="h-6 w-6 " />
          )}
        </span>
      </span>
      <div
        className={`absolute duration-500 md:static gap-8 bg-purple-600 md:flex ${
          open ? "top-18 right-0 left-0" : "-top-60"
        } `}
      >
        <ul className="p-10 md:p-0 md:flex gap-10 md:px-14">
          {routes.map((route) => (
            <Link route={route} key={route.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
