"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { sora } from "../styles/fonts";
// import logo from "../../public/logo_nav.png";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  // const navigationData = [
  //   {
  //     displayName: "Library",
  //     route: "/blogs",
  //   },
  //   {
  //     displayName: "Docs",
  //     route: "/docs",
  //   },
  // ];
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 backdrop-blur-md shadow-lg transform ${
          isMenuOpen ? "translate-x-0 z-50" : "-translate-x-full"
        } z-50 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-4">
          <button onClick={toggleMenu} className="text-gray-800 self-end mb-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* <div className="flex flex-col space-y-4">
            {navigationData.map((item, index) => (
              <Link
                key={index}
                href={`${item.route}`}
                className="text-gray-300 hover:text-gray-100"
              >
                {item.displayName}
              </Link>
            ))}
          </div> */}
        </div>
      </nav>

      <div className="transition-transform duration-300 z-40 px-8 md:px-32 h-[10vh] border-b  border-2 border-opacity-25 flex items-center w-full sticky top-0 backdrop-blur-md bg-gray-950 ">
        {/* <div className="transition-transform duration-300 z-40 px-8 md:px-32 h-[10vh] border-b border-gray-50 border-2 border-opacity-25 flex items-center w-full sticky top-0 backdrop-blur-md "> */}
        <div className="flex items-center justify-between h-16 w-full">
          <Link
            href="/"
            className={`font-bold text-3xl text-black h-full flex items-center              `}
          >
            <Image
              className="mt-2"
              src={logo}
              height={100}
              width={150}
              alt="logo"
            />
            {/* <div className=" mr-1 ">
              <Image src={logo} height={50} width={50} alt="logo" />
            </div>
            Confedo AI */}
          </Link>
          {/* <div className="hidden md:flex space-x-4">
            {navigationData.map((item, index) => (
              <a
                key={index}
                href={`${item.route}`}
                className="text-gray-300 hover:text-gray-100"
              >
                {item.displayName}
              </a>
            ))}
            
          </div> */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
