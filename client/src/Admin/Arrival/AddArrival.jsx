import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddArrival.css";
import axios from "axios";
import { TiArrowBack } from "react-icons/ti";

const AddArrival = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    status: "",
    image: "",
    title: "",
    price: "",
  });

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/arrival", {
        status: String(inputs.status),
        image: String(inputs.image),
        title: String(inputs.title),
        price: Number(inputs.price),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/addarrival"));
    window.location.reload();
  };
  return (
    <>
      <div className="backbtn">
        <Link className="p-3 back" to="#/" onClick={() => history(-1)}>
          Back <TiArrowBack />
        </Link>
      </div>
      <div className="arrivals">
        <div className="form">
          <p>Arrival</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="status"
              onChange={handleChange}
              value={inputs.status}
              name="status"
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
              placeholder="price"
              required
              aria-required
              onChange={handleChange}
              value={inputs.price}
              name="price"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddArrival;
