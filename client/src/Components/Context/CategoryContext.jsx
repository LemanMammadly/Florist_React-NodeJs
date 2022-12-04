import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const CategoryContext=createContext();

export const CategoryContextProvider=({children})=>{
    const [category,setCategory]=useState();

    useEffect(()=>{
        axios.get("http://localhost:5000/category")
        .then((res)=>setCategory(res.data.categories))
        .catch((error)=>console.log(error));
    },[])

    const values={
        category,
        setCategory
    };
    return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>
};

export const useCategory=()=>{
    const context=useContext(CategoryContext)

    if(context===undefined){
        throw new Error("useCategory must be used within a CategoryProvider")
    }
    return context
};