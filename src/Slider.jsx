import './Slider.css'
import { useState, useEffect } from "react";



function Slider() {

  const frameWidth = 120;
  const slidesCount = 4;

  const [left, setLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("tick");
      setLeft(prevLeft =>
        prevLeft - frameWidth > -frameWidth * slidesCount
          ? prevLeft - frameWidth
          : 0
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="slider">
        <div className="line" style={{ left }}>
          <img src="/images/cat_1.png" alt="" />
          <img src="/images/cat_2.png" alt="" />
          <img src="/images/cat_3.png" alt="" />
          <img src="/images/cat_4.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Slider
