import React, { useEffect, useState } from "react";
import "./home.scss";
import "../../pages/productpage/mehsul.scss";
import { Link, NavLink } from "react-router-dom";
import Slider from "../../components/corousel/Slider";

import Card from "../../components/card/Card";
import { data } from "../../api/data";
import BlogCard from "../../components/card/BlogCard";
import SwiperProduct from "../../components/corousel/SwiperProduct";
import SwiperPsx from "../../components/corousel/SwiperPsx";
import Gift from "../../components/gift/Gift";

function Home() {
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
  console.log(products);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setLoading(true);

    data.getAll("blog").then((res) => {
      setBlog(res);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Slider />
      <section className="big_pscology">
        <div className="pscology_text psx_bg">
          <h1>Psixoloqlar</h1>
          <p>
            Buradan bizim psixoloqlarımızla daha yaxından tanış ola bilərsiz..
          </p>
        </div>
        <div className="pscology_cards">
          <div className="pscology_cards_mini">
            <SwiperPsx />
          </div>
        </div>
      </section>
      <section className="big_pscology">
        <div className="pscology_text product_bg">
          <h1>Mehsullar</h1>
          <p>
            Buradan bizim məhsullarımızla daha yaxından tanış ola bilersiz..
          </p>
        </div>
        <div className="pscology_cards">
          <div className="pscology_cards_mini_bottom">
            <SwiperProduct />
          </div>
          <div className="pscology_product_home_btn">
            <button>
              <NavLink to={"/product"}>Daha çox</NavLink>
            </button>
          </div>
        </div>
      </section>
      <section className="big_pscology">
        <div className="pscology_text psx_bg">
          <h1>Bloglar</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit <br />
            interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="pscology_cards blog_pad">
          <div className=" pscology_cards_mini_bottom blog_pad_bot">
            {loading ? (
              <div className="loader_div">
                <span className="loader"></span>
              </div>
            ) : (
              blog &&
              blog.map((index, key) => (
                <div className="blog_card_div">
                  <BlogCard index={index} key={key} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Gift />
    </>
  );
}

export default Home;
{
  /* <video  autoPlay loop muted className='video'>
             <source src={video} type='video/mp4'/>
         </video> */
}
