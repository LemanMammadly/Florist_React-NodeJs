import axios from 'axios';
import React, { useState } from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import "./AddCategory.css"

const AddCategory = () => {
    const history = useNavigate();

    const [inputs,setInputs] =useState({
      image:"",
      title:"",
      count:""
    })
  
    const sendRequest=async()=>{
      await axios.post('http://localhost:5000/category',{
          image: String(inputs.image),
          title: String(inputs.title),
          count:String(inputs.count)
      }).then(res=>res.data)
  }
  
  const handleChange=(e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name] : e.target.value
    }))
  }
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    sendRequest().then(()=>history('/addcategory'));
    window.location.reload();
  }
  
  return (
    <>
    <div className="backbtn">
      <Link className="p-3 back" to="#/" onClick={() => history(-1)}>
         Back <TiArrowBack/>
      </Link>
      </div>
    <div className="category">
        <div className="form">
          <p>Category</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="image url"
              required
              aria-required
              onChange={handleChange}
              value={inputs.image}
              name="image"
            />
             <input
              type="text"
              placeholder="title"
              required
              aria-required
              onChange={handleChange}
              value={inputs.title}
              name="title"
            />
             <input
              type="text"
              placeholder="count"
              required
              aria-required
              onChange={handleChange}
              value={inputs.count}
              name="count"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      </>
  )
}

export default AddCategory