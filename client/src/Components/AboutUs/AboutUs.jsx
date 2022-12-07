import React from "react";
import "./AboutUs.css";
import { HiOutlinePlay } from "react-icons/hi";
import {Link} from "react-router-dom"

const AboutUs = () => {
  return (
    <section className="about">
      <div className="containeraboutus">
        <div className="row all">
          <div className="top">
            <div className="left col-lg-4 col-12">
              <span>ABOUT US</span>
              <h2>
                We provide all <br /> kinds of fresh <br /> flower services
              </h2>
            </div>
            <div className="right col-lg-8 mb-5 col-12">
              <p>
                For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                Canada, growing flowers that can be dried and incorporated into
                late fall and winter floral arrangements has been a
                game-changer. During her growing season, this farmer-florist
                relies on a vivid palette of annuals, perennials and ornamental
                grasses to supply her studio.
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="left col-lg-7 col-12">
              <div className="aboutvideo">
                <a
                  className="video"
                  href="https://www.youtube.com/watch?v=mk48xRzuNvA"
                >
                  <HiOutlinePlay />
                </a>
              </div>
            </div>
            <div className="right col-lg-5 col-12">
              <div className="about-text">
                <span>SLOW FLOWERS’ FLORAL INSIGHTS</span>
                <h2>Dried flowers are <br /> having a <br /> renaissance</h2>
                <p>
                  This awareness has been stimulated by sustainable sourcing
                  practices and the desire on the part of North American flower
                  growers to “extend the season” beyond the last frost.
                </p>
                <Link to="/"> <button>CONTACT US</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
