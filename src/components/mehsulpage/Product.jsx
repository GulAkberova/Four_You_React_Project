import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "../mehsulpage/mehsul.scss";
// import oyuncaq1 from "../../img/Rectangle 6.png";
// import oyuncaq2 from "../../img/Rectangle 6 (1).png";
// import oyuncaq3 from "../../img/Rectangle 6 (2).png";
// import oyuncaq4 from "../../img/Rectangle 6 (3).png";
import { data } from "../../api/data";
import Card from '../card/Card'


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
        <h1>Mehsullar</h1>
      </section>
      <section className="mehsul_bigdiv">
        { loading ? <div className="loader_div"><span className="loader"></span></div> : products &&
          products.map((index,key) => (
            <Card index={index} key={key}/>
          ))}
      </section>
    </>
  );
}

export default Product;
