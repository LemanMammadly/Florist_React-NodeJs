import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLogo } from "../Context/LogoContext";

const Header = () => {
  const {logo}=useLogo()

  return (
    <header className="p-4">
      <div className="containerheader">
        <div className="row all">
          <div className="left col-lg-2 col-6">
            {logo &&
              logo.map((logos) => (
                <Link key={logos._id} to="/">
                  <img src={logos.image} alt="logo"/>
                </Link>
              ))}
          </div>
          <div className="right col-lg-10 col-6">
            <div className="allright col-lg-12 row">
              <div className="alllink col-lg-9 text-center">
                <Link to="/">HOME</Link>
                <Link to="/">ABOUT</Link>
                <Link to="/">SERVICES</Link>
                <Link to="/">SHOP</Link>
                <Link to="/">PAGES</Link>
                <Link to="/">BLOG</Link>
                <Link to="/">CONTACT</Link>
              </div>
              <div className="allicons col-lg-3 text-end">
                <Link className="icon" to="/">
                  <GrSearch />
                </Link>
                <Link className="icon" to="/">
                  <AiOutlineHeart />
                </Link>
                <Link className="icon" to="/">
                  <HiOutlineShoppingBag />
                </Link>
                <Link className="burger" to="/">
                  <GiHamburgerMenu />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
