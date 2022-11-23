import React, { useEffect, useState } from "react";
import { achievementData } from "../../assets/data/data";
import SliderItem from "../slider-item";

const Slider = () => {
  const [slideItem, setSlideItem] = useState<typeof achievementData[0]>(achievementData[0]);
  const slideBtn = () => {
    let btns = [];
    for (let i = 0; i < achievementData.length; i++) {
      btns.push(i);
    }
    return btns;
    };
    
    useEffect(() => {
      
        
    }, [slideItem])
    


  return (
    <>
      <SliderItem
        title={slideItem.title}
        desc={slideItem.desc}
        quote={slideItem.quote}
        img={slideItem.img}
      />
      <div className="slide-btns flex items-center justify-center gap-3 my-10 mt-5">
        {slideBtn().map((btn) => (
          <button
            key={btn}
            onClick={() => setSlideItem(achievementData[btn])}
            className={
              btn === achievementData.indexOf(slideItem)
                ? "w-10 h-1 bg-mainColor transition-colors duration-150 ease-linear"
                : "w-10 h-1 bg-gray-300 transition-colors duration-150 ease-linear"
            }
          ></button>
        ))}
      </div>
    </>
  );
};

export default Slider;
