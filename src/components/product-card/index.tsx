import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { ServiceData } from "../../assets/data/data";

type cardType = typeof ServiceData[0];

const ProductCard = ({ data }: { data: cardType }) => {
  const { title, heading, video, desc, tags, color } = data;
  return (
    <div className="bg-lightGray p-3 py-5 sm:p-6 md:p-14 transition-[display] duration-150">
      <span className={`uppercase md:text-xl ${color}`}>{title}</span>
      <h2 className="text-mainColor text-lg sm:text-3xl font-semibold mt-3">
        {heading}
      </h2>
      <div className="h-36 sm:h-64 my-4">
        <video loop autoPlay className="h-[inherit] w-full">
          {" "}
          <source src={video} type="video/webm" />
          Your browser does not support this type of media.
        </video>
      </div>
      <p className="text-grayText sm:w-2/3 lg:w-5/6">{desc}</p>
      <div className="mt-4">
        <span className="text-mainColor font-semibold">Capabilities</span>
        <div className="flex items-center gap-2 flex-wrap my-2 sm:w-4/5 md:w-2/3 lg:3/4">
          {tags.map((item, index) => (
            <span
              key={index}
              className="py-2 px-3 leading-7 bg-lightPurple bg-opacity-25 text-lightPurple"
            >
              {item}
            </span>
          ))}
          {tags.length > 0 && (
            <span className="py-2 px-3 leading-7 text-mainColor font-light">
              + 100s of more
            </span>
          )}
        </div>
      </div>
      {/* Learn more */}
      <div className="w-fit mt-10">
        <Link
          href={""}
          className="flex items-center gap-4 justify-between p-4 font-semibold text-white my-5 relative top-0 after:bg-gradient-to-r after:from-deepPurple after:to-lightPurple hover:after:bg-gradient-to-r hover:after:from-[#7d8ef7] hover:after:to-mainRed z-[1] transition-all duration-200 ease-in-out after:bg-mainRed after:transition-all after:duration-200 after:ease-in-out after:absolute after:-z-[1] after:top-0 after:right-0 after:left-0 after:bottom-0 after:border-none hover:after:scale-[1.05]"
        >
          <span>Schedule a call</span>
          <HiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
