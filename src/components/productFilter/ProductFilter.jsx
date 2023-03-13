import React from 'react'
import { NavLink } from 'react-router-dom'
import search from "../../assets/icons/Search.png";

function ProductFilter() {
  return (
    <>
    
    <div className="product_filterdiv">
          <div className="product_filterdiv_search">
            <input type="text" placeholder="Axtarış" />
            <img src={search} />
          </div>
          <div className="product_filterdiv_category">
            <h4>Kateqoriya</h4>
            <ul>
              <li>
                <NavLink>Psixologiya</NavLink>
              </li>
              <li>
                <NavLink>Oyuncaq</NavLink>
              </li>
              <li>
                <NavLink>Sağlamlıq</NavLink>
              </li>
            </ul>
          </div>
          <div className="product_filterdiv_category">
            <h4>Təsir istiqaməti</h4>
            <ul>
              <li>
                <NavLink>Zehni inkişaf</NavLink>
              </li>
              <li>
                <NavLink>Hiss Qavrayış</NavLink>
              </li>
            </ul>
          </div>
          <div className="product_filterdiv_category">
            <h4>Rəng</h4>
            <div className="product_filterdiv_category_color">
                <button className='color1'></button>
                <button className='color2' ></button>
                <button className='color3'></button>
                <button className='color4'></button>
                <br/>
                <button className='color5'></button>
                <button className='color6'></button>
                <button className='color7'></button>
                <button className='color8'></button>
                
            </div>
          </div>
      
        </div>
    
    </>
  )
}

export default ProductFilter