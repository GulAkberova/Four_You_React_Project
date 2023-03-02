import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../detailpage/detail.scss";
import oyuncaq1 from '../../img/Rectangle\ 6.png'
import { useEffect } from "react";
// import { useSelector,useDispatch } from 'react-redux'
import { data } from "../../api/data";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



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
  console.log(productData.images)

  const addToCart = (item) => {
    setCheck(true);

    dispatch(add(item));

    setTimeout(() => {
      setCheck(false);
    }, 2000);
    toast.success("Sebete elave olundu", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <section className="detail_bigdiv">
        {loading ? <div className="loader_div"><span className="loader"></span></div> :
        
            <section className="detail_minidiv">
            <div className="detail_img">
              <div className="detail_imgs">
              
                  {
                        productData.images && productData.images.map((i,key)=>(
                          <div className="detail_imgs">
                          {/* <div key={key} className='detail_small_img'>
                          <img src={i.image}/>
                    </div> */}
                          <div key={key} className='detail_big_img'>
                                <img src={i.image}/>
                          </div>
                        </div>
    
                        ))
                  }
               
              </div>
            </div>
            <div className="detail_text">
              <div className="detail_mini_text">
                <h1>{productData?.title}</h1>
                <h3>{productData?.price}m</h3>
                <p>{productData?.content}  </p>
                <button
                  className={check ? "detail_btn_success" : "detail_btn_error"}
                  onClick={() => addToCart(productData)}
                >
                  {check  ? <>Sebete elave olundu</> : <>Sebete elave et</>}
                
                </button>
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
              </div>
            </div>
          </section>
        
        }
         
        
      </section>
    </>
  );
}

export default Detail;
