import React, { useEffect } from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs.jsx';
import Benefits from '../../Components/Benefits/Benefits.jsx';
import Categories from '../../Components/Categories/Categories.jsx';
import Sliderr from '../../Components/Slider/Sliderr.jsx'
import "./Home.css"

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  });
  return (
    <div>
        <Sliderr/>
        <Benefits/>
        <Categories/>
        <AboutUs/>
    </div>
  )
}

export default Home