import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="container flex flex-wrap items-center justify-between mx-auto text-white h-full">
      <Link href="#" className="mt-3">
        <Image src={Logo} alt={"Logo"} />
      </Link>
      <div className="flex items-center md:order-2">
        <div className="cto hidden md:block">
          <Link href={""} className="cto p-3 px-5 bg-white bg-opacity-25">
            Schedule a call
          </Link>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 text-sm rounded-lg md:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Menu Button</span>
          <span className="scale-[2]">
            <GiHamburgerMenu />
          </span>
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
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
  );
};

export default Navbar;
