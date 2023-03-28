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

  const getCategoryStyle = (category) => {
    if (category === productFilter) {
      return { color: "#FF8087" }; // apply red background and white text to selected button
    } else {
      return {}; // no style changes for unselected buttons
    }
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
              <button
                onClick={(e) => handleFilter(e)}
                value=""
                style={getCategoryStyle("")}
              >
                Bütün oyuncaqlar
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleFilter(e)}
                value="Taxta"
                style={getCategoryStyle("Taxta")}
              >
                Taxta
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleFilter(e)}
                value="Toxunma"
                style={getCategoryStyle("Toxunma")}
              >
                Toxunma
              </button>
            </li>
          </ul>
        </div>
        <div className="product_filterdiv_category">
          <h4>Təsir istiqaməti</h4>
          <ul>
            <li>
              <button
                onClick={(e) => handleFilter(e)}
                value="Zehni inkişaf"
                style={getCategoryStyle("Zehni inkişaf")}
              >
                Zehni inkişaf
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleFilter(e)}
                value="Hiss Qavrayış"
                style={getCategoryStyle("Hiss Qavrayış")}
              >
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
