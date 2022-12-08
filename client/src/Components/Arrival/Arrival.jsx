import React from "react";
import "./Arrival.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useArrival } from "../Context/ArrivalContext";

const Arrival = () => {
  const { arrival } = useArrival();
  return (
    <section className="arrival">
      <div className="arrivalcontainer">
        <div className="row">
          <div className="top">
            <div className="arrival-title">
              <span className="head">OUR FLOWER</span>
              <h2>New Arrivals</h2>
              <ul>
                <Link to="/">
                  <li>All</li>
                </Link>
                <Link to="/">
                  <li>Bouquet</li>
                </Link>
                <Link to="/">
                  <li>Flower box</li>
                </Link>
                <Link to="/">
                  <li>Flower shelf</li>
                </Link>
                <Link to="/">
                  <li>Basket of flower</li>
                </Link>
                <Link to="/">
                  <li>Gift combos</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="arrivalboxes col-lg-12">
              {arrival &&
                arrival.map((arrivals) => (
                  <div className="arrivalbox col-lg-3">
                    <div className="arrivaltop">
                      <img
                        src={arrivals.image}
                        alt=""
                      />
                    </div>
                    <div className="iconsarrival">
                      <Link className="icons" to="/">
                        <BsSearch />
                      </Link>
                      <Link className="icons" to="/">
                        <HiOutlineShoppingBag />
                      </Link>
                      <Link className="icons" to="/">
                        <AiOutlineHeart />
                      </Link>
                    </div>
                    <div className="status">{arrivals.status}</div>
                    <div className="arrivalbottom">
                      <Link to="/">{arrivals.title}</Link>
                      <div className="price">${arrivals.price}</div>
                      <div className="add">ADD TO CARD</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrival;
