import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const LogoContext = createContext();

export const LogoContextProvider = ({ children }) => {
  const [logo, setLogo] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:5000/logo")
      .then((res) => setLogo(res.data.logos))
      .catch((error) => console.log(error));
  }, []);

      

  const values = {
    logo,
    setLogo,
  };
  return <LogoContext.Provider value={values}>{children}</LogoContext.Provider>;
};


export const useLogo=()=>{
    const context= useContext(LogoContext)

    if(context===undefined){
        throw new Error("useLogo must be used within a LogoProvider")
    }

    return context
};