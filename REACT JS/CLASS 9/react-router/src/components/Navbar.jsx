/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-screen text-white p-2 shadow-2xl bg-transparent font-bold fixed top-0">
      <ul className="flex justify-around items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li className="text-[40px]">
          <IoSunny />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;