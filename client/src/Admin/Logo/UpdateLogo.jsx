import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UpdateLogo.css";
import { useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const UpdateLogo = () => {
  const [inputs, setInputs] = useState([]);
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/logo/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.logo));
    };
    fetchHandler();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/admin"));
  };

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/logo/${id}`, {
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

  return (<>
    <div className="backbtn">
      <Link className="p-3 back" to="#/" onClick={() => history(-1)}>
         Back <TiArrowBack/>
      </Link>
      </div>
    <div class="logo">
        <div class="form">
          <p>Logo</p>
          <form key={inputs._id} class="logo-form" onSubmit={handleSubmit}>
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
  );
};

export default UpdateLogo;
