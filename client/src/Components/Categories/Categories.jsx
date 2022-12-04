import React from 'react'
import "./Categories.css"
import {useCategory} from "../Context/CategoryContext.jsx"

const Categories = () => {
    const {category} =useCategory()
  return (
    <section className='categorysection'>
        <div className="container">
            <div className="row all">
               {
                category && category.map((categories)=>(
                    <div className="box col-lg-3">
                    <img className='categoryimg img-fluid' src={categories.image} alt="" />
                    <div className="categoryitemtext">
                        <h4>{categories.title}</h4>
                        <span>({categories.count} items)</span>
                    </div>
                    </div>
                ))
               }
            </div>
        </div>
    </section>
  )
}

export default Categories