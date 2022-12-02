import React from "react";
import "./Sliderr.css";
import "react-slideshow-image/dist/styles.css";
import { useSlider } from "../Context/SliderContext";
import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";

const Sliderr = () => {
  const { slider } = useSlider();

  return (
    // <>
    //   <Slide className="slider">
    //     {slider &&
    //       slider.map((sliders) => (
    //         <div key={sliders._id} className="each-slide-effect">
    //           <div
    //             className="sliderimg"
    //             style={{ backgroundImage: `url(${sliders.image})` }}
    //           >
    //             <div className="slidercontent col-lg-3">
    //               <span className="slidertitle">{sliders.title}</span>
    //               <h2 className="sliderdesc">{sliders.description}</h2>
    //               <button className="pirmary-btn">Shop now</button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //   </Slide>
    // </>
      <Carousel autoplay={4000} cols={1} rows={1} gap={10} loop>
        {slider &&
          slider.map((sliders) => (
            <Carousel.Item>
              <img className="imgbig" src={sliders.image} alt="img" />
              <div className="allslidertext">
                <span>{sliders.title}</span>
                <h2 className="col-lg-5">{sliders.description}</h2>
                <Link to="/">
                  <button className="primary-btn">SHOP NOW</button>
                </Link>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
  );
};

export default Sliderr;
