import React, { useEffect } from 'react'
import Sliderr from '../../Components/Slider/Sliderr.jsx'
import "./Home.css"

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  });
  return (
    <div>
        <Sliderr/>
    </div>
  )
}

export default Home