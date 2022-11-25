import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/images/logo.svg";
import { GiHamburgerMenu, GiClosedBarbute } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div className="container flex flex-wrap items-center justify-between mx-auto text-white h-full px-2">
        <Link href="#" className="mt-3">
          <Image src={Logo} alt={"Logo"} />
        </Link>

        <div className="flex items-center md:order-2">
          <div className="cto hidden lg:block">
            <Link href={""} className="cto p-3 px-5 bg-white bg-opacity-25">
              Schedule a call
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu Button</span>
            <span className="scale-[2]">
              <GiHamburgerMenu />
            </span>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="list-none inline-flex gap-14">
            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold">
              <Link href={""}>Products</Link>
            </li>
            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold">
              <Link href={""}>Growth</Link>
            </li>

            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold">
              <Link href={""}>Client</Link>
            </li>

            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold">
              <Link href={""} className="flex gap-2 items-center">
                <span>Resources</span> <IoIosArrowDown />
              </Link>
            </li>

            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold">
              <Link href={""}>Pricing</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Media Links */}
      {isMenuOpen && (
        <div
          className="bg-mainColor lg:hidden w-full h-screen px-5 text-white"
          id="navbar-sticky"
        >
          <ul className="list-none flex flex-col justify-between divide-y divide-gray-700">
            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold py-5">
              <Link href={""}>Products</Link>
            </li>
            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold py-5">
              <Link href={""}>Growth</Link>
            </li>

            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold py-5">
              <Link href={""}>Client</Link>
            </li>

            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold py-5">
              <Link
                href={""}
                className="flex justify-between gap-2 items-center"
              >
                <span>Resources</span> <IoIosArrowDown />
              </Link>
            </li>

            <li className="transition-all duration-500 delay-100 hover:opacity-70 font-semibold py-5">
              <Link href={""}>Pricing</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
