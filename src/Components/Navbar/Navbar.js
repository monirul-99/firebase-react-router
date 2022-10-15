import React from "react";
import { Link } from "react-router-dom";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="bg-[#111827] text-white">
      <header className="w-10/12 mx-auto flex justify-between items-center h-20 font-Poppins">
        <aside className="text-2xl">LoGo HeRe</aside>
        <aside className="flex">
          <Link className="mx-7 text-xl" to="/home">
            Home
          </Link>
          <Link className="mx-7 text-xl" to="/menu">
            Menu
          </Link>
          <Link className="mx-7 text-xl" to="/service">
            Service
          </Link>
          <Link className="mx-7 text-xl" to="/shop">
            Shop
          </Link>
        </aside>
        <aside className="flex items-center">
          <MagnifyingGlassIcon class="h-6 w-6 text-white" />
          <BellIcon class="h-6 w-6 text-white mx-5" />
          <div className="flex items-center py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <ArrowRightOnRectangleIcon class="h-5 w-5 text-white" />
            <h2 className="mx-1">Login</h2>
          </div>
        </aside>
      </header>
    </nav>
  );
};

export default Navbar;
