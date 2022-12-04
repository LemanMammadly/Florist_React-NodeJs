import axios from 'axios';
import React from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { useCategory } from '../../Components/Context/CategoryContext';
import "./CategoryDetail.css"

const CategoryDetail = () => {
    const navigate = useNavigate();
  const { category } = useCategory();
  const category_arr =
    category &&
    category.map((item) => {
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
      <table class="w-75 m-auto categories">
        <thead class="thead-dark">
          <tr className='text-center'>
            <th></th>
            <th scope="col">IMAGE</th>
            <th scope="col">TITLE</th>
            <th scope="col">COUNT</th>
            <th scope="col">DISPLAY</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {category &&
          category.map((categories, _id) => (
            <tbody  className='text-center'>
              <tr>
                <th scope="row"></th>
                <td className="col-lg-3">
                  <img className="img img-fluid" src={categories.image} alt="" />
                </td>
                <td className="title">{categories.title}</td>
                <td>{categories.count}</td>
                <td>
                  <Link
                    to={`/admin/updatecategory/${category_arr[_id]}`}
                    onClick={async () => {
                      await axios
                        .put(
                          `http://localhost:5000/category/${category_arr[_id]}`
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
                    to={`/admin/categorydetail`}
                    onClick={async () => {
                      await axios
                        .delete(
                          `http://localhost:5000/category/${category_arr[_id]}`
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
  )
}

export default CategoryDetail
