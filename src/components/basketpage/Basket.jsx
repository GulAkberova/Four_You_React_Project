import React from "react";
import "../basketpage/basket.scss";
// import hekim1 from '../../img/Rectangle\ 55.png'
// import hekim2 from '../../img/Rectangle\ 55 (1).png'
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, remove } from "../../store/cartSlice";
import Swal from "sweetalert2";



function Basket() {
  let {cart}=useSelector(state=>state.CartReducer)

  let dispatch =useDispatch()

   let totalPrice=0

   cart.forEach(element => {
    totalPrice=totalPrice +(element.quantity * element.price)
    
   });

   const handleRemove=(item)=>{
    Swal.fire({
      title: "Silmək istədiyinizdən əminsinizmi ?",
      text: "Bu əməliyyat geri alına bilməz.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(remove(item))
        Swal.fire("Silindi!", "Məhsul silindi.", "success");
      }
    });
   }

  return (
    <>
      <section className="carusel">
        <h1>Sebetim</h1>
      </section>
      <div className="mehsul_div">
        <h2>Mehsul</h2>
      </div>
      <section className="mehsul_bigdiv">
        <table >
         <thead>
         <tr>
            <th>Mehsul</th>
            <th>Mehsulun adi</th>
            <th>Qiymet</th>
            <th>Say</th>
            <th>Umumi</th>
            <th>Sil</th>

          </tr>
         </thead>
        <tbody>
        {
            cart && cart.map((item,key)=>(
              <tr key={key}>
                <td>dxv</td>
                <td>{item.title}</td>
                <td>{item.price}m</td>
                <td>
            <button onClick={()=>dispatch(decrease(item.id))}>-</button>
             <span> {item.quantity}</span>
             <button onClick={()=>dispatch(increase(item.id))}>+</button>
              </td>
              <td>{(item.price * item.quantity).toFixed(2)}m</td>
            <td><button onClick={()=>handleRemove(item)}><i className="fa-solid fa-x"></i></button></td>
              </tr>

            ))
          }
        </tbody>
        </table>
      </section>
      {/* <div className="mehsul_div">
        <h2>Seans</h2>
      </div>
      <section className="mehsul_bigdiv">
        <table >
          <tr>
            <th>Psixoloq</th>
            <th>Psixoloqun adi</th>
            <th>Qiymet</th>
            <th>Say</th>
            <th>Umumi</th>
            <th>Sil</th>

          </tr>
          <tr>
            <td><img src={hekim2} /></td>
            <td>Sibel Priyeva</td>
            <td>50m</td>
            <td>2ed</td>
            <td>100m</td>
            <td><button><i className="fa-solid fa-x"></i></button></td>
          </tr>
          <tr>
            <td><img src={hekim1} /></td>
            <td>Kənan Hüseynli</td>
            <td>50m</td>
            <td>2ed</td>
            <td>100m</td>
            <td><button><i className="fa-solid fa-x"></i></button></td>
          </tr>
        
        </table>
      </section> */}

      <section className="all_sum">
        <h1>Cem:{totalPrice.toFixed(2)}</h1>
        <button>Tesdiqle</button>

      </section>
    </>
  );
}

export default Basket;
