import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import search from "../../assets/icons/Search.png";
import AuthContext from "../../context/AuthProvider";

function ProductFilter() {
  let { productFilter, setProductFilter, setProductSearch, productSearch } =
    useContext(AuthContext);
  const handleFilter = (e) => {
    setProductFilter(e.target.value);
  };
  return (
    <>
      <div className="product_filterdiv">
        <div className="product_filterdiv_search">
          <input
            type="text"
            placeholder="Axtarış"
            onChange={(e) => setProductSearch(e.target.value)}
            value={productSearch}
          />
          <img src={search} />
        </div>
        <div className="product_filterdiv_category">
          <h4>Kateqoriya</h4>
          <ul>
            <li>
              <button onClick={(e) => handleFilter(e)} value="">
                Butun
              </button>
            </li>
            <li>
              <button onClick={(e) => handleFilter(e)} value="Taxta">
                Taxta
              </button>
            </li>
            <li>
              <button onClick={(e) => handleFilter(e)} value="Toxunma">
                Toxunma
              </button>
            </li>
          </ul>
        </div>
        <div className="product_filterdiv_category">
          <h4>Təsir istiqaməti</h4>
          <ul>
            <li>
              <button onClick={(e) => handleFilter(e)} value="Zehni inkişaf">
                Zehni inkişaf
              </button>
            </li>
            <li>
              <button onClick={(e) => handleFilter(e)} value="Hiss Qavrayış">
                Hiss Qavrayış
              </button>
            </li>
          </ul>
        </div>
        {/* <div className="product_filterdiv_category">
          <h4>Rəng</h4>
          <div className="product_filterdiv_category_color">
            <button className="color1"></button>
            <button className="color2"></button>
            <button className="color3"></button>
            <button className="color4"></button>
            <br />
            <button className="color5"></button>
            <button className="color6"></button>
            <button className="color7"></button>
            <button className="color8"></button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProductFilter;
