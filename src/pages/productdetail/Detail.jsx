import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./detail.scss";
import "../../pages/productpage/mehsul.scss";
import oyuncaq1 from "../../img/Rectangle 6.png";
import { useEffect } from "react";
// import { useSelector,useDispatch } from 'react-redux'
import { data } from "../../api/data";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gift from "../../components/gift/Gift";
import SwiperProduct from "../../components/corousel/SwiperProduct";

function Detail() {
  const param = useParams();
  const [productData, setProductData] = useState([]);
  const [check, setCheck] = useState(false);
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.getById("product", param.id).then((res) => {
      console.log(res);
      setProductData(res);
      setLoading(false);
    });
  }, []);

  const addToCart = (item) => {
    setCheck(!check);

    dispatch(add(item));

    // setTimeout(() => {
    //   setCheck(false);
    // }, 2000);
    if (!check) {
      toast.success("Səbətə əlavə olundu", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Səbətdən çıxarıldı", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Set the selected image to the URL of the first image in the array
    if (productData.images && productData.images.length > 0) {
      setSelectedImage(productData.images[0].image);
    }
  }, [productData.images]);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <section className="carusel">
        <h2>Məhsullar</h2>
        <p>
          <NavLink to={"/"}>Ana Səhifə</NavLink>/
          <NavLink to={"/product"}>Məhsullar</NavLink>/
          <NavLink>Ətraflı</NavLink>
        </p>
      </section>
      <section className="detail_bigdiv">
        {loading ? (
          <div className="loader_div">
            <span className="loader"></span>
          </div>
        ) : (
          <section className="detail_minidiv">
            <div className="detail_img">
              <div className="detail_imgs">
                {productData.images &&
                  productData.images.map((i, key) => (
                    <div key={key} className="detail_small_img">
                      <img
                        src={i.image}
                        onClick={() => handleImageClick(i.image)}
                      />
                    </div>
                  ))}
              </div>
              <div className="detail_big_img">
                <img src={selectedImage} />
              </div>
            </div>
            <div className="detail_text">
              <div className="detail_mini_text">
                <span>Məhsul</span>
                <h1>{productData?.title}</h1>
                <h3>{productData?.price}m</h3>
                {/* <p>{productData?.content}  </p> */}
                <p>{productData?.content}</p>
                <button
                  className={check ? "detail_btn_success" : "detail_btn_error"}
                  onClick={() => addToCart(productData)}
                >
                  {check ? <>Səbətə əlavə olundu</> : <>Səbətə əlavə et</>}
                </button>
              </div>
            </div>
          </section>
        )}
      </section>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Gift />
      <section className="teklif">
        <h1>Təkliflər</h1>
        <div className="pscology_cards">
          <div className="pscology_cards_mini_bottom">
            <SwiperProduct />
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
