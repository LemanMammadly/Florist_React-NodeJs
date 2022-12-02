import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const SliderContext = createContext();

export const SliderContextProvider = ({ children }) => {
  const [slider, setSlider] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/slider")
      .then((res) => setSlider(res.data.sliders))
      .catch((error) => console.log(error));
  }, []);

      

  const values = {
    slider,
    setSlider,
  };
  return <SliderContext.Provider value={values}>{children}</SliderContext.Provider>;
};


export const useSlider=()=>{
    const context = useContext(SliderContext)

    if(context===undefined){
        throw new Error("useSlider must be used within a SliderProvider")
    }

    return context
};