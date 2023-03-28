import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./mehsul.scss";
// import oyuncaq1 from "../../img/Rectangle 6.png";
// import oyuncaq2 from "../../img/Rectangle 6 (1).png";
// import oyuncaq3 from "../../img/Rectangle 6 (2).png";
// import oyuncaq4 from "../../img/Rectangle 6 (3).png";
import { data } from "../../api/data";
import Card from "../../components/card/Card";
import ProductFilter from "../../components/productFilter/ProductFilter";
import AuthContext from "../../context/AuthProvider";

function Product() {
  let { productFilter, productSearch } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.getAll("product").then((res) => {
      console.log(res);
      setProducts(res);
      setLoading(false);
    });
  }, []);
  console.log(productFilter, "filter");

  return (
    <>
      <section className="carusel">
        <h2>Məhsullar</h2>
        <p>
          <NavLink to={"/"}>Ana Səhifə</NavLink>/
          <NavLink to={"/product"}>Məhsullar</NavLink>
        </p>
      </section>
      <section className="mehsul_alldiv">
        <ProductFilter />
        <div className="mehsul_bigdiv">
          {loading ? (
            <div className="loader_div">
              <span className="loader"></span>
            </div>
          ) : (
            products &&
            products
              ?.filter((m) => m.title.toLowerCase().includes(productSearch))

              .map(
                (index, key) =>
                  (productFilter === "" ||
                    index.category.title === productFilter) && (
                    <div className="mehsul_div_product" key={key}>
                      <Card index={index} key={key} />
                    </div>
                  )
              )
          )}
        </div>
      </section>
    </>
  );
}

export default Product;
