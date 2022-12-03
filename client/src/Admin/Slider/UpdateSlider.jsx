import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./UpdateSlider.css"

const UpdateSlider = () => {
    const [inputs, setInputs] = useState([]);
    const history = useNavigate();
    const id = useParams().id;
  
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/slider/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.slider));
      };
      fetchHandler();
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/admin"));
    };
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/slider/${id}`, {
          title: String(inputs.title),
          description: String(inputs.description),
          image: String(inputs.image),
        })
        .then((res) => res.data);
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
  return (
    <>
    <div className="backbtn">
      <Link className="p-3 back" to="#/" onClick={() => history(-1)}>
         Back <TiArrowBack/>
      </Link>
      </div>
    <div className="slider">
        <div className="form">
          <p>Logo</p>
          <form key={inputs._id} className="slider-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="title url"
              required
              aria-required
              value={inputs.title}
              name="title"
              onChange={handleChange}
            />
             <input
              type="text"
              placeholder="description url"
              required
              aria-required
              value={inputs.description}
              name="description"
              onChange={handleChange}
            />
             <input
              type="text"
              placeholder="image url"
              required
              aria-required
              value={inputs.image}
              name="image"
              onChange={handleChange}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      </>
  )
}

export default UpdateSlider