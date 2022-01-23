import ArrowLeft from "../../icons/chevron-left-solid.svg";
import ArrowRight from "../../icons/chevron-right-solid.svg";
import { useState } from "react";
import "./slider.scss";

const Slider = () => {
  const [index, setIndex] = useState(0);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className="slider-wrapper">
      <div
        style={{ display: index === 3 && "none" }}
        onClick={() => handleClick("left")}
        className="arrow left"
      >
        <img width={100} src={ArrowLeft} alt="" />
      </div>
      <div
        style={{ transform: `translateX(${index * 100}vw)` }}
        className="slider"
      >
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="slide">
            <img src={`/images/desert${item}.jpg`} alt="" />
          </div>
        ))}
      </div>
      <div
        style={{ display: index === 0 && "none" }}
        onClick={() => handleClick("right")}
        className="arrow right"
      >
        <img width={100} src={ArrowRight} alt="" />
      </div>
    </div>
  );
};

export default Slider;
