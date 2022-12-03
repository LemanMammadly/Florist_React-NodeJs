import axios from "axios";
import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useSlider } from "../../Components/Context/SliderContext";
import "./SliderDetail.css";

const SliderDetail = () => {
  const navigate = useNavigate();
  const { slider } = useSlider();
  const slider_arr =
    slider &&
    slider.map((item) => {
      return item._id;
    });
  return (
    <>
      <div className="backbtn">
        <Link className="p-3 back" to="#/" onClick={() => navigate(-1)}>
          Back <TiArrowBack />
        </Link>
      </div>

      <div className="p-5">
        <table class="w-75 m-auto sliders">
          <thead class="thead-dark">
            <tr>
              <th></th>
              <th scope="col">IMAGE</th>
              <th scope="col">TITLE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">DISPLAY</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {slider &&
            slider.map((sliders, _id) => (
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td className="col-lg-3">
                    <img className="img img-fluid" src={sliders.image} alt="" />
                  </td>
                  <td className="title">{sliders.title}</td>
                  <td>{sliders.description}</td>
                  <td>
                    <Link
                      to={`/admin/updateslider/${slider_arr[_id]}`}
                      onClick={async () => {
                        await axios
                          .put(
                            `http://localhost:5000/slider/${slider_arr[_id]}`
                          )
                          .then((res) => res.data);
                      }}
                      className="me-1 btn btn1 button"
                    >
                      UPDATE
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/admin/sliderdetail`}
                      onClick={async () => {
                        await axios
                          .delete(
                            `http://localhost:5000/slider/${slider_arr[_id]}`
                          )
                          .then(() => window.location.reload());
                      }}
                      className="btn btn2 ms-3 button"
                    >
                      DELETE
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};

export default SliderDetail;
