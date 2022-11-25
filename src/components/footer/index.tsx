import Link from "next/link";
import React from "react";
import { footerLinks } from "../../assets/data/data";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container mx-auto px-3 grid grid-cols-1 divide-y-[0.1px] gap-10 divide-gray-700">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full">
        {footerLinks.map((item, index) => (
          <div key={index} className="links-content mt-5">
            <h2
              className="text-grayText uppercase font-semibold mb-5"
              aria-labelledby="Sidebar Links Category"
              aria-label={item.title}
            >
              {item.title}
            </h2>
            {item.links.map((link, index) => (
              <div
                key={index}
                className="text-lightGray my-3 transition-all duration-500 delay-100 hover:opacity-70 font-semibold"
              >
                <Link href={link.href}>{link.name}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center flex-wrap gap-5 py-4">
        <span className="text-grayText font-semibold">© Copyright 2022 Surge Global.</span>
        <div className="social-links flex gap-5 items-center">
          <Link href={""} className="scale-150 text-grayText">
            <FaFacebookSquare />
          </Link>
          <Link href={""} className="scale-150 text-grayText">
            <BsInstagram />
          </Link>
          <Link href={""} className="scale-150 text-grayText">
            <BsLinkedin />
          </Link>
          <Link href={""} className="scale-150 text-grayText">
            <IoLogoYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
