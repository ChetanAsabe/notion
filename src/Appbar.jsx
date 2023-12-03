import React, { useState } from "react";
import logo from "./assets/logo.png";
import Menu from "./assets/menu.png";
import close from "./assets/close.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 shadow-lg">
      <nav className="bg-white flex md:flex-row py-5 navbar sticky top-0">
        <img src={logo} className="w-[30px] mt-1 h-[30px] ml-5" />
        <ul className="list-none sm:flex md:flex hidden justify-start items-center flex-1">
          <li className="ml-2 text-xl font-bold">Notion</li>
          <li className="ml-5 mt-1">Product</li>
          <li className="ml-5 mt-1">Download</li>
          <li className="ml-5 mt-1">Solutions</li>
          <li className="ml-5 mt-1">Resources</li>
          <li className="ml-5 mt-1">Pricing</li>
        </ul>
        <ul className="list-none sm:flex md:flex hidden justify-end items-center flex-1">
          <li className="mr-5 mt-1">Request a demo</li>
          <li className="mr-5 mt-1">login</li>
          <button class=" bg-black text-white mt-1 mr-5 py-1 px-4 border border-black rounded">
            Get Notion Free
          </button>
        </ul>

        <div className="sm:hidden md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : Menu}
            className="w-7 mr-2"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black absolute top-20 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="text-white list-none flex flex-col justify-start items-center flex-1">
              <li className="mb-5">Notion</li>
              <li className="mb-5">Product</li>
              <li className="mb-5">Download</li>
              <li className="mb-5">Solutions</li>
              <li className="mb-5">Resources</li>
              <li className="mb-5">Pricing</li>
            </ul>
            <ul className="list-none flex flex-col hidden justify-end items-center flex-1">
              <li className="mr-5">Request a demo</li>
              <li className="mr-5">login</li>
              <button class=" bg-black text-white mr-5 py-1 px-4 border border-black rounded">
                Get Notion Free
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
