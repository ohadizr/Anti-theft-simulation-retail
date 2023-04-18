import React, { useState } from "react";
import "./Carousel.scss";
import { Line, Rows, Around } from "../../Line/Line";


export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
    
  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? contentArray.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === contentArray.length - 1 ? 0 : activeIndex + 1);
  };
  const contentArray=[<div className='box'>
    <h1>1</h1>
  </div>,<div className='box'>
    <h1>2</h1>
  </div>,<div className='box'>
    <h1>3</h1>
  </div>]

  return (
    <div className="carousel">


    <button className="carousel-prev" onClick={handlePrevClick}>
     <h1>&lt;</h1> 
    </button>

      <div className="carousel-inner" >
        {contentArray[activeIndex]}
      </div>

      <button className="carousel-next" onClick={handleNextClick}>
            <h1>&gt;</h1> 
      </button>

    </div>
  );
}
