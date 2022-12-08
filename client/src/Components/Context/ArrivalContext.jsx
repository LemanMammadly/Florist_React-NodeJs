import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ArrivalContext=createContext();

export const ArrivalContextProvider=({children})=>{
    const [arrival,setArrival]=useState();

    useEffect(()=>{
        axios.get("http://localhost:5000/arrival")
        .then((res)=>setArrival(res.data.arrivals))
        .catch((error)=>console.log(error));
    },[])

    const values={
        arrival,
        setArrival
    };
    return <ArrivalContext.Provider value={values}>{children}</ArrivalContext.Provider>
};

export const useArrival=()=>{
    const context=useContext(ArrivalContext)

    if(context===undefined){
        throw new Error("useArrival must be used within a ArrivalProvider")
    }
    return context
}