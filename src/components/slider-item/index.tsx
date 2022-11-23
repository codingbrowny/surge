import Image from 'next/image'
import React from 'react'
import { achievementData } from '../../assets/data/data'
import QuoteMark from "../../assets/images/quote.svg"

type slide = typeof achievementData[0]

const SliderItem = ({title, desc, quote, img }: slide) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 bg-lightGray p-3 sm:p-6 md:p-14 transition-[display] duration-150">
      <div className="md:col-span-2 flex flex-col gap-7 font-semibold">
        <h2 className="text-mainColor text-lg sm:text-3xl">{title}</h2>
        <p className="text-grayText font-normal">{desc}</p>
        <Image src={QuoteMark} alt={"double quote mark"} />
        <div className="quote">
          <p className="text-grayText font-normal mb-4">{quote.msg}</p>
          <span className="text-mainColor font-semibold">
            {quote.author},{" "}
            <span className="font-normal">{quote.authorTitle}</span>
          </span>
        </div>
      </div>
      <div className="md:col-span-3 flex flex-col items-end md:items-center justify-center">
        <Image src={img} alt={title} className="w-4/5" />
      </div>
    </div>
  );
}

export default SliderItem