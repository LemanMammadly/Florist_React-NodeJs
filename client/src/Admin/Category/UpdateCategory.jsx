import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./UpdateCategory.css"

const UpdateCategory = () => {
    const [inputs, setInputs] = useState([]);
    const history = useNavigate();
    const id = useParams().id;
  
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/category/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.category));
      };
      fetchHandler();
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/admin"));
    };
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/category/${id}`, {
          image: String(inputs.image),
          title: String(inputs.title),
          count: String(inputs.count),
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
    <div className="category">
        <div className="form">
          <p>Category</p>
          <form key={inputs._id} className="category-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="image url"
              required
              aria-required
              value={inputs.image}
              name="image"
              onChange={handleChange}
            />
             <input
              type="text"
              placeholder="title"
              required
              aria-required
              value={inputs.title}
              name="title"
              onChange={handleChange}
            />
             <input
              type="text"
              placeholder="count"
              required
              aria-required
              value={inputs.count}
              name="count"
              onChange={handleChange}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      </>
  )
}

export default UpdateCategory
