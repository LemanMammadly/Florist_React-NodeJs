import axios from 'axios';
import React, { useState } from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom'
import "./AddSlider.css"

const AddSlider = () => {
  const history = useNavigate();

  const [inputs,setInputs] =useState({
    title:"",
    description:"",
    image:""
  })

  const sendRequest=async()=>{
    await axios.post('http://localhost:5000/slider',{
        title: String(inputs.title),
        description: String(inputs.description),
        image:String(inputs.image)
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
  sendRequest().then(()=>history('/addslider'));
  window.location.reload();
}

  return (
    <>
    <div className="backbtn">
      <Link className="p-3 back" to="#/" onClick={() => history(-1)}>
         Back <TiArrowBack/>
      </Link>
      </div>
    <div className="slider">
        <div className="form">
          <p>Slider</p>
          <form onSubmit={handleSubmit}>
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
              placeholder="description"
              required
              aria-required
              onChange={handleChange}
              value={inputs.description}
              name="description"
            />
             <input
              type="text"
              placeholder="image url"
              required
              aria-required
              onChange={handleChange}
              value={inputs.image}
              name="image"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      </>
  )
}

export default AddSlider