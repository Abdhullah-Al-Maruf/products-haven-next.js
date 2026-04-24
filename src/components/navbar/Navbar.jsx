import Link from "next/link";
import React from "react";
import MyLink from "./MyLink";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const link = [
    { name: "Home", path: "/" },
    { name: "Statistic", path: "/statistic" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="w-full sticky top-0 z-50 bg-white">
      <div className="navbar container mx-auto">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {link.map((item, index) => (
                <li key={index}>
                  <MyLink name={item.name} path={item.path} />
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="text-xl">
            Product
             <span className="bg-linear-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent font-bold">
              Heaven
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link.map((item, index) => (
              <li key={index}>
                <MyLink name={item.name} path={item.path} />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex gap-3">
          <Link href="/cart">
            <button
              aria-label="cart"
              className="p-2 bg-base-200 text-black rounded-full cursor-pointer"
            >
              <FiShoppingCart />
            </button>
          </Link>

          <Link href="/wishlist">
            <button
              aria-label="wishlist"
              className="p-2 bg-base-200 text-black rounded-full cursor-pointer"
            >
              <FiHeart />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;