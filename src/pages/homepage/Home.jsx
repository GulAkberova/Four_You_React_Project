import React, { useEffect, useState } from "react";
import "./home.scss";
import '../../pages/productpage/mehsul.scss'
import { Link, NavLink } from "react-router-dom";
import Slider from "../../components/corousel/Slider";
import catdirilma1 from "../../img/padlock 1.png";
import catdirilma2 from "../../img/gift-box (1) 1.png";
import catdirilma3 from "../../img/like (1) 1.png";
import catdirilma4 from "../../img/shipped 1.png";


import Card  from "../../components/card/Card";
import { data } from "../../api/data";
import BlogCard from "../../components/card/BlogCard";
import SwiperProduct from "../../components/corousel/SwiperProduct";
import SwiperPsx from "../../components/corousel/SwiperPsx";

function Home() {
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
 const[blog, setBlog]=useState([])

 useEffect(() => {
   setLoading(true)

   data.getAll("blog").then((res) => {
     setBlog(res)
     setLoading(false)

   });
 }, []);
  return (
    <>
      <Slider />
      <section className="big_pscology">
        <div className="pscology_text">
          <h1>Psixoloqlar</h1>
          <p>
            Buradan bizim psixoloqlarımızla daha yaxından tanış ola bilərsiz..
          </p>
        </div>
        <div className="pscology_cards">
          <div className="pscology_cards_mini">
         <SwiperPsx/>
          </div>
        </div>
      </section>
      <section className="big_pscology">
        <div className="pscology_text">
          <h1>Mehsullar</h1>
          <p>
            Buradan bizim məhsullarımızla daha yaxından tanış ola bilersiz..
          </p>
        </div>
        <div className="pscology_cards">
        <div className="pscology_cards_mini_bottom">

<SwiperProduct/>
        
          </div>
        </div>
      </section>
      <section className="big_pscology">
        <div className="pscology_text">
          <h1>Bloglar</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit <br/>interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="pscology_cards">
        <div className=" pscology_cards_mini_bottom">
        {
      loading ? <div className='loader_div'><span className='loader'></span></div>:
      blog && blog.map((index,key)=>(
        <div className='blog_card_div'>
        <BlogCard index={index} key={key}/>
        </div>
     

      ))
    }

        
          </div>
        </div>
      </section>

      <section className="catdirilma_bigdiv">
        <div className="catdirilma_minidiv">
          <div className="catdirilma_div">
            <img src={catdirilma1} />
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
          </div>
          <div className="catdirilma_div">
            <img src={catdirilma4} />
            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
          </div>
          <div className="catdirilma_div">
            <img src={catdirilma3} />
         <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
          </div>
          <div className="catdirilma_div">
            <img src={catdirilma2} />
         <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
{
  /* <video  autoPlay loop muted className='video'>
             <source src={video} type='video/mp4'/>
         </video> */
}
