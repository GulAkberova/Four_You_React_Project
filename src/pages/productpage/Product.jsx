import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./mehsul.scss";
// import oyuncaq1 from "../../img/Rectangle 6.png";
// import oyuncaq2 from "../../img/Rectangle 6 (1).png";
// import oyuncaq3 from "../../img/Rectangle 6 (2).png";
// import oyuncaq4 from "../../img/Rectangle 6 (3).png";
import { data } from "../../api/data";
import Card from '../../components/card/Card'
import ProductFilter from "../../components/productFilter/ProductFilter";


function Product() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading]=useState(false)

   useEffect(() => {
    setLoading(true)
    data.getAll("product").then((res) => {
      console.log(res);
      setProducts(res)
      setLoading(false)
    });
  }, []);
  console.log(products)

  return (
    <>
      <section className="carusel">
        <h1>Məhsullar</h1>
      </section>
      <section className="mehsul_alldiv">
        <ProductFilter/>
        <div className="mehsul_bigdiv">
        { loading ? <div className="loader_div"><span className="loader"></span></div> : products &&
          products.map((index,key) => (
            <div className="mehsul_div_product">
            <Card index={index} key={key}/>
            </div>
          ))}

        </div>

      
      </section>
    </>
  );
}

export default Product;
