import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogo } from "../../Components/Context/LogoContext";
import "./LogoDetail.css";
import {TiArrowBack} from "react-icons/ti"
import axios from "axios";

const LogoDetail = () => {
  const navigate = useNavigate();
  const { logo } = useLogo();
  const logo_arr =
    logo &&
    logo.map((item) => {
      return item._id;
    });
  return (
    <>
      <div className="backbtn">
      <Link className="p-3 back" to="#/" onClick={() => navigate(-1)}>
         Back <TiArrowBack/>
      </Link>
      </div>

      <div className="p-5">
        <table class="table w-75 m-auto">
          <thead class="thead-dark">
            <tr>
              <th></th>
              <th scope="col">LOGO</th>
              <th scope="col"></th>
              <th scope="col">DISPLAY</th>
            </tr>
          </thead>
          {logo &&
            logo.map((logos, _id) => (
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img src={logos.image} alt="" />
                  </td>
                  <td></td>
                  <td>
                  <Link
                    to={`/admin/updatelogo/${logo_arr[_id]}`}
                    onClick={async () => {
                      await axios
                        .put(`http://localhost:5000/logo/${logo_arr[_id]}`)
                        .then((res) => res.data);
                    }}
                    className="me-1 btn btn1"
                  >
                    Update
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

export default LogoDetail;
